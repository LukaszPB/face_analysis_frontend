<template>
  <v-container align="center">
    <v-file-input
      v-if="!image"
      hide-input
      label="Click to upload your photo"
      variant="plain"
      accept="image/*"
      @change="onFileChange">
    </v-file-input>

    <v-card v-if="image && traits">
      <v-card-text>
        <v-row>

          <v-col>
            <v-img :src="image" contain  @click="deleteImage" class="custom-border"></v-img>
          </v-col>

          <v-col class="traits-column">
            <v-card class="traits-card">
              <v-card-title class="text-center">{{$t("analysis")}}</v-card-title>
              <v-card-text>
                <p><strong class="label">{{$t("eye_color")}}:</strong></p>
                <v-select
                  v-model="traits.eye_color"
                  :items= "eye_colors"
                  item-title="text"
                  item-value="value"
                  density="compact"
                ></v-select>
                <p><strong class="label">{{$t("hair_color")}}:</strong></p>
                <v-select
                  v-model="traits.hair_color"
                  :items= "hair_colors"
                  item-title="text"
                  item-value="value"
                  density="compact"
                ></v-select>
                <p><strong class="label">{{$t("face_shape")}}:</strong></p>
                <v-select
                  v-model="traits.face_shape"
                  :items= "face_shapes"
                  item-title="text"
                  item-value="value"
                  density="compact"
                ></v-select>
                <p><strong class="label">{{$t("skin_tone")}}:</strong></p>
                <v-select
                  v-model="traits.skin_tone"
                  :items= "skin_tones"
                  item-title="text"
                  item-value="value"
                  density="compact"
                ></v-select>
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
import {sk} from "vuetify/locale";
export default {
  name: "ImageAnalizer",
  data() {
    return {
      image: null,
      traits: null,
    };
  },
  computed: {
    sk() {
      return sk
    },
    eye_colors() {
      return [
        {text: this.$t("eye_colors.gray"), value: "gray"},
        {text: this.$t("eye_colors.blue"), value: "blue"},
        {text: this.$t("eye_colors.green"), value: "green"},
        {text: this.$t("eye_colors.brown"), value: "brown"},
        {text: this.$t("eye_colors.hazel"), value: "hazel"}
      ];
    },
    hair_colors() {
      return [
        {text: this.$t("hair_colors.blonde"), value: "blonde"},
        {text: this.$t("hair_colors.black"), value: "black"},
        {text: this.$t("hair_colors.brown"), value: "brown"}
      ];
    },
    face_shapes() {
      return [
        {text: this.$t("face_shapes.round"), value: "round"},
        {text: this.$t("face_shapes.oval"), value: "oval"},
        {text: this.$t("face_shapes.pear"), value: "pear"},
        {text: this.$t("face_shapes.rectangle"), value: "rectangle"},
        {text: this.$t("face_shapes.square"), value: "square"},
        {text: this.$t("face_shapes.triangle"), value: "triangle"}
      ];
    },
    skin_tones() {
      return [
        {text: this.$t("skin_tones.winter"), value: "winter"},
        {text: this.$t("skin_tones.autumn"), value: "autumn"},
        {text: this.$t("skin_tones.summer"), value: "summer"},
        {text: this.$t("skin_tones.spring"), value: "spring"}
      ];
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
      this.analizeImage(file)
    },
    async analizeImage(file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://127.0.0.1:5000/process-image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        console.log(response.data)
        this.traits = response.data
        this.$emit("updateTraits", this.traits);
      } catch (error) {
        this.message = `Błąd przesyłania: ${error.response ? error.response.data : error.message}`;
      }
    },
    deleteImage() {
      this.image = null
      this.traits = {}
      this.$emit("updateTraits", this.traits);
    }
  },
}
</script>
<style scoped>
.v-file-input {
  width: 300px;
  height: 200px;
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
  font-size: 16px;
}

.v-file-input:hover {
  border-color: #d63384;
  background: #fef5fc;
  color: #d63384;
}

/* Karta analizy */
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

/* Stylizacja tekstu */
.label {
  color: #d63384;
  font-weight: bold;
}
.v-card-title {
  color: #d63384;
}
.v-card{
  border-radius: 12px;
}
.custom-border {
  border: 5px solid #c59ac2;
  border-radius: 12px;
  background: linear-gradient(135deg, #fde2e4, #c59ac2);
}
</style>
