<template>
    <div class="account">
        <button type="button" :data-bankcode="bankCode" class="info" @click="$emit('click')">
            <span class="name">
                <span>{{ accountName }}</span>
            </span>
            <span class="account-number">
                <span>{{ bankName }}</span>
                <span>{{ accountNumber }}</span>
            </span>
        </button>

        <div class="amount">
            <div class="key">{{ amountLabel }}</div>
            <div class="value">
                <span>{{ availableAmount }}</span>원
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FwAccountInfo',
    emits: ['click'],
    props: {
        bankCode: { type: String, default: '' },
        accountName: { type: String, default: '' },
        bankName: { type: String, default: '' },
        accountNumber: { type: String, default: '' },
        amountLabel: { type: String, default: '출금가능금액' },
        availableAmount: { type: [String, Number], default: '' }
    }
}
</script>