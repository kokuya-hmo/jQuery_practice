$(function(){
  $("ul.dropdwn li").hover(function(){
    //dropdwnのliをホバー（カーソルがのった）時に
    $("ul:not(:animated)",this).slideDown();
    //dropdwn_menuをslideDownで表示（アニメーション実行途中にアニメーションを実行しない）
  }, function(){
    //カーソルが離れたときに
    $("ul.dropdwn_menu",this).slideUp();
    //dropdwn_menuをslideUp表示
  });
});