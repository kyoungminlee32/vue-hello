<template>
<BaseSwiper :slides="slides" wrapClass="-loan" :onBannerClick="onBannerClick" />
</template>

<script>
import BaseSwiper from './BaseSwiper.vue';
export default {
    name: 'FwSwiper2',
    components: { BaseSwiper },
    setup() {
        const slides = [
            { code: 40000954, type: 'type02', title: '개인사업자 부동산 담보대출<br>비대면 신규 출시!', sub: 'NH e사장님 부동산담보대출', tags: ['#개인사업자', '#담보대출'] },
            { code: 40000938, type: 'type01', title: '여러 보증기관을<br>한번에 비교하세요', sub: 'NH모바일전세대출+', tags: ['#전세대출', '#갈아타기'] },
            { code: 40000890, type: 'type02', title: '개인사업자 전용<br>비대면 즉시 신용대출', sub: 'NH e사장님 바로대출', tags: ['#개인사업자', '#신용대출'] },
            { code: 40000950, type: 'type03', title: '새내기 직장인을 위한 <br>신용대출상품', sub: 'NH첫시작엔대출', tags: ['#신용대출', '#사회초년생'] },
            { code: 40000927, type: 'type04', title: '공적연금을 받는 고객이라면<br>간편하게 신청', sub: 'NH연금엔대출', tags: ['#신용대출', '#공적연금'] },
        ];
        const onBannerClick = (code) => {
            if (window.moveProductDetailPage) window.moveProductDetailPage(code);
            else alert('상품 상세페이지 이동: ' + code);
        };
        return { slides, onBannerClick };
    }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>