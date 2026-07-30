<template>
    <div class="page-wrapper">
        <div class="page">
            <div class="container">
                <!-- 헤더 영역 -->
                <FwHeader title="상품상세" :show-back="true" :show-home="true" :show-menu="true" />

                <main class="contents">
                    <div class="content">
                        
                    </div>
                </main>
            </div>
        </div>
        <CenterPopup
            :is-popup-open="isCenterPopupOpen"
            :popup-message-html="popupMessageHtml"
            :popup-message-html2="popupMessageHtml2"
            confirm-label="확인"
            join-button-class="-secondary"
            @confirm="onConfirm"
            @close="onClose"
        />
    </div>
</template>

<script>
// 공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 센터 팝업 컴포넌트
import CenterPopup from '@/components/CenterPopup.vue'

export default {
    name: 'FMEC-0103030100F01-A',
    components: {
        // 공통 헤더 컴포넌트
        FwHeader,
        // 센터 팝업 컴포넌트
        CenterPopup,
    },
    data() {
        return {
            // 센터 팝업 노출 여부
            isCenterPopupOpen: true,
            popupMessageHtml: '죄송합니다. 적립기간은 5년이상 선택하되, 적립기간 종료 후 고객님의 연령이 만 55세 이상이 될 수 있는 기간으로 선택하여야 합니다.',
            popupMessageHtml2: '(예:현재 만 40세의 경우 15년 입력, 적립기간 종료시 만 55세)',
        }
    },
    methods: {
        onClose() {
            this.isCenterPopupOpen = false
        },
        onConfirm() {
            this.isCenterPopupOpen = false
        },
    }
}
</script>