<template>
  <div>
    <h1 class="visually-hidden">{{ title }}</h1>

    <section class="main-content">
      <h2 class="visually-hidden">Основной контент</h2>
      <div class="main-content__wrapper">
        <Figure
          :src="require('../assets/img/image_1_big.jpg')"
          width="102"
          height="68"
          caption="Фоточки в свадебном платьице"
          author="Алена Смирнова"
        />
        <button class="button main-content__button" @click="toggleModalReview">
          Оставить отзыв
        </button>
        <transition name="bounce">
          <ModalReview
            v-if="showModal"
            @toggle-modal-review="toggleModalReview"
          />
        </transition>
        <ModalOverlay v-if="showModal" />
      </div>
    </section>
  </div>
</template>

<script>
import ModalReview from '@/components/ModalReview.vue'
import ModalOverlay from '@/components/ModalOverlay.vue'
import Figure from '@/components/Figure.vue'

export default {
  data() {
    return {
      title: 'Тестовое задание на позицию HTML-верстальщик',
      showModal: false
    }
  },
  components: {
    ModalReview,
    ModalOverlay,
    Figure
  },
  methods: {
    toggleModalReview() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">
.main-content__wrapper {
  width: 320px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
}

.main-content__wrapper > .figure {
  margin-left: -16px;
}

@media (min-width: 560px) {
  .main-content__wrapper {
    width: var(--tablet-width);
    padding: 24px 32px;
  }

  .main-content__wrapper > .figure {
    margin-left: -32px;
  }
}
</style>
