<template>
    <div class="searchBox">
        <label for="search">search</label>
        <!-- @input="inputText=$event.target.value" v-modal로 대신 -->
        <!-- v-model="inputText" @change="inputText=$event.target.value"로 대신 -->
        <input 
            id="search"
            type="search"
            placeholder="검색어를 입력하세요."
            @change="
                $emit('searchMovie', $event.target.value);
                inputText=$event.target.value;
                $event.target.value = '';
            "
        />
        <button>검색</button>
    </div>
    <p>{{ inputText }}</p>
  
</template>

<script>
    export default {
        name: 'SearchbarComponent',
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                inputText: ''
            }
        },
        watch: {
            inputText(nameValue) {
                // inputText 값이 변경될 때마다 호출되는 watch
                // nameValue는 변경된 inputText 값
                // 입력한 영화제목이 데이터에 있는지 확인하고, 있으면 해당 영화정보를 보여주고, 없으면 "검색결과가 없습니다."라는 메시지를 보여주는 로직을 작성할 수 있습니다.
                console.log('inputText 값이 변경되었습니다:', nameValue);
                /* 
                if(nameValue !== '노량') {
                    alert('검색어가 없습니다.');
                } else {
                    // 여기에 검색 로직을 추가할 수 있습니다.
                    alert(`"${nameValue}"에 대한 검색 결과를 표시합니다.`);
                }
                */

                const findName = this.data.filter(movie => {
                    return movie.title.includes(nameValue);
                })
                //console.log(findName);
                if(findName.length === 0) {
                    alert('검색결과가 없습니다.');
                } else {
                    //alert(`"${nameValue}"에 대한 검색 결과를 표시합니다.`);
                }
            }
        }
    }
</script>

<style>
    .searchBox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
    }
    .searchBox input {
        width: 300px;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .searchBox label {
        margin-right: 10px;
    }
    .searchBox button {
        margin-top: 0;
        margin-left: 10px;
        padding-inline: 10px;
        border:1px solid #333;
        border-radius: 5px;
    }
</style>