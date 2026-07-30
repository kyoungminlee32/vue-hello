<template>
  <BaseSwiper :slides="slides" wrapClass="-deposit" :onBannerClick="onBannerClick" />
</template>

<script>
import BaseSwiper from './BaseSwiper.vue';
export default {
  name: 'FwSwiper',
  components: { BaseSwiper },
  setup() {
    const slides = [
      { code: 10001160, type: 'type01', title: '복잡한 우대조건 없이<br>목돈을 굴릴 수 있는', sub: 'NH올원e예금' },
      { code: 10001314, type: 'type02', title: '복잡한 우대조건 없는<br>모바일 전용 고금리 적금', sub: 'NH올원e적금' },
      { code: 10001313, type: 'type03', title: '고객들의 이유있는 선택!<br>NH농협은행 대표 통장', sub: 'NH올원e통장' },
      { code: 10000587, type: 'type04', title: '청약권이 부여되는<br>내 집 마련의 필수 상품', sub: '주택청약종합저축' },
    ];
    const onBannerClick = (code) => {
      if (window.getBnrDetail) window.getBnrDetail(code);
      else alert('배너 클릭: ' + code);
    };
    return { slides, onBannerClick };
  }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>