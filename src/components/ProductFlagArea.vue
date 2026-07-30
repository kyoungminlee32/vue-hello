<template>
    <div class="flag-area">
        <span
            v-for="item in items"
            :key="`${item.label}-${item.badgeClass}`"
            :class="['badge', item.badgeClass]"
        >
            {{ item.label }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'ProductFlagArea',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
