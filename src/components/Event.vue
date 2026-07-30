<template>
    <div class="event" :class="{show : isOpen}">
        <p>{{text}}</p>
        <div class="btns">
            <button @click="$emit('changeText', changeTo)">텍스트 변경</button>
            <button @click="isOpen = false">x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventComponent',
    props: {
       text: String,
       changeTo: {
           type: String,
           required: true
       }
    },
    data() {
        return {
            isOpen: true,
        }
    }
}
</script>

<style>
    .event {
        background-color: #f0f0f0;
        padding: 20px;
        text-align: center;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: none;
    }
    .show {
        display: flex;
    }
</style>