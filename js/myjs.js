/*

1- siblings() => الأشقاء

// $("div:contains('JQuery')").css("border","5px solid #262626");
// $("div:contains('JQuery')").siblings().css("border","5px solid #262626");


$("div, p").click(function(){
  $(this).siblings().slideUp(2000);
});

---

$("div").siblings("test");
   أي ديف في حدا من اخواتو عنده كلاس اسمو تيست وطبق عليه الخواص

*/

$(document).ready(function(){
  // $("div, p").click(function(){
  //   $(this).siblings().slideUp(2000);
  // });

  // $("div, p").click(function(){
  //   $(this).siblings(".test").slideUp(2000);
  // });

  // $("div:contains('JQuery')").css("border","5px solid #262626");
  // $("div:contains('JQuery')").siblings().css("border","5px solid #262626");


$('div a').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
}); 

  // $("div, p").click(function(){
  //   $("div").siblings(".test").hide(2000);
  // });



});
