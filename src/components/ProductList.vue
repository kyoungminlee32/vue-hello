<template>
  <ul>
    <li v-for="(item, idx) in items" :key="idx">
      <a href="javascript:void(0)" class="prod-txt-unit">
        <div class="prod-txts">
          <div class="title">{{ item.title }}<span class="badge -greenline" v-if="item.badge">{{ item.badge }}</span></div>
          <div class="sub">{{ item.sub }}</div>
          <div class="prod-info">
            <span class="max">{{ item.max }}</span><span class="def">{{ item.def }}</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>
