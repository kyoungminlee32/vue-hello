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
                <FwHeader title="퇴직연금상세" :centered="true" :show-close="true" @close="closePopup" />

                <div class="contents">
                    <!-- 상품 상세 영역 -->
                    <div class="content">
                        <div class="product-detail-wrap">
                            <!-- 상품 안내 영역 -->
                            <div class="procuct-summary">
                                <div class="info-area">
                                    <div class="title-area">
                                        <h2>개인형 퇴직연금(IRP)</h2>
                                        <p class="under-para">연말정산 세액공제 목적</p>
                                        <!-- 상품 해시태그 영역 -->
                                        <ProductHashtagList :tags="productHashtags" />
                                    </div><!-- //.title-area -->

                                    <!-- 서브타이틀 영역 -->
                                    <div class="subtitle-area">
                                        <div class="other-link">
                                            <a href="javascript:void(0)" class="a -arrow">퇴직연금 꿀팁 영상 보러 가기</a>
                                        </div>
                                    </div><!-- //.subtitle-area -->

                                    <!-- 상품 액션 버튼 영역 -->
                                    <ProductActionButtons inline root-class="top-join-btn" :show-consult="false"
                                        @join="openPopup" />
                                </div><!-- //.info-area -->

                                <!-- 상품 비주얼 리스트 영역 -->
                                <ProductVisualList :items="productVisualItems" />
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
                                <!-- 공유 -->
                                <ProductShareButtons @share="onShare" @wishlist="onWishlist" />
                                <!-- //공유 -->
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
// 3.상품 액션 버튼 영역 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 4.상품 비주얼 리스트 영역 컴포넌트
import ProductVisualList from '@/components/ProductVisualList.vue'
// 5.공유 버튼 영역 컴포넌트
import ProductShareButtons from '@/components/ProductShareButtons.vue'
// 6. 세그먼트(탭형 선택) 컴포넌트
import FwSegments from '@/components/FwSegments.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'FMHA-temp',
    components: {
        // 1.공통 헤더 컴포넌트
        FwHeader,
        // 2.상품 해시태그 리스트 컴포넌트
        ProductHashtagList,
        // 3.상품 액션 버튼 영역 컴포넌트
        ProductActionButtons,
        // 4.상품 비주얼 리스트 영역 컴포넌트
        ProductVisualList,
        // 5.공유 버튼 영역 컴포넌트
        ProductShareButtons,
        // 6. 세그먼트(탭형 선택) 컴포넌트
        FwSegments,
    },
    data() {
        return {
            isPopupOpen: true,
            activeTab: 'segment01',
            productHashtags: ['#추천', '#세금절세', '#은퇴준비'],
            productVisualItems: [
                {
                    id: 1,
                    className: 'FMHA-0100000000F01_1',
                    title: '연간 최대 1,800만원 자유입금',
                    descriptionHtml: '연금저축, DC가입자 추가부담금 합산돼요'
                },
                {
                    id: 2,
                    className: 'FMHA-0100000000F01_2',
                    title: '세액공제 최대 16.5%',
                    descriptionHtml: '지방소득세 포함하여<br>연 900만원 입금 시 최대 1,485,000원 세금환급돼요'
                },
                {
                    id: 3,
                    className: 'FMHA-0100000000F01_3',
                    title: '적립금 운용수익에 대한<br>원천징수 없이 재투자 복리효과',
                    descriptionHtml: '위험자산에 대한 총투자한도는 <br> 가입자별 적립금 70% 이내 가능해요'
                }
            ]
        }
    },
    methods: {
        ...fmdcTempMethods()
    }
}
</script>
