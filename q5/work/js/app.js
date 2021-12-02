$(function(){
  $(".dropdwn li").hover(function(){
    //dropdwnのliをホバー（カーソルがのった）時に
    $(this).children("ul").stop().slideDown();
    //dropdwn liの子要素を取得。slideDownで表示　slidedownが最後まで実行されていなくてもその状態から対のアニメーションが実行される
  }, function(){
    //カーソルが離れたときに
    $(this).children("ul").stop().slideUp();
    //dropdwn　liの子要素取得。slideUpで表示　slideUpが最後まで実行されていなくてもその状態から対のアニメーションが実行される
  });
});