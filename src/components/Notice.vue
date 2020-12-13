<template>
  <div class="notice">
    <p class="notice__text">{{ text }}</p>
    <button class="notice__button" @click="handleCloseNotice">
      <span class="visually-hidden">Закрыть уведомление</span>
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
          fill="#fff"
          fill-opacity=".4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.89 8.7L12 10.59 10.11 8.7a.996.996 0 10-1.41 1.41L10.59 12 8.7 13.89a.996.996 0 101.41 1.41L12 13.41l1.89 1.89a.996.996 0 101.41-1.41L13.41 12l1.89-1.89a.996.996 0 000-1.41c-.39-.38-1.03-.38-1.41 0z"
          fill="#15A758"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Успешно отправлено!'
    }
  },
  methods: {
    handleCloseNotice() {
      this.$emit('close-notice')
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  position: relative;
  padding: 8px 12px;
  padding-right: 36px;
  width: 280px;
  background-color: var(--color-green);
  box-shadow: 0px 2px 24px var(--color-black-008);
  border-radius: 6px;
}

.notice__text {
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
}

.notice__button {
  position: absolute;
  top: 6px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}

.notice__button svg {
  width: 24px;
  height: 24px;
}
</style>
