<template>
    <div class="product-share">
        <ul>
            <li>
                <button type="button" class="share" aria-haspopup="true" @click="$emit('share')">
                    <span class="hide">공유</span>
                </button>
            </li>
            <li>
                <button type="button" class="wishlist" @click="$emit('wishlist')">
                    <span class="hide">장바구니</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductShareButtons',
    emits: ['share', 'wishlist']
}
</script>
