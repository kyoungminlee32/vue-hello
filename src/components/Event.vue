<template>
  <div class="event" :class="{ show: isOpen }">
    <p>{{ text }}</p>
    <div class="btns">
      <button v-if="showBtn" @click="$emit('changeText', changeTo)">
        텍스트 변경
      </button>
      <button @click="isOpen = false">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventComponent",
  props: {
    text: String,
    changeTo: {
      type: String,
      required: true,
    },
    showBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style>
.event {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: none;
}
.event p {
  flex: 1;
}
.show {
  display: flex;
}
</style>
