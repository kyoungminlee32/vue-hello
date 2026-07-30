<template>
    <div class="page">
        <div class="container">
            <!-- 헤더 영역 -->
            <FwHeader title="예금가입" :show-back="true" rightText="취소" @back="goBack" @action="onCancel" />

            <main class="contents">
                <div class="content progress-layout">
                    <!-- 프로그레스 -->
                    <FwProgress :current="currentStep" :max="maxStep" />

                    <div class="show-wrap">
                        <!-- page1 -->
                        <div id="page1" :class="['step-area', { '-show': currentStep === 1 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['가입기간을 선택해 주세요']" />
                            <div class="field">
                                <div class="box-radios">
                                    <div class="box-radio">
                                        <input type="radio" name="period" id="box-radio11-1" value="6개월" v-model="selectedPeriod" @change="goToStep(2)">
                                        <label for="box-radio11-1" id="b_page1">6개월</label>
                                    </div>
                                    <div class="box-radio">
                                        <input type="radio" name="period" id="box-radio11-2" value="8개월" v-model="selectedPeriod" @change="goToStep(2)">
                                        <label for="box-radio11-2">8개월</label>
                                    </div>
                                </div>
                                <div class="box-radios">
                                    <div class="box-radio">
                                        <input type="radio" name="period" id="box-radio11-3" value="10개월" v-model="selectedPeriod" @change="goToStep(2)">
                                        <label for="box-radio11-3">10개월</label>
                                    </div>
                                    <div class="box-radio">
                                        <input type="radio" name="period" id="box-radio11-4" value="12개월" v-model="selectedPeriod" @change="goToStep(2)">
                                        <label for="box-radio11-4">12개월</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <div class="field">
                                    <div class="mix">
                                        <div class="text -won">
                                            <input type="tel" id="text" class="right" value=""
                                                @keyup.enter="goToStep(4)">
                                            <button class="clear" type="button" aria-hidden="true" style="z-index: 1;">
                                                <div class="hide">입력내용 삭제</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- page2 -->
                        <div id="page2" :class="['step-area', { '-show': currentStep === 2 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['이자 받는 방법을 선택해 주세요']" />
                            <div class="box-radios -half">
                                <div class="box-radio" id="b_page2">
                                    <input type="radio" name="period-point-color" id="box-radio1-point-color-1" value="만기"
                                        v-model="InterestPaymentWay" @change="goToStep(3)">
                                    <label for="box-radio1-point-color-1">만기</label>
                                </div>
                                <div class="box-radio">
                                    <input type="radio" name="period-point-color" id="box-radio1-point-color-2" value="매월"
                                        v-model="InterestPaymentWay" @change="goToStep(3)">
                                    <label for="box-radio1-point-color-2">매월</label>
                                </div>
                            </div>
                        </div>

                        <!-- page3 -->
                        <div id="page3" :class="['step-area', { '-show': currentStep === 3 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['가입금액을 입력하세요']" />
                            <div class="field">
                                <div class="mix">
                                    <div class="text -won" id="b_page3">
                                        <input type="tel" id="text" class="right" value="" @keyup.enter="goToStep(4)">
                                        <div class="won">원</div>
                                    </div>
                                    <div class="info-wrap">
                                        <p class="message">10만원~10억 입력가능</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- page4 -->
                        <div id="page4" :class="['step-area', { '-show': currentStep === 4 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['비과세종합저축을 신청 하시겠습니까?']" />
                            <div class="box-radios -half">
                                <div class="box-radio">
                                    <input type="radio" class="p4-op1" name="period-point-color"
                                        id="box-radio1-point-color-14442" @change="goToStep(5)">
                                    <label for="box-radio1-point-color-14442">신청</label>
                                </div>
                                <div class="box-radio">
                                    <input type="radio" name="period-point-color" id="box-radio1-point-color-12122"
                                        @change="goToStep(5)">
                                    <label for="box-radio1-point-color-12122">미신청</label>
                                </div>
                            </div>
                        </div>

                        <!-- page5 -->
                        <div id="page5" :class="['step-area', { '-show': currentStep === 5 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['출금계좌를 선택하세요']" />
                            <div class="account">
                                <button type="button" data-bankcode="011" class="info" @click="goToStep(7)">
                                    <span class="name">
                                        <span>NH페이모아통장</span>
                                    </span>
                                    <span class="account-number">
                                        <span>NH농협</span>
                                        <span class="number">111-1234-5678-99</span>
                                    </span>
                                </button>
                            </div>
                            <div class="account">
                                <button type="button" data-bankcode="011" class="info" @click="goToStep(7)">
                                    <span class="name">
                                        <span>NH페이모아통장</span>
                                    </span>
                                    <span class="account-number">
                                        <span>NH농협</span>
                                        <span class="number">111-1234-5678-99</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div id="page7" :class="['step-area', { '-show': currentStep === 7 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['만기알림신청 정보를 확인해 주세요']" />
                            <div class="field">
                                <div class="title-group">
                                    <div class="inner">
                                        <span class="title">만기알림신청이란</span>
                                        <!-- 툴팁 -->
                                        <FwTooltip triggerText="도움말" title="만기알림신청이란"
                                            :items="['만기알림신청이란', '만기알림신청이란', '만기알림신청이란']" @open="console.log('열림')"
                                            @close="console.log('닫힘')" @panel-click="console.log('패널 클릭')" />
                                    </div>
                                    <!-- 스위치 -->
                                    <FwSwitch id="switch2" v-model="switch2On" />
                                </div>
                            </div>
                            <div class="field">
                                <label for="text" class="label">휴대폰 번호</label>
                                <div class="text">
                                    <input type="text" id="text" value="010-5000-1234" placeholder="입력하세요" readonly>
                                </div>
                            </div>
                        </div>
                        <div id="page8" :class="['step-area', { '-show': currentStep === 8 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['계약서류 받는 방법을 선택해 주세요']" />
                            <div class="field">
                                <label for="text" class="label">계약서류 받는 방법</label>
                                <!-- 탭 -->
                                <FwSegments
                                    v-model="docMethod"
                                    :tabs="['email', 'sms']"
                                >
                                    <template #tab-email>이메일</template>
                                    <template #tab-sms>문자메시지</template>
                                    <template #panel-email>
                                        <div class="field">
                                            <label for="email" class="label -textless">이메일</label>
                                            <div class="mix">
                                                <div class="text -textless" data-clear="false">
                                                    <input type="text" id="email" title="이메일 아이디">
                                                </div>
                                                <div class="at">@</div>
                                                <div class="select">
                                                    <button type="button">gmail.com</button>
                                                </div>
                                            </div>
                                        </div>
                                    </template>

                                    <template #panel-sms>
                                        <div class="field">
                                            <label for="smsName" class="label">문자메시지</label>
                                            <div class="text -textless">
                                                <input type="text" id="smsName" placeholder="이름을 입력하세요">
                                            </div>
                                        </div>
                                    </template>
                                </FwSegments>
                            </div>
                        </div>
                        <div id="page9" :class="['step-area', { '-show': currentStep === 9 }]">
                            <!-- 타이틀 그룹 -->
                            <FwH2Group :lines="['기타 선택사항을 확인해 주세요']" />
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">우대 금리 쿠폰</span>
                                </div>
                                <FwSwitch id="switch-coupon" v-model="switchCouponOn" />
                            </div>
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">NH포인트 사용</span>
                                    <FwTooltip triggerText="도움말" title="NH포인트 사용"
                                        :items="['우대금리는 대출 만기까지 적용됩니다.', '우대금리는 대출 만기까지 적용됩니다.']" />
                                </div>
                                <FwSwitch id="switch-nh-point" v-model="switchNhPointOn" />
                            </div>
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">관리점 및 권유직원</span>
                                </div>
                                <FwSwitch id="switch-branch-staff" v-model="switchBranchStaffOn" />
                            </div>
                        </div>
                    </div>
                </div>
                <ProductActionButtons
                    class="fixer"
                    rootClass="b_page5"
                    :active="true"
                    :showConsult="false"
                    :showJoin="true"
                    joinLabel="다음"
                    @join="nextStep"
                />
            </main>
        </div>
    </div>
