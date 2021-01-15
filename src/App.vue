<template>
  <div id="app">
    <daily-offer></daily-offer>
  </div>
</template>

<script>
import DailyOffer from './components/DailyOffer.vue'

export default {
  name: 'App',
  components: {
    DailyOffer : DailyOffer
  }
}
</script>

<style>
/*---------- Master Style ----------*/
  @font-face {
    font-family: Estedad;
    font-style: normal;
    font-weight: 700;
    src: url('fonts/Estedad-Black.eot');
    src: url('fonts/Estedad-Black.eot?#iefix') format('embedded-opentype'),
    url('fonts/Estedad-Black.woff') format('woff'),
    url('fonts/Estedad-Black.ttf') format('truetype');
  }
  @font-face {
    font-family: Estedad;
    font-style: normal;
    font-weight: bold;
    src: url('fonts/Estedad-Bold.eot');
    src: url('fonts/Estedad-Bold.eot?#iefix') format('embedded-opentype'),
    url('fonts/Estedad-Bold.woff') format('woff'),
    url('fonts/Estedad-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: Estedad;
    font-style: normal;
    font-weight: normal;
    src: url('fonts/Estedad-Medium.eot');
    src: url('fonts/Estedad-Medium.eot?#iefix') format('embedded-opentype'),
    url('fonts/Estedad-Medium.woff') format('woff'),
    url('fonts/Estedad-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Estedad;
    font-style: normal;
    font-weight: 300;
    src: url('fonts/Estedad-Light.eot');
    src: url('fonts/Estedad-Light.eot?#iefix') format('embedded-opentype'),
    url('fonts/Estedad-Light.woff') format('woff'),
    url('fonts/Estedad-Light.ttf') format('truetype');
  }
  body,
  html {
    height: 100%;
    margin: 0
  }
  body {
    font-family: 'Estedad' !important;
    font-size: .9em;
    font-weight: 400;
    direction: rtl;
    color: #151515;
    text-align: right;
    word-spacing: -2px;
  }
  .container{
    max-width: 1400px;
  }
</style>
