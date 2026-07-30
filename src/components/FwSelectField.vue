<template>
    <div class="field">
        <span class="label">{{ label }}</span>
        <div class="select">
            <button type="button" @click="onClick">{{ valueText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FwSelectField',
    props: {
        label: {
            type: String,
            default: ''
        },
        valueText: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick(event) {
            this.$emit('select', event.currentTarget)
        }
    }
}
</script>
