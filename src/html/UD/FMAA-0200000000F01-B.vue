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
        <SlidePopup
            :is-popup-open="isSlidePopupOpen"
            popup-type="one-popup"
            popup-title="간편인증 전자서명"
            :popup-message-html="popupMessageHtml"
            cancel-label="아니요"
            confirm-label="예"
            @cancel="onCancel"
            @confirm="onConfirm"
            @close="onClose"
        />
    </div>
</template>

<script>
// 공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 슬라이드 팝업 컴포넌트
import SlidePopup from '@/components/SlidePopup.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'FMAA-0200000000F01-B',
    components: {
        // 공통 헤더 컴포넌트
        FwHeader,
        // 슬라이드 팝업 컴포넌트
        SlidePopup,
    },
    data() {
        return {
            // 슬라이드 팝업 노출 여부
            isSlidePopupOpen: true,
            popupMessageHtml: '스크래핑 및 공공마이데이터 본인인증 조회에 동의하고 서류를 제출합니다. ',
        }
    },
    methods: {
        ...fmdcTempMethods(),
    }
}
</script>