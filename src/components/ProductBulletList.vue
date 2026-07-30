<template>
    <ul class="ul -bullet">
        <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    name: 'ProductBulletList',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
