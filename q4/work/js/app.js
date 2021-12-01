$(function(){
  $(".nav li").on("click",function(){
    //nav liをクリックしたときに
    const contentsList = $(this).index();
    $(".description li").eq(contentsList).show().siblings().hide();
    //contetListに格納したインデックス番号を取得、兄弟要素を取得し、隠す
  });
})