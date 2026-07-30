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
                                    대출
                                </template>

                                <!-- 탭3: 펀드/투자 -->
                                <template #panel-mainTab03>
                                   펀드/투자
                                </template>
                                <!-- 탭4: 외환 -->
                                <template #panel-mainTab04>
                                    <!-- 스와이프 배너 -->
                                    <FwSwiper3 paginationId="swiper-pagination-exchange" />
                                    
                                    <div class="submain-list">
                                        <FwSegments
                                        addClass='subs -anchor'
                                        v-model="activesubTab"
                                        :tabs="[
                                            { value: 'subTab01', label: '예금' },
                                            { value: 'subTab02', label: '적금' },
                                            { value: 'subTab03', label: '입출금' },
                                        ]"
                                        >
                                            <!-- 탭1: 예금 -->
                                            <template #panel-subTab01>
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
                                            <!-- 탭2: 적금 -->
                                            <template #panel-subTab02>
                                                컨텐츠 적금
                                            </template>
                                            <!-- 탭3: 입출금 -->
                                            <template #panel-subTab03>
                                                 컨텐츠 입출금
                                            </template>
                                        </FwSegments>
                                    </div>
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
import FwSwiper3 from '@/components/FwSwiper3.vue';
import FwHeader from '@/components/FwHeader.vue';
import FwSegments from '@/components/FwSegments.vue';
import ProductList from '@/components/ProductList.vue';
import ShortcutBox from '@/components/ShortcutBox.vue';

export default {
    name: 'FMBB-0700000000F01',
    components: {
        FwSwiper3,
        FwHeader,
        FwSegments,
        ProductList,
        ShortcutBox,
    },
    data() {
        return {
            activeTab: 'mainTab04',
            activesubTab: 'subTab01',
            products: [
                {
                    title: 'NH환테크 외화회전예금 I',
                    sub: '목표환율 도달 시 자동해지되어 이자와 환차익 동시에 획득',
                },
                {
                    title: '위안화적립식정기예금',
                    sub: '위안화를 자유롭게 적립! 플러스 위안화 환율, 송금수수료 우대까지!',
                },
                {
                    title: 'NH환테크 외화회전예금 I',
                    sub: '목표환율 도달 시 자동해지되어 이자와 환차익 동시에 획득',
                },
                {
                    title: '위안화적립식정기예금',
                    sub: '위안화를 자유롭게 적립! 플러스 위안화 환율, 송금수수료 우대까지!',
                },
                {
                    title: 'NH환테크 외화회전예금 I',
                    sub: '목표환율 도달 시 자동해지되어 이자와 환차익 동시에 획득',
                },
                {
                    title: '위안화적립식정기예금',
                    sub: '위안화를 자유롭게 적립! 플러스 위안화 환율, 송금수수료 우대까지!',
                },
                {
                    title: 'NH환테크 외화회전예금 I',
                    sub: '목표환율 도달 시 자동해지되어 이자와 환차익 동시에 획득',
                },
                {
                    title: '올원외화포켓적립예금',
                    sub: '높은 우대환율 적용과 외화정기예금 금리 제공',
                    badge : '올원전용',
                },
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