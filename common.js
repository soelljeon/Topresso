$(function () {
  // 보이기 | 숨기기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      //250 넘으면 버튼이 보여짐니다.
      $(".scrolldown").fadeIn();
    } else {
      $(".scrolldown").fadeOut();
    }
  });
  // 버튼 클릭시
  $(".scrolldown").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0, // 0 까지 animation 이동합니다.
      },
      400
    ); // 속도 400
    return false;
  });
});
