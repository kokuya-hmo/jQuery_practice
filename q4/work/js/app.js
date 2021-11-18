$(function(){
  $(".nav li").on("click",function(){
    const contentsList = $(this).index();
    $(".description li").eq(contentsList).show().siblings().hide();
  });
})