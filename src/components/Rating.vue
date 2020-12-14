<template>
  <fieldset class="rating">
    <legend class="rating__caption">{{ caption }}</legend>

    <div class="rating__group">
      <input class="rating__star"
        v-for="(rating_label, index) in rating_labels"
        :class="{ 'rating__star--filled': index + 1 <= rating_value }"
        type="radio"
        :name="name"
        :value="index + 1"
        :aria-label="rating_label"
        :key="name + index"
        @click="onClick(current_rating_item, index)"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      rating_labels: ['Ужасно', 'Сносно', 'Нормально', 'Хорошо', 'Отлично']
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
      type: Number,
      default: 0
    },
    current_rating_item: {
      type: Number,
      defailt: 0
    }
  },
  methods: {
    onClick(current_rating_item, index_of_star) {
      let new_value = index_of_star + 1
      this.$emit('change-rating-value', current_rating_item, new_value)
    }
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
