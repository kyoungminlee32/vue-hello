<template>
    <div :class="rootClasses">
        <div v-if="useButtonsWrap" class="buttons">
            <button v-if="showConsult" type="button" class="button -lg" @click="$emit('consult')">{{ consultLabel }}</button>
            <button v-if="showJoin" type="button" :class="['button', '-lg', joinButtonClass]" @click="$emit('join')">{{ joinLabel }}</button>
        </div>
        <template v-else>
            <button v-if="showConsult" type="button" class="button -lg" @click="$emit('consult')">{{ consultLabel }}</button>
            <button v-if="showJoin" type="button" :class="['button', '-lg', joinButtonClass]" @click="$emit('join')">{{ joinLabel }}</button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'ProductActionButtons',
    props: {
        inline: {
            type: Boolean,
            default: false
        },
        rootClass: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: true
        },
        showConsult: {
            type: Boolean,
            default: true
        },
        showJoin: {
            type: Boolean,
            default: true
        },
        consultLabel: {
            type: String,
            default: '상담'
        },
        joinLabel: {
            type: String,
            default: '가입하기'
        },
        joinButtonClass: {
            type: String,
            default: '-primary'
        }
    },
    emits: ['consult', 'join'],
    computed: {
        rootClasses() {
            if (this.inline) {
                return [this.rootClass || 'top-join-btn']
            }

            return ['fixer', '-jsProcuctBtn', { '-active': this.active }, this.rootClass]
        },
        useButtonsWrap() {
            return !this.inline
        }
    }
}
</script>
