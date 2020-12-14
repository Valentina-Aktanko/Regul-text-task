<template>
  <fieldset class="rating">
    <legend class="rating__caption">{{ caption }}</legend>

    <div class="rating__group">
      <input
        v-for="(item, index) in items"
        class="rating__star"
        :class="{ 'rating__star--filled': index + 1 <= rating_value }"
        type="radio"
        :name="name"
        :value="index + 1"
        :aria-label="item"
        :key="name + index"
        @click="changeRatingValue(index + 1)"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      items: ['Ужасно', 'Сносно', 'Нормально', 'Хорошо', 'Отлично']
    }
  },
  props: {
    caption: {
      type: String,
      default: 'Рейтинг'
    },
    name: {
      type: String,
      default: 'rating'
    },
    rating_value: {
      type: String,
      default: '0'
    }
  },
  methods: {
    changeRatingValue(value) {
      this.rating = Number(value)
    }
  },
  update() {
    this.changeRatingValue(this.props.rating_value)
    console.log(this.props.rating_value);
    console.log(this.rating);
  }
}
</script>

<style lang="scss">
.rating {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
}

.rating__caption {
  margin-bottom: 8px;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.rating__group {
  position: relative;
  width: 176px;
  height: 32px;
}

.rating__star {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  background-image: url(../assets/img/star.svg);
  background-position: 5.33px 4px;
  background-repeat: no-repeat;
  appearance: none;
}

.rating__star:hover,
.rating__star:focus,
.rating__star:active {
  background-image: url(../assets/img/star-filled.svg);
  outline: none;
}

.rating__star--filled {
  background-image: url(../assets/img/star-filled.svg);
}

.rating__star:nth-of-type(2) {
  left: 36px;
}

.rating__star:nth-of-type(3) {
  left: 72px;
}

.rating__star:nth-of-type(4) {
  left: 108px;
}
.rating__star:nth-of-type(5) {
  left: 144px;
}
</style>
