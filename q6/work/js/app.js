$(function(){
  $(".select-box").on("change",function(){
    //select-box要素に変更があった際
    const type = $(this).val();
    //select-boxのvalueをtypeと定義
    const typeList = $(".food-list li");
    //food-listのliをtypeListと定義
    if("all" === type){
      typeList.show()
    //typeとallが一致したときにtypeListを表示
    }else{
      $.each(typeList,function(index,value){
      //typeListに対して繰り返し処理
      const list = $(value).data("category-type");
      //第二引数のdataのプロパティcategory-typelistをlistと定義する
      type === list ? $(value).show() : $(value).hide();
      //typeとlistが同じ値ならば valueを表示し 異なるならばvalueを表示しない
      });
    };
  });
});