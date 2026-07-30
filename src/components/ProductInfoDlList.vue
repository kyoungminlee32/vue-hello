<template>
    <ul class="product-dl-list">
        <li v-for="item in items" :key="`${item.term}-${item.className}`" :class="item.className">
            <dl>
                <dt>{{ item.term }}</dt>
                <dd>{{ item.description }}</dd>
            </dl>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ProductInfoDlList',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
