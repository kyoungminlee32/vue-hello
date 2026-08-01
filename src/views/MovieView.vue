<template>
  <!-- 네비게이션 바 -->
  <Navbar />
  <!-- 이벤트 -->
  <Event text="이벤트 정보 자식 props값 text" />
  <!-- 부모 data값(eventText)을 자식 props(:text)로 전달 -->
  <Event
    :text="eventText[eventTextNum]"
    changeTo="🎁 대박 할인 이벤트 시작!"
    @changeText="eventText = $event"
  />
  <!-- 부모 data값(eventText)을 자식 props(:text)로 전달 -->
  <Event
    :text="eventText2"
    changeTo="⏰ 선착순 마감 임박! 서두르세요!"
    @changeText="eventText2 = $event"
  />
  <!-- 검색 바 -->
  <!-- :data="moviedata" -->
  <Searchbar :data="data_temp" @searchMovie="filterMovies($event)" />
  <p class="btnAll">
    <button @click="showAllMove">전체보기</button>
  </p>
  <!-- 영화정보 -->
  <!-- :moviedata="moviedata" -->
  <Movies
    :moviedata="data_temp"
    @increaseLike="increaseLike"
    @openModal="
      isModal = true;
      selectedIndex = $event;
    "
    :backgroundColorProps="'#add8e6'"
  />
  <!-- 모달 -->
  <Modal
    :isModal="isModal"
    :moviedata="moviedata"
    :selectedIndex="selectedIndex"
    @closeModal="isModal = false"
  />
</template>

<script>
import exdata from "@/assets/js/movie"; // movie.js 파일을 가져오기
import Navbar from "@/components/Navbar.vue"; // Navbar.vue 파일을 가져오기
import Searchbar from "@/components/Searchbar.vue"; // Searchbar.vue 파일을 가져오기
import Event from "@/components/Event.vue"; // Event.vue 파일을 가져오기
import Modal from "@/components/Modal.vue"; // Modal.vue 파일을 가져오기
import Movies from "@/components/Movies.vue"; // Movies.vue 파일을 가져오기
console.log(exdata);

export default {
  name: "MovieView",
  components: {
    Navbar: Navbar, // Navbar 컴포넌트 등록
    Searchbar: Searchbar, // Searchbar 컴포넌트 등록
    Event: Event, // Event 컴포넌트 등록
    Modal: Modal, // Modal 컴포넌트 등록
    Movies: Movies, // Movies 컴포넌트 등록
  },
  data() {
    return {
      foods: ["김밥", "순대", "만두"],
      isModal: false,
      moviedata: exdata, // movie.js 파일에서 가져온 데이터를 moviedata에 할당 원본데이터
      data_temp: [...exdata], // movie.js 파일에서 가져온 데이터를 data_temp에 할당 복사본데이터
      selectedIndex: 0,
      eventText: [
        "NEPLIX 강렬한 운명의영화 이벤트 정보",
        "NEPLIX 강렬한 운명의영화 이벤트 정보 2",
        "NEPLIX 강렬한 운명의영화 이벤트 정보 3",
        "NEPLIX 강렬한 운명의영화 이벤트 정보 4",
        "NEPLIX 강렬한 운명의영화 이벤트 정보 5",
      ],
      eventText2: "NEPLIX 강렬한 운명의영화 이벤트 정보 2",
      eventTextNum: 0,
      interval: null,
    };
  },
  methods: {
    increaseLike(id) {
      // this.moviedata[i].like += 1;
      // 선택한 영화의 id를 이용하여 해당 영화의 like 값을 증가시키는 로직
      const selectedMovie = this.moviedata.find((movie) => movie.id === id);
      if (selectedMovie) {
        selectedMovie.like += 1;
      }
    },
    filterMovies(title) {
      // 검색어가 없으면 원본 데이터로 복원
      if (!title) {
        this.data_temp = [...this.moviedata];
        return;
      }
      // 검색어가 있으면 필터링
      this.data_temp = this.moviedata.filter((movie) => {
        return movie.title.includes(title);
      });
    },
    showAllMove() {
      this.data_temp = [...this.moviedata];
    },
  },
  mounted() {
    // 컴포넌트가 마운트될 때 실행되는 로직
    console.log("MovieView 컴포넌트가 마운트되었습니다.");
    this.interval = setInterval(() => {
      this.eventTextNum += 1;
      if (this.eventTextNum >= this.eventText.length) {
        this.eventTextNum = 0;
      }
      console.log(`텍스트이벤트 번호) : ${this.eventTextNum}`);
    }, 3000);
  },
  unmounted() {
    // 컴포넌트가 언마운트될 때 실행되는 로직
    console.log("MovieView 컴포넌트가 언마운트되었습니다.");
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
html,
body {
  /* 클릭/스크롤은 허용하되, 더블 탭 확대 및 핀치 줌 제스처를 비활성화합니다 */
  touch-action: none;
}
body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}
h1,
h2,
h3 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 0.5rem;
}
.btnAll {
  text-align: right;
  margin-bottom: 20px;
  padding: 0 2rem;
}
</style>
