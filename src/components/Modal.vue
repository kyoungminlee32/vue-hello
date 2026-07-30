<template>
    <div class="modal" v-if="isModal">
        <div class="inner">
            <h3>{{ moviedata[selectedIndex]?.title }}</h3>
            <p>영화 상세보기</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalComponent',
        props: {
            isModal: {
                type: Boolean,
                required: true
            },
            moviedata: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>
.modal {
	background: rgba(0,0,0, 0.7);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal .inner {
	background: #fff;
	width: 80%;
	padding: 20px;
	border-radius:10px;
}
</style>