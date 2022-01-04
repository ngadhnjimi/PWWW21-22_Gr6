var up = false,
    right = false,
    down = false,
    left = false,
    x = 0,
    y = 0
    x1=Math.floor( Math.random() * ( 1 + 1200 - 10 ) ) + 10;
    y1=Math.floor( Math.random() * ( 1 + 800 - 10 ) ) + 10;
    console.log(x1);
document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = false
  }
}
function gameLoop(){
  var div = document.querySelector('div')
  var dest=document.querySelector('.dest')
  if (up){
    y = y - 10
  }
  if (right){
    x = x + 10
  }
  if (down){
    y = y + 10
  }
  if (left){
    x = x - 10
  }
  div.style.left = x+'px'
  div.style.top = y+'px'

  dest.style.left=x1+'px';
  dest.style.top = y1+'px';
  console.log(x);console.log(y);
  console.log(x1);console.log(y1);
   if((x>=x1-20 && x<=x1+20 )&&(y>=y1-20 && y<=y1+20)){
     alert("YOU WON, PLAY AGAIN")
     location.reload()
     x+=20;
     y+=20;
   }
 window.requestAnimationFrame(gameLoop)
}
 window.requestAnimationFrame(gameLoop)