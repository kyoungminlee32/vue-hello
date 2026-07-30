<template>
     <div class="page-wrapper">
        <div class="page submain-body">
            <div class="container">
                <!-- 헤더영역 -->
                <FwHeader
                    title="금융상품몰"
                    :centered="true"
                    :show-back="true"
                    :show-home="true"
                    :show-menu="true"
                />
                <main class="contents">
                    <div class="content">
                        <div class="submain-content">
                            <FwSegments
                                tab-style
                                v-model="activeTab"
                                :tabs="[
                                    { value: 'mainTab01', label: '저축' },
                                    { value: 'mainTab02', label: '대출' },
                                    { value: 'mainTab03', label: '펀드/투자' },
                                    { value: 'mainTab04', label: '외환' },
                                    { value: 'mainTab05', label: '보험' },
                                    { value: 'mainTab06', label: '퇴직연금' },
                                ]"
                            >
                                <!-- 탭1: 저축 -->
                                <template #panel-mainTab01>
                                    저축
                                </template>

                                <!-- 탭2: 대출 -->
                                <template #panel-mainTab02>
                                    <!-- 스와이프 배너 -->
                                    <FwSwiper2 paginationId="swiper-pagination-loan" />
                                    
                                    <div class="submain-list">
                                        <FwSegments
                                        addClass='subs -anchor'
                                        v-model="activesubTab"
                                        :tabs="[
                                            { value: 'subTab01', label: '갈아타기' },
                                            { value: 'subTab02', label: '직장인' },
                                            { value: 'subTab03', label: '주택/전세' },
                                            { value: 'subTab04', label: '예적금/기타' },
                                            { value: 'subTab05', label: '개인사업자' },
                                            { value: 'subTab06', label: '서민금융' },
                                        ]"
                                        >
                                            <!-- 탭1: 입출금 -->
                                            <template #panel-subTab01>
                                                컨텐츠 갈아타기
                                            </template>
                                            <!-- 탭2: 직장인 -->
                                            <template #panel-subTab02>
                                                 <!-- 배너 영역 컴포넌트 -->
                                                <LinkBanner />
                                                <div class="sub-prod-list-units">
                                                    <!-- 리스트 영역 컴포넌트 -->
                                                    <ProductList :items="products" />
                                                    <!-- 하단버튼 추가 -->
                                                    <ShortcutBox
                                                        :items="shortcutItems"
                                                        :boxType="true"
                                                    />
                                                </div>
                                            </template>
                                            <!-- 탭3: 주택/전세 -->
                                            <template #panel-subTab03>
                                                 컨텐츠 주택/전세
                                            </template>
                                            <!-- 탭4: 예적금/기타 -->
                                            <template #panel-subTab04>
                                                컨텐츠 예적금/기타
                                            </template>
                                            <!-- 탭5: 개인사업자 -->
                                            <template #panel-subTab05>
                                                컨텐츠 개인사업자
                                            </template>
                                            <!-- 탭6: 서민금융 -->
                                            <template #panel-subTab06>
                                                컨텐츠 서민금융
                                            </template>
                                        </FwSegments>
                                    </div>
                                </template>

                                <!-- 탭3: 펀드/투자 -->
                                <template #panel-mainTab03>
                                   펀드/투자
                                </template>
                                <!-- 탭4: 외환 -->
                                <template #panel-mainTab04>
                                   외환
                                </template>
                                <!-- 탭5: 보험 -->
                                <template #panel-mainTab05>
                                   보험
                                </template>
                                <!-- 탭6: 퇴직연금 -->
                                <template #panel-mainTab06>
                                   퇴직연금
                                </template>
                            </FwSegments>
                        </div>
                    </div>
                </main>
            </div>
        </div>
     </div>
  
</template>

<script>
import FwSwiper2 from '@/components/FwSwiper2.vue';
import FwHeader from '@/components/FwHeader.vue';
import FwSegments from '@/components/FwSegments.vue';
import ProductList from '@/components/ProductList.vue';
import ShortcutBox from '@/components/ShortcutBox.vue';

export default {
    name: 'FMBB0500000000F01',
    components: {
        FwSwiper2,
        FwHeader,
        FwSegments,
        ProductList,
        ShortcutBox,
    },
    data() {
        return {
            activeTab: 'mainTab02',
            activesubTab: 'subTab02',
            products: [
                {
                    title: '신용대출 농협으로 갈아타기',
                    sub: '서류 제출 없이 간편하게 신용대출 갈아타기',
                    low: '최저 연 5.1%',
                    price: '최대 3억원',
                    badge : '이벤트',
                },
                {
                    title: '공무원을 위한 신용대출',
                    sub: '쉽게 공무원연금공단협약대출과 신용대출  안내',
                    low: '최저 연 5.1%',
                    price: '최대 3억원',
                },
                {
                    title: 'NH모바일새희망홀씨 II',
                    sub: '저신용·저소득 고객을 위한 서민금융 상품',
                    low: '최저 연 5.1%',
                    price: '최대 3억원',
                },
                {
                    title: 'NH로 바꿈대출(씨티은행대환전용)',
                    sub: '씨티은행 대환전용 대출',
                    low: '최저 연 5.1%',
                    price: '최대 3억원'
                },
                {
                    title: 'NH사잇돌중금리대출',
                    sub: '직장인/개인사업자/연금소득자를 위한 중신용자 대출상품',
                    low: '최저 연 5.1%',
                    price: '최대 3억원'
                },
                {
                    title: '채움공직자통장',
                    sub: '공무원, 공공기관 임직원 대상 입출금 상품',
                    low: '최저 연 5.1%',
                    price: '최대 3억원'
                }
            ],
            shortcutItems: [
                { label: '계약서류 조회', href: 'javascript:void(0)', role1: 'button' }
            ],
        };
    }
};
</script>

<style scoped>
/* 기존 CSS 파일을 그대로 사용하세요. 필요시 추가 스타일만 작성 */
</style>