<template>
    <div class="subtitle-area">
        <div class="product-cost-area">
            <div v-if="maxLabel && maxLabel.trim()" class="inner">
                <dl>
                    <dt>{{ maxLabel }}</dt>
                    <dd class="point">{{ maxAmount }}</dd>
                </dl>
            </div>

            <div class="inner">
                <dl>
                    <dt>{{ baseLabel }}</dt>
                    <dd>{{ baseRate }}</dd>
                </dl>
                <span class="daesh">~</span>
                <dl>
                    <dt>{{ topLabel }}</dt>
                    <dd class="point">{{ topRate }}</dd>
                </dl>
            </div>

            <p class="cost-para">{{ costDescription }}</p>
        </div>
        <!-- 상품 정보 영역 -->
        <ProductInfoDlList :items="infoItems" />
    </div>
</template>

<script>
import ProductInfoDlList from '@/components/ProductInfoDlList.vue'

export default {
    name: 'ProductSubtitleArea',
    components: {
        ProductInfoDlList
    },
    props: {
        maxLabel: {
            type: String,
            default: ''
        },
        maxAmount: {
            type: String,
            default: ''
        },
        baseLabel: {
            type: String,
            default: '기본'
        },
        baseRate: {
            type: String,
            default: ''
        },
        topLabel: {
            type: String,
            default: '최고'
        },
        topRate: {
            type: String,
            default: ''
        },
        costDescription: {
            type: String,
            default: ''
        },
        infoItems: {
            type: Array,
            default: () => []
        }
    }
}
</script>
