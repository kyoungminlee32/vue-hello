<template>
    <div class="page-wrapper">
        <div class="page">
            <div class="container">
                <!-- 헤더 영역 -->
                <FwHeader title="상품상세" :show-back="true" :show-home="true" :show-menu="true" @back="goBack" />

                <main class="contents">
                    <div class="content">

                    </div>
                </main>
            </div>
        </div>
        <!-- 팝업 영역 -->
        <div id="popup" :class="['popup', { '-active': isPopupOpen }]">
            <div class="container">
                <!-- 팝업 헤더 영역 -->
                <FwHeader title="청약" :centered="true" :show-close="true" @close="closePopup" />

                <div class="contents">
                    <!-- 상품 상세 영역 -->
                    <div class="content">
                        <div class="product-detail-wrap">
                            <!-- 상품 안내 영역 -->
                            <div class="procuct-summary">
                                <div class="info-area">
                                    <div class="title-area">
                                        <h2>주택청약종합저축</h2>
                                        <!-- 상품 해시태그 영역 -->
                                        <ProductHashtagList :tags="productHashtags" />
                                    </div><!-- //.title-area -->

                                    <!-- 상품 서브타이틀 영역 -->
                                    <ProductSubtitleArea
                                        :base-rate="productCostSummary.baseRate"
                                        :top-rate="productCostSummary.topRate"
                                        :cost-description="productCostSummary.description" :info-items="productInfoItems" />
                                    <!-- //.subtitle-area -->

                                    <!-- 상품 액션 버튼 영역 -->
                                    <ProductActionButtons inline root-class="top-join-btn" :show-consult="false"
                                        @join="openPopup" />
                                </div><!-- //.info-area -->

                                <!-- 상품 비주얼 리스트 영역 -->
                                <ProductVisualList :items="productVisualItems" />

                                <!-- 금리 계산해보기 -->
                                <ProductInterestCalculator :annual-rate="0.028" @calculated="onInterestCalculated" />
                                <!-- //금리 계산해보기 -->
                            </div><!-- //.procuct-summary -->
                            <!-- //상품 안내 영역 -->

                            <!-- 상품 정보 영역 -->
                            <div class="procuct-info">
                                <FwSegments
                                    tab-style
                                    v-model="activeTab"
                                    :tabs="[
                                        { value: 'segment01', label: '상품안내' },
                                        { value: 'segment02', label: '절세혜택 및 인출 시 세제' },
                                        { value: 'segment03', label: '유의사항' }
                                    ]"
                                >
                                    <!-- 탭1: 상품안내 -->
                                    <template #panel-segment01>
                                        <dl class="prodect-info-dl">
                                            <dt class="h5">상품특징</dt>
                                            <dd>
                                                <p class="p">매월 약정 납입일에 저축금을 납입하여 순위 요건 충족시 국민 주택과 민영주택권이 부여되는 입주자 저축</p>
                                            </dd>

                                            <dt class="h5">가입대상</dt>
                                            <dd>
                                                <p class="p">국민인 개인(국내에 거주하는 재외동포 포함)또는 외국인 거주자로서 연령에 관계없이 누구나 가입가능</p>
                                                <ul class="ul -bullet">
                                                    <li>주택청약종합저축의 가입은 청년우대형주택청약종합저축, 청약저축, 청약예금, 청약부금을 포함 하여 전 금융기관 1인1계좌에 한함</li>
                                                    <li>비과세종합저축으로 가입가능(본인 한도 내)</li>
                                                </ul>
                                            </dd>

                                            <dt class="h5">가입기간</dt>
                                            <dd>
                                                <p class="p">가입일로부터 입주자로 선정된 날까지<br>별도 만기 없음</p>
                                            </dd>

                                            <dt class="h5">가입금액</dt>
                                            <dd>
                                                <p class="p">매월 약정납입일(신규가입일 해당일)에 2만원 이상 50만원 이하의 금액을 10원 단위로 자유롭게 납입<br>단, 월 납입금의 총액이 1,500만원에 이를 때까지는 50만원을 초과하여 납입가능</p>
                                                <p class="p">선납회차 : 정상 납입회차에 추가하여 최고 24회차까지 선납가능</p>
                                            </dd>
                                        </dl>
                                    </template>

                                    <!-- 탭2: 절세혜택 및 인출 시 세제 -->
                                    <template #panel-segment02>
                                        <div class="mix datepicker">
                                            <div class="text" data-clear="false">
                                                <input type="text" class="left-side" id="gga" value="2023.08.23"
                                                    title="날짜선택" aria-haspopup="true" readonly>
                                            </div>
                                            <div class="space -lined date">
                                                <button type="button" class="icon-button -calendar"
                                                    aria-haspopup="true"><span class="hide">달력 보기</span></button>
                                            </div>
                                        </div>
                                        <div class="case-wrap -xs">
                                            <h5 class="h6">만기지급금리</h5>
                                            <p class="p">만기일시지급식</p>
                                            <div class="table">
                                                <table>
                                                    <caption><span class="hide">만기일시지급식 금리</span></caption>
                                                    <colgroup>
                                                        <col style="width:55%">
                                                        <col style="width:45%">
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">가입기간</th>
                                                            <th scope="col">기본금리(연%, 세전)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1개월 이하</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1개월초과 ~ 12개월미만</td>
                                                            <td>2.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12개월이상 ~ 24개월미만</td>
                                                            <td>2.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>24개월이상</td>
                                                            <td>2.80</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p class="p">자세한 사항은 상품설명서 및 특약 참조</p>
                                        </div>
                                    </template>

                                    <!-- 탭3: 유의사항 -->
                                    <template #panel-segment03>
                                        <p class="p">청약 금액의 일부 인출은 불가능하며, 필요 시는 본인 명의 대출에 담보 제공가능 합니다.</p>
                                    </template>
                                </FwSegments>
                            </div>
                            <!-- //상품 정보 영역 -->

                            <!-- 상품 추가 정보 영역 -->
                            <div class="product-other">
                                <!-- 상품설명서 및 약관 -->
                                <ProductAgreeArea :links="agreeLinks" @select="onSelectAgreeDoc" />
                                <!-- //상품설명서 및 약관 -->

                                <!-- 예금자보호 (관리자) -->
                                <div class="loadArea" data-includ="/content/nhbank/html/cn/common/protect01.html"></div>
                                <!-- //예금자보호 (관리자) -->

                                <!-- 준법감시 심의필 (관리자) -->
                                <div class="product-deliberate">
                                    <p class="p">준법감시심의필 000-0000(심의일:YYYY.MM.DD)<br>유효기간 : YYYYY.MM.DD ~ YYYYY.MM.DD</p>
                                </div>
                                <!-- //준법감시 심의필 (관리자) -->

                                <!-- 공유 -->
                                <ProductShareButtons @share="onShare" @wishlist="onWishlist" />
                                <!-- //공유 -->

                                <!-- 추천상품 -->
                                <ProductRecommendSection :user-name="recommendUserName" :items="recommendedProducts"
                                    @select="onSelectRecommendedProduct" />
                                <!-- //추천상품 -->
                            </div>
                            <!-- //상품 추가 정보 영역 -->
                        </div><!-- //.product-detail-wrap -->
                    </div>

                    <!-- //상품 상세 영역 -->
                    <ProductActionButtons :active="true" @consult="onConsult" @join="openPopup" />
                    <div class="buffer" style="height:98px"></div>
                </div>
            </div>
        </div>
        <!-- //팝업 영역 -->
    </div>
