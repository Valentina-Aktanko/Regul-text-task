<template>
  <section class="modal modal-review" id="modal-review" @scroll="handleScroll">
    <header
      class="modal-review__header"
      :class="{ 'modal-review__header--sticky': headerIsSticky }"
    >
      <h2 class="section-title">Новый отзыв</h2>
      <button
        v-show="headerIsSticky"
        class="modal-review____button-back"
        type="button"
      >
        <span class="visually-hidden">Назад</span>
      </button>
      <button
        class="modal__close-btn"
        type="button"
        @click.prevent="closeModalReview"
      >
        <span class="visually-hidden">Закрыть</span>
        <svg
          width="14"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.364 13.364a1 1 0 01-1.414 0L7 8.414l-4.95 4.95A1 1 0 01.636 11.95L5.586 7 .636 2.05A1 1 0 012.05.636L7 5.586l4.95-4.95a1 1 0 011.414 1.414L8.414 7l4.95 4.95a1 1 0 010 1.414z"
            fill="#9aa2b7"
          />
        </svg>
      </button>
    </header>

    <form
      class="review-form"
      id="review-form"
      action="https://echo.htmlacademy.ru"
      method="POST"
      @submit.prevent="handleFormSubmit"
    >
      <Figure
        :src="require('../assets/img/image_1_big.jpg')"
        width="102"
        height="68"
        caption="Фоточки в свадебном платьице"
        author="Алена Смирнова"
        key="page-figure"
      />

      <div class="review-form__rating-wrapper">
        <Rating
          :class="'review-form__rating'"
          caption="Скорость"
          name="speed"
          rating_value="3"
        />

        <Rating
          :class="'review-form__rating'"
          caption="Скорость отдачи видео"
          name="video-upload-speed"
        />

        <Rating
          :class="'review-form__rating'"
          caption="Качество"
          name="quality"
        />

        <Rating
          :class="'review-form__rating'"
          caption="Пунктуальность"
          name="punctuality"
        />
      </div>

      <div class="comment-wrapper review-form__comment-wrapper">
        <textarea
          class="comment"
          name="comment"
          placeholder="Комментарий"
        ></textarea>
        <p class="comment__caption">12/500</p>
      </div>

      <ul class="gallery">
        <li class="gallery__item">
          <button class="gallery__btn-add" type="button">
            <span class="visually-hidden">Добавить изображение</span>
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 8H8v5c0 .55-.45 1-1 1s-1-.45-1-1V8H1c-.55 0-1-.45-1-1s.45-1 1-1h5V1c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                fill="#9AA2B7"
              />
            </svg>
          </button>
        </li>
        <li class="gallery__item">
          <img
            src="../assets/img/image_2.jpg"
            width="80"
            height="80"
            alt="Молодожены в лодке"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
        <li class="gallery__item">
          <img
            src="../assets/img/image_3.jpg"
            width="80"
            height="80"
            alt="Молодожены гуляют по городу"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
        <li class="gallery__item">
          <img
            src="../assets/img/image_4.jpg"
            width="80"
            height="80"
            alt="Невеста в купальнике"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
        <li class="gallery__item">
          <img
            src="../assets/img/image_5.jpg"
            width="80"
            height="80"
            alt="Счастливая пара с букетом"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
        <li class="gallery__item">
          <img
            src="../assets/img/image_6.jpg"
            width="80"
            height="80"
            alt="Невеста с фотоаппаратом"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
      </ul>
    </form>

    <footer
      class="modal-review__footer"
      :class="{ 'modal-review__footer--sticky': footerIsSticky }"
    >
      <button class="button" type="submit" form="review-form">
        {{ captionFooterButton }}
      </button>
    </footer>
  </section>
</template>

<script>
import Figure from '@/components/Figure.vue'
import Rating from '@/components/Rating.vue'

export default {
  data() {
    return {
      headerIsSticky: false,
      footerIsSticky: false,
    }
  },
  mounted: function () {
    this.makeStickyFooter()
  },
  components: {
    Figure,
    Rating,
  },
  methods: {
    closeModalReview() {
      this.$emit('toggle-modal-review', false)
    },
    handleScroll() {
      this.makeStickyHeader()
      this.makeStickyFooter()
    },
    makeStickyHeader() {
      let modal_review = document.querySelector('.modal-review')
      let modal_review_top = modal_review.getBoundingClientRect().top

      let modal_header = document.querySelector('.modal-review__header')
      let modal_header_height = modal_header.offsetHeight

      let next_sibling = modal_header.nextElementSibling
      let next_subling_top = next_sibling.getBoundingClientRect().top

      let start_scroll_position = modal_review_top + modal_header_height

      if (next_subling_top < start_scroll_position) {
        this.headerIsSticky = true
      } else {
        this.headerIsSticky = false
      }
    },
    makeStickyFooter() {
      let modal_review = document.querySelector('.modal-review')
      let modal_review_bottom = modal_review.getBoundingClientRect().bottom

      let modal_footer = document.querySelector('.modal-review__footer')
      let modal_footer_top = modal_footer.getBoundingClientRect().top
      let modal_footer_height = modal_footer.offsetHeight

      let prev_sibling = modal_footer.previousElementSibling
      let prev_sibling_bottom = prev_sibling.getBoundingClientRect().bottom

      let start_scroll_position = modal_review_bottom - modal_footer_height

      if (
        modal_footer_top > modal_review_bottom - modal_footer_height ||
        prev_sibling_bottom > start_scroll_position
      ) {
        this.footerIsSticky = true
      } else {
        this.footerIsSticky = false
      }
    },
    handleFormSubmit() {
      this.$emit('toggle-modal-review', true)
    }
  },
  computed: {
    captionFooterButton() {
      return this.footerIsSticky ? 'Продолжить ' : 'Отправить'
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 2;
}

.modal__close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 4;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
}

.modal__close-btn svg {
  width: 14px;
  height: 14px;
}

.modal__close-btn:hover svg path {
  fill: var(--color-dark-grey);
  transition: fill 0.6s;
}

.modal-review {
  top: 56px;
  left: 50%;
  margin-left: -160px;
  width: 320px;
  height: calc(100% - 56px);
  overflow: auto;
  box-sizing: border-box;
  background-color: var(--color-white);
  border-radius: 16px 16px 0px 0px;
}

.modal-review__header {
  display: flex;
  padding: 16px;
  padding-right: 40px;
  background-color: var(--color-white);
}

.modal-review__header::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 148px;
  width: 24px;
  height: 3px;
  background-image: url('../assets/img/icon-rect.svg');
}