</template>

<script>
// 1.공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 2.프로그레스 컴포넌트
import FwProgress from '@/components/FwProgress.vue'
// 3.타이틀 그룹 컴포넌트
import FwH2Group from '@/components/FwH2Group.vue'
// 4.툴팁 컴포넌트
import FwTooltip from '@/components/FwTooltip.vue'
// 5.스위치 컴포넌트
import FwSwitch from '@/components/FwSwitch.vue'
// 6.세그먼트(탭형 선택) 컴포넌트
import FwSegments from '@/components/FwSegments.vue'
// 7.상품 액션 버튼 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'AType',
    components: {
        // 1.공통 헤더 컴포넌트
        FwHeader,
        // 2.프로그레스 컴포넌트
        FwProgress,
        // 3.타이틀 그룹 컴포넌트
        FwH2Group,
        // 4.툴팁 컴포넌트
        FwTooltip,
        // 5.스위치 컴포넌트
        FwSwitch,
        // 6.세그먼트(탭형 선택) 컴포넌트
        FwSegments,
        // 7.상품 액션 버튼 컴포넌트
        ProductActionButtons
    },
    data() {
        return {
            currentStep: 1,
            maxStep: 12,
            selectedPeriod: '', // 선택된 기간 저장 (6, 8, 10, 12)
            InterestPaymentWay: '', // 이자받는 방법 저장 (만기, 매월)
            amount: '',          // 입력된 금액 저장
            docMethod: 'email',
            switch2On: true,
            switchCouponOn: true,
            switchNhPointOn: true,
            switchBranchStaffOn: true
        }
    },
    methods: {
        ...fmdcTempMethods(),
    }
}
</script>