<template>
    <header class="header">
        <div :class="['inner', { center: centered }]">
            <div v-if="showBack || $slots.left" class="funcs">
                <button type="button" class="func -back" @click="$emit('back')"><span class="hide">뒤로가기</span></button>
            </div>

            <h1 class="title">{{ title }}</h1>

            <div v-if="showHome || showMenu || showClose || rightText || $slots.right" class="funcs">
                <button v-if="showHome" type="button" class="func -home" @click="$emit('home')"><span class="hide">홈</span></button>
                <button v-if="showMenu" type="button" class="func -menu" @click="$emit('menu')"><span class="hide">전체메뉴</span></button>
                <button v-if="showClose" type="button" class="func -close" @click="$emit('close')"><span class="hide">닫기</span></button>
                <button v-if="rightText" type="button" class="func" @click="$emit('cancel')">{{ rightText }}</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'FwHeader',
    props: {
        title: {
            type: String,
            default: ''
        },
        showBack: {
            type: Boolean,
            default: false
        },
        centered: {
        type: Boolean,
        default: false // 기본값은 왼쪽 혹은 정렬 없음
        },
        showHome: {
            type: Boolean,
            default: false
        },
        showMenu: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: false
        },
        rightText: {
            type: String,
            default: ''
        }
    },
    emits: ['back', 'home', 'menu', 'close', 'cancel']
}
</script>
