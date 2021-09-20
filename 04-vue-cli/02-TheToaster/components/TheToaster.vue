<template>
  <div class="toasts">
    <UiToast
      v-for="(toast, index) in toasts"
      :key="toast.id"
      :toastType="toast.toastType"
      :message="toast.message"
      @removeToast="removeToast(index)"
    />
  </div>
</template>

<script>
import UiToast from './UiToast';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    success(message) {
      this.toasts.push({
        toastType: 'success',
        message,
        id: new Date(),
      });
    },
    error(message) {
      this.toasts.push({
        toastType: 'error',
        message,
        id: new Date(),
      });
    },
    removeToast(index) {
      this.toasts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
