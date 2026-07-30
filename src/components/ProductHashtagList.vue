<template>
    <div class="hashtag">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
</template>

<script>
export default {
    name: 'ProductHashtagList',
    props: {
        tags: {
            type: Array,
            default: () => []
        }
    }
}
</script>
