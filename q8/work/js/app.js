$(function(){
  $(".search-btn").on("click",function(){
    var searchWord = $("#search-input").val();
    //#search-inputに入力した文字を変数searchWordに格納
    var pageCount = 1 ;
    //pageCountを1と設定
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }

    //doneの処理
    var displayResult = function(x){
      //下記の処理をdisplayResultという変数に格納
      $.each(x[0].items,function(index,value){
        //引数xに対しての繰り返し処理
        const displayText = '<li class="lists-item"><div class="list-inner"><p>タイトル:' + value.title + "</p>" +
                          "<p>作者:" + value["dc:creator"] + "</p>" + "<p>出版社:" + value["dc:publisher"] + "</p>" +
                          "<a href=" + value.link["@id"] + ">書籍情報</a></div></li>";
        //listクラスに対して初めにdisplayTextに格納した要素を追加
        $(".lists").prepend(displayText);
      });
    };
    //関数名displayError　searchWordが空ならば、listsクラスの前にdivタグ追加
    function displayError () {
      if (searchWord === ""){
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      }
    };
// Ajaxの実行
//.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response) {
      $(".lists").empty();
      $(".message").remove();
      var result = response['@graph'];
      displayResult(result)
    }).fail(function (err) {
  //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている
      $(".lists").empty();
      $(".message").remove();
      displayError(err)
    });
  });
  $(".reset-btn").on("click",function(){
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  })
});