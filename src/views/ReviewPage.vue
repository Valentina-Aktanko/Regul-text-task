<template>
  <div>
    <h1 class="visually-hidden">{{ title }}</h1>

    <section class="main-content">
      <h2 class="visually-hidden">Основной контент</h2>
      <div class="main-content__wrapper">
        <!-- Тут будет основной контент страницы -->
        <button class="button main-content__button" @click="toggleModalReview">
          Оставить отзыв
        </button>
        <ModalReview
          :class="{ 'modal--show': showModalReview }"
          @toggle-modal-review="toggleModalReview"
        />
        <ModalOverlay />
      </div>
    </section>
  </div>
</template>

<script>
import ModalReview from '@/components/ModalReview.vue'
import ModalOverlay from '@/components/ModalOverlay.vue'

export default {
  data() {
    return {
      title: 'Тестовое задание на позицию HTML-верстальщик',
      showModalReview: false,
    }
  },
  components: {
    ModalReview,
    ModalOverlay,
  },
  methods: {
    toggleModalReview() {
      this.showModalReview = !this.showModalReview
    },
  },
  addToCart() {
    this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
  },
}
</script>

<style lang="scss">
.main-content__wrapper {
  width: 320px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  padding-top: 100px;
}

@media (min-width: 560px) {
  .main-content__wrapper {
    width: 560px;
    padding: 24px 32px;
    padding-top: 100px;
  }
}
</style>
