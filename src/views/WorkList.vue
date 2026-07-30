<style scoped>
    /* @import "@/worklist/assets/js/worklist.js"; */
    /* @import "@/worklist/assets/js/jquery-3.6.0.min.js";
    @import "@/worklist/assets/js/guide.js";
    @import "@/worklist/assets/js/septem_pubcom.js"; */
    @import "@/worklist/assets/css/worklist.css";
</style>
<template>
    <div class="worklist">
        <div class="skipNav">
            <a href="#main">본문 바로가기</a>
            <a href="#gnb">메뉴 바로가기</a>
        </div>
        <header>
            <div class="title">
                <div class="subject">
                    <!-- <img src="./com/images/guide_logo_nh.svg" alt="NH Bank, NH 농협" class="nhLogo"> -->
                    <span class="headerTit">
                        <em class="headerYear">UI/UX Guide SYSTEM</em> | 
                        <em class="prj">금상몰</em>
                    </span>
                    <!-- <div class="total"><em>진행률 </em><span></span></div>-->
                </div>
                <div class="search">
                    <input type="text" id="tableSearch" placeholder="검색어입력">
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="pubList.html" class="active" title="선택됨">퍼블리스트</a></li>
                        <li><a href="guide.html">UI가이드</a></li>
                        <li><a href="docs.html">컨벤션</a></li>
                    </ul>
                </div>
            </div>
            <nav class="gnb">
                <ul>
                    <!-- gnb는 depth1로 자동생성됩니다. -->
                    <li><span>전체보기</span></li>
                    <li><span>2025_상시</span></li>
                </ul>
            </nav>
        </header>
        <main id="main" class="pubList">
            <table class="dataTable compact">
                <tbody>
                    <tr>
                        <td class="lv2">영화</td>
                        <td class="lv3"></td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                             <a href="./movie" class="linked" target="_blank">영화</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date"><span></span></td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">A타입 인터랙션</td>
                        <td class="lv3"></td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                             <a href="./prototype/A-type/html/A-type" class="linked" target="_blank">A타입인터랙션 샘플</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date"><span></span></td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">A타입 인터랙션</td>
                        <td class="lv3"></td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./prototype/A-type/html/A-type-2" class="linked" target="_blank">A타입인터랙션 샘플2</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date"><span></span></td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">B타입 인터랙션</td>
                        <td class="lv3"></td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./prototype/B-type/html/B-type" class="linked" target="_blank">B타입인터랙션 샘플</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date"><span></span></td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">상품상세 템플릿</td>
                        <td class="lv3"></td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/_FW/fw_product_detail" class="linked" target="_blank">템플릿</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date"><span>260721</span></td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">상품상세 템플릿</td>
                        <td class="lv3">수신상품</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/_PD/FMDC-temp" class="linked" target="_blank">FMDC-temp</a>
                        </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">상품상세 템플릿</td>
                        <td class="lv3">퇴직연금</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/_PD/FMHA-temp" class="linked" target="_blank">FMHA-temp</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">전자서명</td>
                        <td class="lv3">지문인증</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/UD/FMAA-0100000000F01-B" class="linked" target="_blank">FMAA-0100000000F01-B</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">전자서명</td>
                        <td class="lv3">간편인증</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/UD/FMAA-0200000000F01-B" class="linked" target="_blank">FMAA-0200000000F01-B</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">전자서명</td>
                        <td class="lv3">NH모바일인증</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/UD/FMAA-0300000000F01-B" class="linked" target="_blank">FMAA-0300000000F01-B</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">전자서명</td>
                        <td class="lv3">공동인증</td>
                        <td class="lv4"></td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/UD/FMAA-0400000000F01-B" class="linked" target="_blank">FMAA-0400000000F01-B</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">연금저축펀드계좌</td>
                        <td class="lv3">연금저축펀드계좌 신규</td>
                        <td class="lv4">가입정보입력</td>
                        <td class="lv5">저축기간 선택</td>
                        <td class="lv6">선택오류 안내</td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/FU/FMEC-0103030100F01-A" class="linked" target="_blank">FMEC-0103030100F01-A</a>
                         </td>
                        <td class="user">김종익</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">서브메인</td>
                        <td class="lv3">저축</td>
                        <td class="lv4">입출금</td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/MM/FMBB-0400000000F01" class="linked" target="_blank">FMBB-0400000000F01</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">서브메인</td>
                        <td class="lv3">대출</td>
                        <td class="lv4">직장인</td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/MM/FMBB-0500000000F01" class="linked" target="_blank">FMBB-0500000000F01</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <td class="lv2">서브메인</td>
                        <td class="lv3">외환</td>
                        <td class="lv4">예금</td>
                        <td class="lv5"></td>
                        <td class="lv6"></td>
                        <td class="lv7"></td>
                        <td class="func">
                            <input type="radio" class="iframe-select" name="iframename">
                            <a href="./html/MM/FMBB-0700000000F01" class="linked" target="_blank">FMBB-0700000000F01</a>
                         </td>
                        <td class="user">이경민</td>
                        <td class="date">260721</td>
                        <td class="cf1"></td>
                        <td class="note"></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <footer>
            <address>Copyright © NH Bank. All Rights Reserved.</address>
        </footer>
    </div>
</template>

<script>
export default {
  created() {
    const tag = document.createElement('script')
    tag.setAttribute('src', '../com/js/septem_pubcom.js')
    document.head.appendChild(tag)
  }
}
</script>