</template>

<script>
// 1.공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 2.상품 해시태그 리스트 컴포넌트
import ProductHashtagList from '@/components/ProductHashtagList.vue'
// 3.상품 서브타이틀 영역 컴포넌트
import ProductSubtitleArea from '@/components/ProductSubtitleArea.vue'
// 4.상품 액션 버튼 영역 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 5.상품 비주얼 리스트 영역 컴포넌트
import ProductVisualList from '@/components/ProductVisualList.vue'
// 6.금리 계산해보기 영역 컴포넌트
import ProductInterestCalculator from '@/components/ProductInterestCalculator.vue'
// 7. 세그먼트(탭형 선택) 컴포넌트
import FwSegments from '@/components/FwSegments.vue'
// 8.상품설명서 및 약관 영역 컴포넌트
import ProductAgreeArea from '@/components/ProductAgreeArea.vue'
// 9.공유 버튼 영역 컴포넌트
import ProductShareButtons from '@/components/ProductShareButtons.vue'
// 10.추천 상품 영역 컴포넌트
import ProductRecommendSection from '@/components/ProductRecommendSection.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'FMDC-temp',
    components: {
        // 1.공통 헤더 컴포넌트
        FwHeader,
        // 2.상품 해시태그 리스트 컴포넌트
        ProductHashtagList,
        // 3.상품 서브타이틀 영역 컴포넌트
        ProductSubtitleArea,
        // 4.상품 액션 버튼 영역 컴포넌트
        ProductActionButtons,
        // 5.상품 비주얼 리스트 영역 컴포넌트
        ProductVisualList,
        // 6.금리 계산해보기 영역 컴포넌트
        ProductInterestCalculator,
        // 7. 세그먼트(탭형 선택) 컴포넌트
        FwSegments,
        // 8.상품설명서 및 약관 영역 컴포넌트
        ProductAgreeArea,
        // 9.공유 버튼 영역 컴포넌트
        ProductShareButtons,
        // 10.추천 상품 영역 컴포넌트
        ProductRecommendSection,
    },
    data() {
        return {
            isPopupOpen: true,
            activeTab: 'segment01',
            productHashtags: ['#소득공제', '#가입추천'],
            productCostSummary: {
                baseRate: '3.81%',
                topRate: '4.15%',
                description: '(연/세전)2024.08.31 기준'
            },
            productInfoItems: [
                { className: 'range', term: '가입기간', description: '입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지' },
                { className: 'cost', term: '가입금액', description: '월 50만원 이내' }
            ],
            productVisualItems: [
                {
                    id: 1,
                    className: 'FMDC-0801000000F01_1',
                    title: '내집마련의 첫걸음!',
                    descriptionHtml: '내 집마련의 필수! 국민 주택과 민영주택의<br>청약권이 부여되는 적금이예요!'
                },
                {
                    id: 2,
                    className: 'FMDC-0801000000F01_2',
                    title: '국내 거주자는 누구나 가입 가능',
                    descriptionHtml: '복잡한 우대조건 없이 시장실세금리를 반영, 가입시점의 약정이율을 만기까지 지급돼요'
                },
                {
                    id: 3,
                    className: 'FMDC-0801000000F01_3',
                    title: '거래조건 충족 시 청약권 부여',
                    descriptionHtml: '매월 2~50만원 이하의 금액을 자유롭게 납입하고, 신규 분양주택 청약이 가능'
                }
            ],
            agreeLinks: [
                { label: '변경이력보기' },
                { label: '기본약관' },
                { label: '상품설명서' },
                { label: '핵심설명서' },
                { label: '상품특약' }
            ],
            latestInterestCalc: null,
            recommendUserName: '김농협',
            recommendedProducts: [
                { id: 1, title: 'NH고향사랑 기부적금', tags: ['#추천상품', '#은퇴준비'] },
                { id: 2, title: 'NH내집마련 주택청약저축', tags: ['#내집마련', '#절세'] },
                { id: 3, title: 'NH프리미엄 정기예금', tags: ['#안정형', '#목돈마련'] }
            ]
        }
    },
    methods: {
        ...fmdcTempMethods()
    },
}
</script>