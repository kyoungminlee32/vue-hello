<template>
    <div class="interest-calc-wrap">
        <div :class="['accordion', '-card', { '-active': isOpen }]" data-role="fold">
            <button
                type="button"
                class="title -interest"
                data-role="marker"
                :aria-expanded="String(isOpen)"
                @click="togglePanel"
            >
                {{ title }}
            </button>
            <div v-show="isOpen" class="panel" data-role="hidden">
                <div class="interest-calc-cont">
                    <div class="calc-row">
                        <span class="calc-input">
                            <div class="mix">
                                <div class="text -won" data-clear="false">
                                    <input
                                        type="tel"
                                        :id="amountInputId"
                                        v-model="amount"
                                        class="right num-call"
                                        aria-haspopup="true"
                                        placeholder="금액을 입력하세요"
                                    >
                                </div>
                            </div>
                        </span>
                        <span class="calc-para">원을</span>
                    </div>

                    <div class="calc-row">
                        <span class="calc-input">
                            <div class="mix">
                                <div class="text" data-clear="false">
                                    <input
                                        type="tel"
                                        :id="monthsInputId"
                                        v-model="months"
                                        class="right num-call"
                                        aria-haspopup="true"
                                        placeholder="개월 입력"
                                    >
                                </div>
                            </div>
                        </span>
                        <span class="calc-para">개월 동안 저축한다면?</span>
                    </div>

                    <div class="calc-btn-wrap">
                        <button type="button" class="button -lg -secondary" @click="calculate">계산해보기</button>
                    </div>

                    <div class="interest-calc-result">
                        <dl>
                            <dt>세전금액</dt>
                            <dd>{{ formattedPretaxAmount }}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductInterestCalculator',
    emits: ['calculated'],
    props: {
        title: {
            type: String,
            default: '금리 미리 계산해보기'
        },
        annualRate: {
            type: Number,
            default: 0.028
        },
        initialAmount: {
            type: [String, Number],
            default: ''
        },
        initialMonths: {
            type: [String, Number],
            default: ''
        },
        initialPretaxAmount: {
            type: Number,
            default: 1040500
        },
        amountInputId: {
            type: String,
            default: 'tt1'
        },
        monthsInputId: {
            type: String,
            default: 'tt2'
        }
    },
    data() {
        return {
            isOpen: false,
            amount: String(this.initialAmount ?? ''),
            months: String(this.initialMonths ?? ''),
            pretaxAmount: this.initialPretaxAmount
        }
    },
    computed: {
        formattedPretaxAmount() {
            const value = Number(this.pretaxAmount) || 0
            return `${value.toLocaleString('ko-KR')}원`
        }
    },
    methods: {
        togglePanel() {
            this.isOpen = !this.isOpen
        },
        calculate() {
            const principal = Number(String(this.amount).replace(/,/g, ''))
            const monthCount = Number(this.months)

            if (!principal || !monthCount) {
                this.pretaxAmount = 0
                this.$emit('calculated', {
                    principal: 0,
                    months: 0,
                    annualRate: this.annualRate,
                    pretaxAmount: 0
                })
                return
            }

            const yearFraction = monthCount / 12
            this.pretaxAmount = Math.round(principal + (principal * this.annualRate * yearFraction))
            this.$emit('calculated', {
                principal,
                months: monthCount,
                annualRate: this.annualRate,
                pretaxAmount: this.pretaxAmount
            })
        }
    }
}
</script>
