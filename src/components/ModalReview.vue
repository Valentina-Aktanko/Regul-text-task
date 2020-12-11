<template>
  <section class="modal modal-review" id="modal-review">
    <form
      class="review-form"
      action="https://echo.htmlacademy.ru"
      method="POST"
    >
      <header class="review-form__header">
        <h2 class="section-title">Новый отзыв</h2>
      </header>

      <figure class="review-form__figure figure">
        <figcaption class="figure__caption section-title">
          Фоточки в свадебном платьице
          <span class="figure__author">Алена Смирнова</span>
        </figcaption>
        <p class="figure__image-wrapper">
          <img
            class="figure__image"
            src="img/image_1_big.jpg"
            width="102"
            height="68"
            alt="Фоточки в свадебном платьице"
          />
        </p>
      </figure>

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
            src="img/image_2.jpg"
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
            src="img/image_3.jpg"
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
            src="img/image_4.jpg"
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
            src="img/image_5.jpg"
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
            src="img/image_6.jpg"
            width="80"
            height="80"
            alt="Невеста с фотоаппаратом"
          />
          <button class="gallery__btn-del" type="button">
            <span class="visually-hidden">Удалить изображение</span>
          </button>
        </li>
      </ul>

      <footer class="review-form__footer">
        <button class="button" type="submit">Отправить</button>
      </footer>
    </form>
    <button
      class="modal__close-btn"
      id="modal-review-close-button"
      type="button"
      @click="closeModalReview"
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
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    closeModalReview() {
      this.$emit('toggle-modal-review')
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 2;
  display: none;

  &--show {
    display: block;
    animation-name: bounce;
    animation-duration: 0.6s;
  }
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

.modal__close-btn:hover svg path {
  fill: var(--color-dark-grey);
  transition: fill 0.6s;
}

.modal__close-btn svg {
  width: 14px;
  height: 14px;
}
</style>
