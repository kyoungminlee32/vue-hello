<template>
    <div class="movie">
        <h1>영화정보</h1>
        <div v-for="(movie) in moviedata" :key="movie.id" class="item">
            <figure>
                <img :src="`${movie.imgUrl}`" :alt="movie.title">
            </figure>
            <div class="info">
                <h3 class="bg-yellow" :style="{ backgroundColor: backgroundColorProps }">{{ movie.title }}</h3>
                <p>개봉: {{ movie.year }}</p>
                <p>장르: {{ movie.category }}</p>
                <div class="btns">
                    <button @click="$emit('increaseLike', movie.id)">좋아요</button>
                    <span>{{ movie.like }}</span>
                    <p><button @click="$emit('openModal', movie.id)">상세보기</button></p>
                </div>
            </div>
        </div>
        <p v-for="(item, i) in foods" :key="i" class="foods">{{ item }}</p>
    </div>
</template>

<script>
export default {
    name: 'MoviesComponent',
    props: {
        moviedata: {
            type: Array,
            required: true
        },
        // 2. 선택 데이터 (안 주면 기본값으로 '검은색'을 사용함)
        backgroundColorProps: {
            type: String,
            required: false, // 기본값이 false이므로 생략해도 됩니다.
            default: 'black'
        },
    },
    /*
    methods: {
        increaseLike(i) {
            this.$emit('increaseLike', i);
        }
    }
    */
   data() {
		return {
			foods: ["김밥", "순대", "만두"],
		}
	},
    
}
</script>

<style>
.movie {
	padding:0 2rem;
}
.bg-yellow {
	background-color:#ff0;
	padding: 10px;
}
.movie button,.btnAll button,.btns button,.modal button{
	margin-right: 10px;
	padding-inline: 10px;
	border:1px solid #333;
	border-radius: 5px;
	margin-top: 10px;
}
.btnAll button {
    margin-right:0;
}
.movie .item {
	width: 100%;
	border: 1px solid #ccc;
	display: flex;
	margin-bottom: 20px;
	padding: 1rem;
}
.movie .item figure {
	width: 30%;
	margin-right: 1rem;
	padding: 10px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    border-radius: 10px;
}
.movie .item img {
	width: 100%;
    border-radius: 10px;
}
.movie .item .info {
	width: 100%;
    min-height: 70rem;
    position: relative;
}
.movie .item .info p {
    margin-top: 2rem;
}
.movie .item .info p + p {
    margin-top: 0.5rem;
}
.movie .item .info .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.movie .item .info .btns span {
    flex:1;
    margin-top: 10px;

}
.movie .item .info .btns p {
    margin-top: 0;
}
.foods {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
}
@media (max-width: 430px) {
    .movie {
        padding: 0 2rem;
    }
    .movie .item {
        flex-direction: column;
    }
    .movie .item figure {
        width: 100%;
        margin-right: 0;
        margin-bottom: 1rem;
    }
    .movie .item .info {
        width: 100%;
        min-height: 30rem;
    }
    .movie .item figure + .info {
        margin-top: 1rem;
    }
}
</style>