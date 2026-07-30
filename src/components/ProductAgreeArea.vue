<template>
    <div class="product-agree-area">
        <div :class="['accordion', '-lg', { '-active': isOpen }]" data-role="fold">
            <button
                type="button"
                class="title"
                data-role="marker"
                :aria-expanded="String(isOpen)"
                @click="toggleOpen"
            >
                {{ title }}
            </button>
            <div v-show="isOpen" class="panel" data-role="hidden">
                <div class="shortcut -boxType">
                    <ul>
                        <li v-for="item in links" :key="item.label">
                            <a :href="item.href || 'javascript:void(0)'" aria-haspopup="true" @click.prevent="$emit('select', item)">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductAgreeArea',
    emits: ['select'],
    props: {
        title: {
            type: String,
            default: '상품설명서 및 약관'
        },
        links: {
            type: Array,
            default: () => []
        },
        defaultOpen: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isOpen: this.defaultOpen
        }
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
