$(function(){
  $("#q1").css("color","green");
  //q1を読み込んだ時にcssのcolorを#28a44aに変更

  
  $("#q2").on("click",function(){
    //q2をクリック時に
    $(this).css("background-color","pink");
    //q2のbackground-colorを#eaf6fdに変更
  });


  $("#q3").on("click",function(){
    //q3をクリック時に
    $(this).fadeOut(3000);
    //3000ミリ秒かけてフェードアウト
  });


  $("#q4").on("click",function(){
    //q4をクリック時に
    $(this).addClass("large");
    //クラス名largeを適用
  });


  $("#q5").on("click",function(){
    //q5クリック時に
    $(this).before("DOMの前")
    //q5の要素の直前にテキスト追加
    .prepend("DOMの中の前")
    //q5要素の先頭にテキスト追加
    .append("DOMの中の後")
    //q5要素の末尾にテキスト追加
    .after("DOMの後");
    //q5要素の直後にテキスト追加
  });


  $("#q6").on("click",function(){
    //q6クリック時に
    $(this).animate({
      //q6を
      "marginTop":"100px",
      //margin-topが100px
      "marginLeft":"100px"
      //margin-leftが100px
    },2000)
    //2000ミリ秒かけて動かす
  });


  $("#q7").on("click",function(){
    //q7クリック時に
    console.log(this);
    //q7idのノードをコンソールに表示
  });


  $("#q8").hover(function(){
    //ホバー時に
    $(this).addClass("large")
    //largeクラスを追加
    },
    function(){
    //ホバー解除時に
      $(this).removeClass("large");
    //largeクラスを削除
  });


  $("#q9 li").on("click",function(){
    //q9のliをクリック時
    const li = $(this).index();
    //セレクタのインデックス番号をarrと定義し
    alert(li);
    //alertに表示
  });
  

  $("#q10 li").on("click",function(){
    //q10クリック時に
    const list = $(this).index();
    //q10 liのインデックス番号を取得しlistと定義
    console.log($("#q11 li").eq(list));
    //コンソールにq11 liのlistで定義したインデックス番号の要素を表示
    $("#q11 li").eq(list).addClass("large-text");
    //q11 liのlistで取得したインデックス番号の要素にクラスlarge-textを追加する
  });
});

