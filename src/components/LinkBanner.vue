<template>
  <div class="submain-link-wrap">
    <a
      class="submain-link-button"
      href="javascript:void(0);"
      role="button"
      aria-haspopup="true"
      @click="$emit('click')"
    >
      <div class="submain-link-title">{{ title }}</div>
      <div class="submain-link-sub">{{ subtitle }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LinkBanner',
  props: {
    title: {
      type: String,
      default: '내 자녀의 생애 첫 금융 시작'
    },
    subtitle: {
      type: String,
      default: '우리아이 계좌개설'
    }
  }
};
</script>

<style scoped>
.submain-link-wrap {
  /* 필요시 스타일 추가 */
}
</style>
