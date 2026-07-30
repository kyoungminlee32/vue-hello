<template>
    <ul class="product-visual-list jsDetailAni">
        <li v-for="item in items" :key="item.id" :class="item.className">
            <div class="inner">
                <h3 v-html="item.title"></h3>
                <p class="visual-para" v-html="item.descriptionHtml"></p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ProductVisualList',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
