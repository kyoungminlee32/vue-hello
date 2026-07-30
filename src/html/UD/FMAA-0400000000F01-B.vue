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
            popup-title="공동인증 전자서명"
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
    name: 'FMAA-0400000000F01-B',
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
            popupMessageHtml: '공동인증을 이용 중입니다. <br>전자서명을 진행하시겠어요?',
        }
    },
    methods: {
        ...fmdcTempMethods(),
    }
}
</script>