<template>
  <figure class="review-form__figure figure">
    <figcaption class="figure__caption section-title">
      {{ caption }}
      <span class="figure__author">{{ author }}</span>
    </figcaption>
    <p class="figure__image-wrapper">
      <img
        class="figure__image"
        :src="src"
        :width="width"
        :height="height"
        :alt="caption"
      />
    </p>
  </figure>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    src: {
      type: String,
      default: 'https://placehold.it/102x68'
    },
    width: {
      type: String,
      default: '102'
    },
    height: {
      type: String,
      default: '68'
    },
    caption: {
      type: String,
      default: 'Изображение'
    },
    author: {
      type: String,
      default: 'Автор'
    }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 16px;
}

.figure__caption {
  display: flex;
  flex-direction: column;
}

.figure__author {
  margin: 0;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-grey);
}

.figure__image-wrapper {
  order: -1;
  margin: 0;
  margin-bottom: 13px;
  width: 84px;
  height: 56px;
}

@media (min-width: 560px) {
  .figure {
    flex-direction: row;
    padding: 24px 32px;
  }
  .figure__caption {
    margin-top: 12px;
  }

  .figure__image-wrapper {
    width: 102px;
    height: 68px;
    margin-right: 20px;
    margin-bottom: 0;
  }
}
</style>
