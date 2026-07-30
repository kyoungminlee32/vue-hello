<template>
<BaseSwiper :slides="slides" wrapClass="-exchange" :onBannerClick="onBannerClick" />
</template>

<script>
import BaseSwiper from './BaseSwiper.vue';
export default {
    name: 'FwSwiper3',
    components: { BaseSwiper },
    setup() {
        const slides = [
            {
                code: 40000954,
                type: 'type01',
                title: '통장 하나로 20개국 통화를 <br>자유롭게 입출금',
                subtitle: '다통화외화예금',
            },
            {
                code: 40000938,
                type: 'type02',
                title: '목표 환율 도달 시 자동 해지,<br>환차익으로 환테크',
                subtitle: 'NH환테크 외화회전예금I',
            },
            {
                code: 40000890,
                type: 'type03',
                title: '최대 10개국 통화를<br>자유롭게 적립',
                subtitle: '다통화 월복리 외화적립예금',
            },
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