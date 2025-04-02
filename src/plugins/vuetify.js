/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'beautyTheme',
    themes: {
      beautyTheme: {
        dark: false,
        colors: {
          // background: '#FADADD', // Pudrowy róż
          surface: '#FFFFFF', // Biała powierzchnia dla kart
          primary: '#E6A4B4', // Pudrowy róż
          secondary: '#C8A27A', // Złoty/beżowy
          success: '#A8D5BA', // Delikatna pastelowa zieleń
          error: '#D16666', // Ciepła czerwień
          info: '#A3C4F3', // Subtelny błękit
          warning: '#F4C095', // Delikatny brzoskwiniowy
        },
      },
    },
  },
})
