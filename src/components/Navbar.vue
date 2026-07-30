<template>
  <nav class="navbar">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">About</a>
  </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent',
    }
</script>

<style>
    .navbar {
        background-color: #333;
        overflow: hidden;
        color: white;
        display:flex;
        justify-content: space-around;
        padding: 14px 20px;
    }
</style>