.modal-review__header--sticky {
  position: sticky;
  top: 0;
  z-index: 3;
  border-bottom: 1px solid var(--color-extra-light-grey-2);
}

.modal-review____button-back {
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  background-image: url(../assets/img/icon-arrow-back.svg);
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}

.modal-review__footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-extra-light-grey);
}

.modal-review__footer--sticky {
  position: sticky;
  bottom: 0;
  z-index: 3;
  width: 100%;
}

.section-title {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.review-form {
  display: flex;
  flex-direction: column;
}

.review-form__figure {
  margin-top: -16px;
}

.review-form__rating-wrapper {
  padding: 16px;
  margin-top: -8px;
}

.review-form__rating {
  margin-bottom: 16px;
}

.review-form__rating:last-child {
  margin-bottom: 0;
}

.comment-wrapper {
  padding: 16px;
  color: var(--color-light-grey);
}

.review-form__comment-wrapper {
  margin-top: -8px;
}

.comment {
  margin-bottom: 4px;
  padding: 16px 12px;
  width: 100%;
  height: 146px;
  box-sizing: border-box;
  vertical-align: top;
  font: inherit;
  background: var(--color-white-2);
  border: 1px solid var(--color-extra-light-grey);
  border-radius: 6px;
  resize: none;
}

.comment__caption {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
}

.gallery {
  display: grid;
  grid-template-columns: 80px 80px auto;
  gap: 8px;
  margin: 0;
  padding: 16px;
  list-style: none;
}

.review-form__gallery {
  margin-top: -16px;
}

.gallery__item {
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 8px;
}

.gallery__item:last-child {
  margin-right: 0;
}

.gallery__btn-add {
  width: 80px;
  height: 80px;
  background-color: var(--color-white-3);
  border: 1px solid var(--color-extra-light-grey);
  border-radius: 6px;
}

.gallery__btn-add svg {
  width: 14px;
  height: 14px;
}

.gallery__btn-del {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  width: 80px;
  height: 80px;
  background-color: transparent;
  border: none;
}

.gallery__btn-del::before {
  content: '';
  position: absolute;
  top: 15px;
  right: 17px;
  width: 14px;
  height: 18px;
  background-image: url(../assets/img/icon-delete.svg);
}

.gallery__btn-del svg {
  width: 14px;
  height: 18px;
}

.gallery__item:hover:not(.gallery__btn-add) .gallery__btn-del {
  z-index: 0;
  opacity: 1;
  transition: opacity 0.6s;
}

.gallery__btn-add:hover,
.gallery__btn-add:focus {
  border-color: var(--color-light-grey);
  transition: border-color 0.6s;
}

.gallery__btn-add:hover svg path,
.gallery__btn-add:focus svg path {
  fill: var(--color-light-grey);
  transition: fill 0.6s;
}

.review-form__footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid var(--color-extra-light-grey);
}

@media (min-width: 560px) {
  .modal-review {
    margin-left: calc(var(--tablet-width) / -2);
    width: var(--tablet-width);
    height: auto;
    border-radius: 16px;
  }

  .modal-review__header {
    position: static;
    padding: 16px 32px;
    padding-right: 40px;
    border-bottom: 1px solid var(--color-extra-light-grey);
  }

  .modal-review__header::before {
    content: none;
  }

  .modal-review__footer {
    display: flex;
    justify-content: flex-end;
    padding-left: 24px 32px;
  }

  .review-form__figure {
    margin-top: 0;
  }

  .review-form__rating-wrapper {
    display: grid;
    grid-template-columns: 210px auto;
    gap: 20px;
    margin-top: -24px;
    padding: 32px;
  }

  .review-form__rating {
    margin-bottom: 0;
  }

  .comment-wrapper {
    padding: 32px;
  }

  .review-form__comment-wrapper {
    margin-top: -36px;
  }

  .gallery {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 32px;
  }

  .review-form__gallery {
    margin-top: -40px;
  }
}
</style>
