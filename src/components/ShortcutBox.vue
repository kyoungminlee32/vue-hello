<template>
  <div :class="['shortcut', { '-boxType': boxType }]">
    <ul v-if="boxType">
      <li v-for="(item, idx) in items" :key="idx">
        <a :href="item.href" :role="item.role1">{{ item.label }}</a>
      </li>
    </ul>
    <a v-else :href="items[0].href">{{ items[0].label }}</a>
  </div>
</template>

<script>
export default {
  name: 'ShortcutBox',
  props: {
    items: {
      type: Array,
      required: true
    },
    boxType: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>
