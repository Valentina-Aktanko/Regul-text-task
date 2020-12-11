<template>
  <div class="modal-overlay"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  width: 100%;
  height: 100%;
  background-color: var(--color-black-06);

  &--show {
    display: block;
  }
}
</style>
