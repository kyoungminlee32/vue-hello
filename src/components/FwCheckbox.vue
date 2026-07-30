<template>
    <div :class="['checkbox', sizeClass, customClass]">
        <input
            :id="inputId"
            type="checkbox"
            :checked="isChecked"
            :disabled="disabled"
            @change="onChange"
        >
        <label :for="inputId">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'FwCheckbox',
    emits: ['update:modelValue', 'change'],
    props: {
        id: { type: String, default: '' },
        modelValue: { type: Boolean, default: undefined },
        checked: { type: Boolean, default: false },
        label: { type: String, default: '' },
        disabled: { type: Boolean, default: false },
        size: { type: String, default: 'sm' }, // sm | md
        customClass: { type: String, default: '' }
    },
    data() {
        return {
            localId: `fw-checkbox-${Math.random().toString(36).slice(2, 9)}`
        }
    },
    computed: {
        inputId() {
            return this.id || this.localId
        },
        isChecked() {
            return this.modelValue !== undefined ? this.modelValue : this.checked
        },
        sizeClass() {
            return this.size === 'sm' ? '-sm' : ''
        }
    },
    methods: {
        onChange(e) {
            const value = e.target.checked
            this.$emit('update:modelValue', value)
            this.$emit('change', value)
        }
    }
}
</script>