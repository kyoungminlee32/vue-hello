<template>
    <div class="product-recommend">
        <h4 class="h5"><span>{{ userName }}</span>님을 위한 추천 상품</h4>
        <div class="product-recommend-list">
            <ul>
                <li v-for="item in items" :key="item.id">
                    <a href="javascript:;" role="button" @click.prevent="$emit('select', item)">
                        <div class="title">{{ item.title }}</div>
                        <ProductHashtagList :tags="item.tags" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ProductHashtagList from '@/components/ProductHashtagList.vue'

export default {
    name: 'ProductRecommendSection',
    components: {
        ProductHashtagList
    },
    props: {
        userName: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    emits: ['select']
}
</script>
