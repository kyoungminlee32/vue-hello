<template>
  <div class="slide-popup">
        <template v-if="popupType === 'one-popup'">
            <div
                id="layer"
                :class="['layer', { '-active': is-popup-open }]"
                @click.self="closePopup('layer')"
            >
                <div class="container">
                    <div class="header">
                        <div class="inner">
                            <h1 class="title">{{ popupTitle }}</h1>
                        </div>
                    </div>

                    <div class="contents">
                        <div class="content">
                            <p class="p" v-html="popupMessageHtml"></p>
                        </div>

                        <ProductActionButtons
                            class="action-buttons"
                            :show-consult="showConsult"
                            :show-join="showJoin"
                            :consult-label="cancelLabel"
                            :join-label="confirmLabel"
                            @consult="onCancel"
                            @join="onConfirm"
                        />
                    </div>
                </div>
            </div>
            <div
                v-show="is-popup-open"
                :class="['dim', { '-active': isPopupOpen }]"
                @click="closePopup('layer')"
            ></div>
        </template>

        <template v-else>
            <div id="layer" :class="['layer', { '-active': isPopupOpen && activeLayer === 'layer' }]" @click.self="closePopup('layer')">
                    <div class="container">
                        <div class="header">
                            <div class="inner">
                                <h1 class="title">가입기간을 선택해 주세요</h1>
                            </div>
                        </div>
                        <div class="contents">
                            <div class="content">
                                <div class="options">
                                    <ul>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '9개월'}]" @click="handleSelectPeriod('9개월')">9개월</button></li>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '10개월'}]" @click="handleSelectPeriod('10개월')">10개월</button></li>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '11개월'}]" @click="handleSelectPeriod('11개월')">11개월</button></li>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '12개월'}]" @click="handleSelectPeriod('12개월')">12개월</button></li>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '13개월'}]" @click="handleSelectPeriod('13개월')">13개월</button></li>
                                        <li><button type="button" :class="['option', {'-active': selectedPeriod === '14개월'}]" @click="handleSelectPeriod('14개월')">14개월</button></li>
                                    </ul>
                                </div>                    
                            </div>
                        <div class="buffer" style="height:0px"></div></div>
                    </div>  
            </div>
            <div id="layer1" :class="['layer', { '-active': isPopupOpen && activeLayer === 'layer1' }]" @click.self="closePopup('layer1')">
                <div class="container">
                    <div class="header">
                        <div class="inner">
                                    <h1 class="title">이자 받는 방법을 선택해 주세요</h1>
                        </div>
                    </div>
                    <div class="contents">
                        <div class="content">
                            <div class="options">
                                <ul>
                                            <li><button type="button" class="option stepBtn" @click.self="closePopup('layer1')">만기</button></li>
                                    <li><button type="button" class="option">매월</button></li>
                                </ul>
                            </div>                    
                        </div>
                    <div class="buffer" style="height:0px"></div></div>
                </div>
            </div>
            <div id="layer2" :class="['layer', { '-active': isPopupOpen && activeLayer === 'layer2' }]" @click.self="closePopup('layer2')">
                <div class="container">
                    <div class="contents">
                        <div class="content">
                            <div class="choose-account-Wrap -inputed">
                                <div class="amount-btn-wrap">
                                    <button type="button" value="100000" class="button numBtn -sm -fit">+10만</button>
                                    <button type="button" value="500000" class="button numBtn -sm -fit">+50만</button>
                                    <button type="button" value="1000000" class="button numBtn -sm -fit">+100만</button>
                                    <button type="button" value="10000000" class="button numBtn -sm -fit">+1,000만</button>
                                </div>
                                <div class="custom-key-wrap">
                                    <button type="button" value="1" title="숫자 1 입력">1</button>
                                    <button type="button" value="2" title="숫자 2 입력">2</button>
                                    <button type="button" value="3" title="숫자 3 입력">3</button>
                                    <button type="button" value="4" title="숫자 4 입력">4</button>
                                    <button type="button" value="5" title="숫자 5 입력">5</button>
                                    <button type="button" value="6" title="숫자 6 입력">6</button>
                                    <button type="button" value="7" title="숫자 7 입력">7</button>
                                    <button type="button" value="8" title="숫자 8 입력">8</button>
                                    <button type="button" value="9" title="숫자 9 입력">9</button>
                                    <button type="button" disabled="" aria-hidden="true">NH</button>
                                    <button type="button" value="0" title="숫자 0 입력">0</button>
                                    <button type="button" class="btn-del" title="마지막 숫자 삭제">←</button>
                                </div>
                            </div>
                            <!-- //.choose-account-Wrap -->                
                        </div>
                         <ProductActionButtons class="action-buttons" joinLabel="확인" :show-consult="false" @click="closePopup('layer2')"/>
                    </div>
                </div>
            </div>
            <div
                v-show="isPopupOpen"
                :class="['dim', { '-active': isPopupOpen }]"
                @click="closePopup(activeLayer)"
            ></div>
        </template>
  </div>
</template>

<script>
import ProductActionButtons from './ProductActionButtons.vue';  
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'SlidePopup',
    components: {
        ProductActionButtons
    },
    props: {
        isPopupOpen: {
            type: Boolean,
            default: false,
        },
        activeLayer: {
            type: String,
            default: null,
        },
        popupType: {
            type: String,
            default: 'default',
        },
        popupTitle: {
            type: String,
            default: '',
        },
        popupMessageHtml: {
            type: String,
            default: '',
        },
        showConsult: {
            type: Boolean,
            default: true,
        },
        showJoin: {
            type: Boolean,
            default: true,
        },
        cancelLabel: {
            type: String,
            default: '상담',
        },
        confirmLabel: {
            type: String,
            default: '가입하기',
        },
    },
    emits: ['close', 'cancel', 'confirm'],
    data() {
        return {
            selectedPeriod: '', // 선택된 개월
        }
    },
    methods: {
       ...fmdcTempMethods(),
        closePopup(layer) {
            this.$emit('close', layer);
        },
        onCancel() {
            this.$emit('cancel');
        },
        onConfirm() {
            this.$emit('confirm');
        },
        handleSelectPeriod(period) {
            this.selectedPeriod = period; // 선택된 개월 저장
            console.log(`${period} 선택됨`);
            this.closePopup('layer'); // 레이어 닫기
        }
    }
}
</script>

<style scoped> 
</style>


