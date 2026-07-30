<template>
    <div class="h2-group">
        <h2 class="h2">
            <span v-for="(line, index) in lines" :key="`${line}-${index}`">
                <br v-if="index > 0">
                {{ line }}
            </span>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'FwH2Group',
    props: {
        lines: {
            type: Array,
            default: () => []
        }
    }
}
</script>
