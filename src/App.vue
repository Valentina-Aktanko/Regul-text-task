<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: 'Montserrat Medium';
  src: url('~@/assets/fonts/montserrat-medium-webfont.woff2') format('woff2'),
    url('~@/assets/fonts/montserrat-medium-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat Regular';
  src: url('~@/assets/fonts/montserrat-regular-webfont.woff2') format('woff2'),
    url('~@/assets/fonts/montserrat-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'montserratsemibold';
  src: url('~@/assets/fonts/montserrat-semibold-webfont.woff2') format('woff2'),
    url('~@/assets/fonts/montserrat-semibold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  --color-white: #ffffff;
  --color-white-2: #fafafa; /* sorry for the names */
  --color-white-3: #f3f4f6;
  --color-extra-light-grey: #eaecf0;
  --color-extra-light-grey-2: #eceef2;
  --color-light-grey: #7f899e;
  --color-grey: #50586a;
  --color-dark-grey: #3c3c3c;
  --color-black-06: rgba(0, 0, 0, 0.6);
  --color-brand-green: #53c6d1;
  --tablet-width: 560px;
}

#app {
  min-width: 320px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Montserrat Regular', 'Arial', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-dark-grey);
}

img {
  width: 100%;
  height: auto;
}

.visually-hidden:not(:focus):not(:active) {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
}

/* Animation */
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  70% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  90% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes bounce {
  0% {
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  70% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  90% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.button {
  padding: 8px 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: var(--color-white);

  background: var(--color-brand-green);
  border: none;
  border-radius: 6px;
}
</style>
