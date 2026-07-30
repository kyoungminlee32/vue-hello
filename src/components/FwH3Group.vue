<template>
    <div class="h3-group">
        <h2 class="h3">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'FwH3Group',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
