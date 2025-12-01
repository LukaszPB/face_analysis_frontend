<template>
  <v-container align="center">
    <p v-if="translated_error_message" class="error-message">
      {{ translated_error_message }}
    </p>

    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>

    <v-file-input
      v-if="!image && !loading"
      hide-input
      label="Click to upload your photo"
      variant="plain"
      accept="image/*, .heic"
      @change="onFileChange">
    </v-file-input>

    <MakeupFunFact v-if="!image"/>

    <v-card v-if="image && traits && !loading">
      <v-card-text class="background">
        <v-row>
          <v-col>
            <v-img :src="image" class="custom-border" width="600" height="auto"></v-img><br>
            <v-btn class="custom-border" icon @click="deleteImage">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>

          <v-col class="traits-column">
            <v-card class="traits-card">
              <v-card-title class="text-center">{{$t("analysis")}}</v-card-title>
              <v-card-text>
                <p><strong class="label">{{$t("eye_color")}}:</strong></p>
                <v-select v-model="traits.eye_color" :items="eye_colors" item-title="text" item-value="value" density="compact"></v-select>

                <p><strong class="label">{{$t("hair_color")}}:</strong></p>
                <v-select v-model="traits.hair_color" :items="hair_colors" item-title="text" item-value="value" density="compact"></v-select>

                <p><strong class="label">{{$t("face_shape")}}:</strong></p>
                <v-select v-model="traits.face_shape" :items="face_shapes" item-title="text" item-value="value" density="compact"></v-select>

                <p><strong class="label">{{$t("skin_tone")}}:</strong></p>
                <v-select v-model="traits.skin_tone" :items="skin_tones" item-title="text" item-value="value" density="compact"></v-select>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
import axios from "axios";
import heic2any from "heic2any";
import MakeupFunFact from "@/components/makeupFunFact.vue";

export default {
  name: "ImageAnalizer",
  components: { MakeupFunFact },
  emits: ["updateTraits"],
  data() {
    return {
      image: null,
      traits: null,
      loading: false,
      error_code_key: null,
      error_details: {},
    };
  },
  computed: {
    translated_error_message() {
      if (!this.error_code_key) {
        return null;
      }
      const messageKey = `error_messages.${this.error_code_key}`;
      return this.$t(messageKey, this.error_details);
    },
    eye_colors() {
      return [
        { text: this.$t("eye_colors.gray"), value: "gray" },
        { text: this.$t("eye_colors.blue"), value: "blue" },
        { text: this.$t("eye_colors.green"), value: "green" },
        { text: this.$t("eye_colors.brown"), value: "brown" },
        { text: this.$t("eye_colors.hazel"), value: "hazel" }
      ];
    },
    hair_colors() {
      return [
        { text: this.$t("hair_colors.blonde"), value: "blonde" },
        { text: this.$t("hair_colors.black"), value: "black" },
        { text: this.$t("hair_colors.brown"), value: "brown" }
      ];
    },
    face_shapes() {
      return [
        { text: this.$t("face_shapes.round"), value: "round" },
        { text: this.$t("face_shapes.oval"), value: "oval" },
        { text: this.$t("face_shapes.pear"), value: "pear" },
        { text: this.$t("face_shapes.rectangle"), value: "rectangle" },
        { text: this.$t("face_shapes.square"), value: "square" },
        { text: this.$t("face_shapes.triangle"), value: "triangle" }
      ];
    },
    skin_tones() {
      return [
        { text: this.$t("skin_tones.winter"), value: "winter" },
        { text: this.$t("skin_tones.autumn"), value: "autumn" },
        { text: this.$t("skin_tones.summer"), value: "summer" },
        { text: this.$t("skin_tones.spring"), value: "spring" }
      ];
    }
  },
  methods: {
    resetErrors() {
      this.error_code_key = null;
      this.error_details = {};
    },

    async onFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.loading = true;
      this.resetErrors();

      if (file.name.toLowerCase().endsWith(".heic") || file.type === "image/heic") {
        try {
          const convertedBlob = await heic2any({
            blob: file,
            toType: "image/jpeg",
            quality: 0.8
          });
          this.image = URL.createObjectURL(convertedBlob);
        } catch (e) {
          console.error("HEIC preview conversion failed", e);
          this.error_code_key = "HEIC_PREVIEW_FAILED";
        }
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }

      await this.analizeImage(file);
      this.loading = false;
    },

    async analizeImage(file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(
          'http://127.0.0.1:5000/process-image',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        this.traits = response.data;
        this.$emit("updateTraits", this.traits);

      } catch (error) {
        console.error("Backend Error:", error);

        const errorData = error.response?.data;

        if (errorData?.error_code) {
          this.error_code_key = errorData.error_code;

          if (this.error_code_key === 'TOO_MANY_FACES' && errorData.count) {
            this.error_details = { count: errorData.count };
          }
        } else {
          this.error_code_key = 'UNKNOWN_UPLOAD_ERROR';
        }

        this.traits = {
          eye_color: "-",
          face_shape: "-",
          hair_color: "-",
          skin_tone: "-"
        };
        this.$emit("updateTraits", this.traits);
      }
    },

    deleteImage() {
      this.resetErrors();
      this.image = null;
      this.traits = null;
      this.$emit("updateTraits", {});
    }
  },
}
</script>

<style scoped>
/* Keep your existing styles */
.v-file-input {
  width: 100%;
  max-width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px dashed #e0e0e0;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #999;
  font-size: 64px;
  margin: 0 auto;
}

.v-file-input:hover {
  border-color: #d63384;
  background: #fef5fc;
  color: #d63384;
}

.traits-column {
  display: flex;
  align-items: center;
}

.traits-card {
  width: 100%;
  min-height: 300px;
  border-radius: 12px;
  padding: 16px;
  text-align: left;
  background: linear-gradient(135deg, #fde2e4, #c59ac2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.label {
  color: #d63384;
  font-weight: bold;
}
.v-card-title {
  color: #d63384;
}
.v-card {
  border-radius: 12px;
}
.background {
  background: linear-gradient(135deg, #fde2e4, #c59ac2);
}
.error-message {
  color: #e53935;
  font-weight: 600;
  margin: 8px 0;
  padding: 6px 10px;
  border: 1px solid #e53935;
  border-radius: 6px;
  background-color: #fdecea;
}
</style>
