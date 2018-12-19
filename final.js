function uranai(){
  var num = Math.random();
  if (num < 0.1){
    alert("凶");
  }else if(0.1 <= num && num < 0.33){
    alert("小吉");
  }else if(0.33 <= num && num < 0.66){
    alert("中吉");
  }else{
    alert("大吉");
  }
}

window.onload = function(){
  draw();
}

function draw(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var x, y;
  for (y=0; y<100; y = y + 10){
    for (x=0; x<100; x = x + 10){
    if ((x+y)%20 == 0 && x%20!=0 && y%20!=0){
      ctx.fillRect(x,y,10,10);
      }
    }
  }
}
