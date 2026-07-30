<template>
    <span class="switch ml-auto -sm">
        <input
            :id="inputId"
            type="checkbox"
            :checked="isChecked"
            :disabled="disabled"
            @change="onChange"
        >
        <label :for="inputId">
            <span class="hide">{{ label }}</span>
        </label>
    </span>
</template>

<script>
export default {
    name: 'FwSwitch',
    emits: ['update:modelValue', 'change'],
    props: {
        id: { type: String, default: '' },
        modelValue: { type: Boolean, default: undefined },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        label: { type: String, default: '스위치' }
    },
    data() {
        return {
            localId: `fw-switch-${Math.random().toString(36).slice(2, 9)}`
        }
    },
    computed: {
        inputId() {
            return this.id || this.localId
        },
        isChecked() {
            return this.modelValue !== undefined ? this.modelValue : this.checked
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