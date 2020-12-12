<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  --color-white: #ffffff;
  --color-white-2: #fafafa;
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
  font-family: 'Montserrat', 'Arial', sans-serif;
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
  clip-path: inset(100%);
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
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

.bounce-enter-active {
  animation: bounce-in 0.6s;
}

.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(-2000px);
  }
  70% {
    transform: translateY(30px);
  }
  90% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
