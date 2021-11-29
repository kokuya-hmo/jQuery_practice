$(function(){
  let pageCount = 1 ;
  //pageCountを1と設定
  let prevWord = "";
  //doneの処理
  const displayResult = function(x){
      //下記の処理をdisplayResultという変数に格納
    $(".message").remove();
    if (x[0].items !== undefined){
      $.each(x[0].items,function(index,value){
          //引数xに対しての繰り返し処理
        const displayText = '<li class="lists-item"><div class="list-inner"><p>タイトル:' + value.title + "</p>" +
                              "<p>作者:" + value["dc:creator"] + "</p>" + "<p>出版社:" + value["dc:publisher"] + "</p>" +
                              "<a href=" + value.link["@id"] + ">書籍情報</a></div></li>";
            //listクラスに対して初めにdisplayTextに格納した要素を追加
        $(".lists").prepend(displayText);
        
      });
    }else{
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }
    console.log(x[0].items)
  };
  function displayError () {
    //関数名displayError　searchWordが空ならば、listsクラスの前にdivタグ追加
    $(".lists").empty();
    $(".message").remove();
    if (searchWord === ""){
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }
  };

  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();
    //#search-inputに入力した文字を変数searchWordに格納
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    if(prevWord !== searchWord){
      prevWord = searchWord;
      pageCount = 1;
      $(".lists").empty();
    }else{
      pageCount = pageCount + 1;
    }
    console.log(searchWord)
    console.log(prevWord)
    console.log(pageCount)
// Ajaxの実行
//.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
      console.log("成功")
      console.log(result)

    }).fail(function (err) {
  //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている
      displayError(err)
      console.log("失敗")
    });
  });
  $(".reset-btn").on("click",function(){
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
    prevWord = "";
    pageCount = 1;
  })
});