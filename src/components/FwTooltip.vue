<template>
    <span ref="root" :class="['tooltip', { '-active': isOpen }]">
        <button
            type="button"
            class="trigger"
            :aria-expanded="String(isOpen)"
            :aria-controls="panelId"
            @click.stop="toggle"
        >
            <span class="hide">{{ triggerText }}</span>
        </button>

        <span
            v-show="isOpen"
            :id="panelId"
            class="panel"
            role="tooltip"
            @click.stop="onPanelClick"
        >
            <span class="title">{{ title }}</span>
            <span class="t-content">
                <span v-for="(item, idx) in items" :key="idx" class="dot">{{ item }}</span>
            </span>
            <button type="button" class="close" @click="close"><span class="hide">닫기</span></button>
        </span>
    </span>
</template>

<script>
export default {
    name: 'FwTooltip',
    emits: ['open', 'close', 'panel-click'],
    props: {
        triggerText: { type: String, default: '도움말' },
        title: { type: String, default: '' },
        items: { type: Array, default: () => [] }
    },
    data() {
        return {
            isOpen: false,
            panelId: `fw-tooltip-${Math.random().toString(36).slice(2, 9)}`
        }
    },
    mounted() {
        document.addEventListener('click', this.onClickOutside)
        document.addEventListener('keydown', this.onEsc)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.onClickOutside)
        document.removeEventListener('keydown', this.onEsc)
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
            this.$emit(this.isOpen ? 'open' : 'close')
        },
        close() {
            if (!this.isOpen) return
            this.isOpen = false
            this.$emit('close')
        },
        onPanelClick() {
            this.$emit('panel-click')
        },
        onClickOutside(e) {
            if (!this.$refs.root) return
            if (!this.$refs.root.contains(e.target)) this.close()
        },
        onEsc(e) {
            if (e.key === 'Escape') this.close()
        }
    }
}
</script>