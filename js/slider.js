$(function(){
    var count = 1; // 이미지 번호

    // 인터벌 함수(함수, 재생시간ms)
    setInterval(function(){
              
      console.log(count);
      if(count > 2) count = 0;
      // 모든 이미지 비표시
      $('.slider img').removeClass('show');
      // 현재 이미지만 표시
      $('.slider img')
        .eq(count)
        .addClass('show');


      count++;
    }, 4000);

  });