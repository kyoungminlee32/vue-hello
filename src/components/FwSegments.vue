<template>
    <div>
        <div :class="[addClass ? [addClass] : ['segments', { '-tabstyle': tabStyle }]]">
            <template v-if="tabStyle">
                <div class="outer">
                    <div class="inner">
                        <div role="tablist" class="list">
                            <div
                                v-for="tab in normalizedTabs"
                                :key="tab.value"
                                :class="['item', { '-active': modelValue === tab.value }]"
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    :id="`${uid}-tab-${tab.value}`"
                                    :aria-controls="`${uid}-panel-${tab.value}`"
                                    :aria-selected="String(modelValue === tab.value)"
                                    @click="select(tab.value)"
                                >
                                    <slot :name="`tab-${tab.value}`">{{ tab.label }}</slot>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div role="tablist" class="list">
                    <div
                        v-for="tab in normalizedTabs"
                        :key="tab.value"
                        :class="['item', { '-active': modelValue === tab.value }]"
                    >
                        <button
                            type="button"
                            role="tab"
                            :id="`${uid}-tab-${tab.value}`"
                            :aria-controls="`${uid}-panel-${tab.value}`"
                            :aria-selected="modelValue === tab.value"
                            @click="select(tab.value)"
                        >
                            <slot :name="`tab-${tab.value}`">{{ tab.label }}</slot>
                            <span v-if="modelValue === tab.value" class="hide">선택됨</span>
                        </button>
                    </div>
                </div>
            </template>
        </div>

        <div class="segments-panels">
            <div
                v-for="tab in normalizedTabs"
                :key="tab.value"
                role="tabpanel"
                :id="`${uid}-panel-${tab.value}`"
                :aria-labelledby="`${uid}-tab-${tab.value}`"
                :class="['segments-panel', { '-active': modelValue === tab.value }]"
                :tabindex="modelValue === tab.value ? 0 : -1"
                v-show="modelValue === tab.value"
            >
                <slot :name="`panel-${tab.value}`" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FwSegments',
    emits: ['update:modelValue', 'change'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        addClass: {
            type: String,
            default: ''
        },
        tabs: {
            type: Array,
            default: () => []
            // 문자열 배열: ['email', 'sms']
            // 객체 배열: [{ value: 'email', label: '이메일' }, ...]
        },
        tabStyle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            uid: `fw-segments-${Math.random().toString(36).slice(2, 9)}`
        }
    },
    computed: {
        normalizedTabs() {
            return this.tabs.map(tab =>
                typeof tab === 'string' ? { value: tab, label: tab } : tab
            )
        }
    },
    methods: {
        select(value) {
            this.$emit('update:modelValue', value)
            this.$emit('change', value)
        }
    }
}
</script>
