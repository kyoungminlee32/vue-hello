<template>
    <div class="page-wrapper">
        <!-- (중요) 서브메인 페이지는 page div 에 submain-body 클래스 반드시 필요합니다 -->
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
                                    <!-- 스와이프 배너 -->
                                    <FwSwiper paginationId="swiper-pagination-deposit" />
                                    <div class="submain-list">
                                        <FwSegments
                                        addClass='subs -anchor'
                                        v-model="activesubTab"
                                        :tabs="[
                                            { value: 'subTab01', label: '저축' },
                                            { value: 'subTab02', label: '예금' },
                                            { value: 'subTab03', label: '적금' },
                                            { value: 'subTab04', label: '청약' },
                                            { value: 'subTab05', label: '지수연동예금' },
                                        ]"
                                        >
                                            <!-- 탭1: 입출금 -->
                                            <template #panel-subTab01>
                                                <!-- 배너 영역 컴포넌트 -->
                                                <LinkBanner v-if="activeTab === 'mainTab01' && activesubTab === 'subTab01'" />
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
                                            <!-- 탭2: 예금 -->
                                            <template #panel-subTab02>
                                                 <!-- 배너 영역 컴포넌트 -->
                                                <LinkBanner v-if="activeTab === 'mainTab01' && activesubTab === 'subTab02'" />
                                            </template>
                                            <!-- 탭3: 적금 -->
                                            <template #panel-subTab03>
                                                 <!-- 배너 영역 컴포넌트 -->
                                                <LinkBanner v-if="activeTab === 'mainTab01' && activesubTab === 'subTab03'" />
                                            </template>
                                            <!-- 탭4: 청약 -->
                                            <template #panel-subTab04>
                                                컨텐츠 청약
                                            </template>
                                            <!-- 탭5: 지수연동예금 -->
                                            <template #panel-subTab05>
                                                컨텐츠 지수연동예금
                                            </template>
                                        </FwSegments>
                                    </div>
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
import FwSwiper from '@/components/FwSwiper.vue';
import FwSwiper2 from '@/components/FwSwiper2.vue';
import FwSwiper3 from '@/components/FwSwiper3.vue';

import FwHeader from '@/components/FwHeader.vue';
import FwSegments from '@/components/FwSegments.vue';
import ProductList from '@/components/ProductList.vue';
import ShortcutBox from '@/components/ShortcutBox.vue';
import LinkBanner from '@/components/LinkBanner.vue';

export default {
    name: 'FMBB0400000000F01',
    components: {
        FwSwiper,
        FwSwiper2,
        FwSwiper3,
        FwHeader,
        FwSegments,
        ProductList,
        ShortcutBox,
        LinkBanner
    },
    data() {
        return {
            activeTab: 'mainTab01',
            activesubTab: 'subTab01',
            products: [
                {
                    title: 'NH1934우대통장',
                    sub: '만 19세부터 만 34세 청년을 위한 통장',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                },
                {
                    title: 'NH페이모아통장',
                    sub: '만 19세부터 만 34세 청년을 위한 통장',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                },
                {
                    title: '매직트리(Magic Tree) 아이(i)계좌',
                    sub: '모계좌 근거로 가입/거래하는 수시입출식 예금',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                },
                {
                    title: '채움공직자통장',
                    sub: '공무원, 공공기관 임직원 대상 입출금 상품',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                },
                {
                    title: '채움공직자통장',
                    sub: '공무원, 공공기관 임직원 대상 입출금 상품',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                },
                {
                    title: '채움공직자통장',
                    sub: '공무원, 공공기관 임직원 대상 입출금 상품',
                    max: '최고 1.5%',
                    def: '기본 4.5%'
                }
            ],
            shortcutItems: [
                { label: '계약서류 조회', href: 'javascript:void(0)', role1: 'button' }
            ]
        };
    }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>

