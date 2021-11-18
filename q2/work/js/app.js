
$(function(){
  $(".modal_open_button").on("click",function(){
    //modal_open_buttonをクリック時に
    $(".modal_win").fadeIn();
    //modal_winをフェードイン表示
  });
  $(".c-modal_close").on("click",function(){
    //c-modal_closeをクリック時に
    $(".modal_win").fadeOut();
    //modal_winをフェードアウト非表示
  });
});