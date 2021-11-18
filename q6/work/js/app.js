$(function(){
  $(".select-box").on("change",function(){
    //select-box要素に変更があった際
    var type = $(this).val();
    //select-boxのvalueをtypeと定義
    var typeList = $(".food-list li");
    //food-listのliをtypeListと定義
    "all" === type ? typeList.show() :
    //typeとallが一致したときにtypeListを表示
    $.each(typeList,function(index,value){
      //typeListに対して繰り返し処理
      var list = $(value).data("category-type");
      //第二引数のdataのプロパティcategory-typelistをlistと定義する
      type === list ?
      //typeとlistが同じ値ならば
      $(value).show() :
      //valueを表示し
      $(value).hide();
      //異なるならばvalueを表示しない
    })
  });
});