// main.js
console.log('jquery...');

// gnb
$(function(){
    // 마우스 오버시 메뉴 열림
    $('.depth1').mouseover(function(){
      // class추가되면 보임
      $('.depth2').addClass('show');
      $('.ex').addClass('show');
    });
  
    // 마우스가 나가면 메뉴 닫힘
    $('.depth1 > li').mouseout(function(){
      $('.depth2').removeClass('show');
      $('.ex').removeClass('show');
    });
  
  });


  $(function(){
    // 팝업창 표시(기본)
    $('.popup').addClass('show');

    // 닫기 버튼 클릭시 팝업장 종료
    $('#btn_close').click(function(){
      $('.popup').removeClass('show');
    });
  });