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
    >
      <Figure
        :src="require('../assets/img/image_1_big.jpg')"
        width="102"
        height="68"
        caption="Фоточки в свадебном платьице"
        author="Алена Смирнова"
      />

      <div class="review-form__rating-wrapper rating-wrapper">
        <fieldset class="rating review-form__rating">
          <legend class="rating__caption">Скорость</legend>
          <div class="rating__group">
            <input
              class="rating__star rating__star--filled"
              type="radio"
              name="speed"
              value="1"
              aria-label="Ужасно"
            />
            <input
              class="rating__star rating__star--filled"
              type="radio"
              name="speed"
              value="2"
              aria-label="Сносно"
            />
            <input
              class="rating__star rating__star--filled"
              type="radio"
              name="speed"
              value="3"
              aria-label="Нормально"
              checked
            />
            <input
              class="rating__star"
              type="radio"
              name="speed"
              value="4"
              aria-label="Хорошо"
            />
            <input
              class="rating__star"
              type="radio"
              name="speed"
              value="5"
              aria-label="Отлично"
            />
          </div>
        </fieldset>

        <fieldset class="rating">
          <legend class="rating__caption">Скорость отдачи видео</legend>
          <div class="rating__group">
            <input
              class="rating__star"
              type="radio"
              name="video-upload-speed"
              value="1"
              aria-label="Ужасно"
            />
            <input
              class="rating__star"
              type="radio"
              name="video-upload-speed"
              value="2"
              aria-label="Сносно"
            />
            <input
              class="rating__star"
              type="radio"
              name="video-upload-speed"
              value="3"
              aria-label="Нормально"
            />
            <input
              class="rating__star"
              type="radio"
              name="video-upload-speed"
              value="4"
              aria-label="Хорошо"
            />
            <input
              class="rating__star"
              type="radio"
              name="video-upload-speed"
              value="5"
              aria-label="Отлично"
            />
          </div>
        </fieldset>

        <fieldset class="rating">
          <legend class="rating__caption">Качество</legend>
          <div class="rating__group">
            <input
              class="rating__star"
              type="radio"
              name="quality"
              value="1"
              aria-label="Ужасно"
            />
            <input
              class="rating__star"
              type="radio"
              name="quality"
              value="2"
              aria-label="Сносно"
            />
            <input
              class="rating__star"
              type="radio"
              name="quality"
              value="3"
              aria-label="Нормально"
            />
            <input
              class="rating__star"
              type="radio"
              name="quality"
              value="4"
              aria-label="Хорошо"
            />
            <input
              class="rating__star"
              type="radio"
              name="quality"
              value="5"
              aria-label="Отлично"
            />
          </div>
        </fieldset>

        <fieldset class="rating">
          <legend class="rating__caption">Пунктуальность</legend>
          <div class="rating__group">
            <input
              class="rating__star"
              type="radio"
              name="punctuality"
              value="1"
              aria-label="Ужасно"
            />
            <input
              class="rating__star"
              type="radio"
              name="punctuality"
              value="2"
              aria-label="Сносно"
            />
            <input
              class="rating__star"
              type="radio"
              name="punctuality"
              value="3"
              aria-label="Нормально"
            />
            <input
              class="rating__star"
              type="radio"
              name="punctuality"
              value="4"
              aria-label="Хорошо"
            />
            <input
              class="rating__star"
              type="radio"
              name="punctuality"
              value="5"
              aria-label="Отлично"
            />
          </div>
        </fieldset>
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

export default {
  data() {
    return {
      headerIsSticky: false,
      footerIsSticky: true
    }
  },
  components: {
    Figure
  },
  methods: {
    closeModalReview() {
      this.$emit('toggle-modal-review')
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
      let modal_footer_height = modal_footer.offsetHeight

      let prev_sibling = modal_footer.previousElementSibling
      let prev_sibling_bottom = prev_sibling.getBoundingClientRect().bottom

      let start_scroll_position = modal_review_bottom - modal_footer_height

      if (prev_sibling_bottom == start_scroll_position) {
        this.footerIsSticky = false
      } else {
        this.footerIsSticky = true
      }
    }
  },
  computed: {
    captionFooterButton() {
      return this.footerIsSticky ? 'Продолжить ' : 'Отправить'
    }
  }
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

//-------------------------------------------

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

  //-------------------------------------------

  .rating-wrapper {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 210px 20px auto;
    grid-template-columns: 210px auto;
    gap: 20px;
    padding: 32px;
  }

  .review-form__rating-wrapper {
    margin-top: -24px;
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
