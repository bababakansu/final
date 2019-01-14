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





function question(){
var a = document.getElementById('color');
var b = document.getElementById('item');
var c = document.getElementsByName('gender');
var d = document.getElementsByName('with');
var e = document.getElementsByName('way');

var f = document.getElementById('male');
var g = document.getElementById('female');

var h =document.getElementById('boyfriend');
var i =document.getElementById('girlfriend');
var j =document.getElementById('family');
var k =document.getElementById('only');
var l =document.getElementById('nothing');

var m =document.getElementById('school');
var n =document.getElementById('date');
var o =document.getElementById('job');
var p =document.getElementById('sport');
var q =document.getElementById('shop');
var r =document.getElementById('amusement');
var s =document.getElementById('museaum');
var t =document.getElementById('trip');

if(f == true){
  if(h == true){
    if(m == true || o  == true || q == true){
      alert ("やったー")
      document.getElemetnById('alert').innerHTML = '<img src= "img.png" alt="photo-1.jpg">';
      }
    }
  }
}
