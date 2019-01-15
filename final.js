function color(){
  var num = Math.random();
  if (num < 0.1){
    alert("赤");
  }else if(0.1 <= num && num < 0.33){
    alert("白");
  }else if(0.33 <= num && num < 0.66){
    alert("黒");
  }else{
    alert("青");
  }
}

function item(){
  var num = Math.random();
  if (num < 0.1){
    alert("リュック");
  }else if(0.1 <= num && num < 0.33){
    alert("腕時計");
  }else if(0.33 <= num && num < 0.66){
    alert("ネックレス");
  }else{
    alert("帽子");
  }
}





function search(){
var a = document.question.color.value;
var b = document.question.item.value;
var c = document.question.with.value;
var d = document.question.way.value;

  if (c == 1 || c == 3 || c == 4 || c == 5) {
    if(d == 1 || d == 3){
      alert("ラッキーカラーは" + a + "、アイテムは" + b)
      alert("パーカーとかがいいと思うよ！色は" + a + "のね")
    }
    if (d == 4 || d == 5 || d == 6) {
      alert("ラッキーカラーは" + a + "、アイテムは" + b)
      alert("動こきやすい服装がいいよね。邪魔かもだけど" + b + "もあるとグッドかな")
    }
    if (d ==7 || d == 8) {
      alert("ラッキーカラーは" + a + "、アイテムは" + b)
      alert("落ち着いた格好がいいと思います。")
    }else {
      alert("ラッキーカラーは" + a + "、アイテムは" + b)
      alert("アイディアがないのでこちらへ" + "https://clubd.co.jp/wp/post-20228");
    }
  }else {
    alert("ラッキーカラーは" + a + "、アイテムは" + b)
    alert("勝負の日ですね！派手すぎないようにするのと後は今日のプランによって決めていきましょう")
  }
}
