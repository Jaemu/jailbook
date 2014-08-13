/* Miniflow
   By Tony Biondo
   Consider this to be GPLv3
   tonyb@tonybox.net */

var nitems = 0;
var height = 0;
var width = 0;
var dist = 2.3; // Higher number = Closer Together



/* No need to edit past here */

function initMiniflow(pictures, element,w,h) {
  var ele = document.getElementById(element);
  ele.style.position="relative";
  width = w; height = h;
  for(var i in pictures) {
	 if(parseInt(i)==Number(i)) {
	 ele.innerHTML += '<a href="'+pictures[i][2]+'"><img border=none src="'+pictures[i][0]+'"  \
                          title="'+pictures[i][1]+'" style="position: absolute;" id="item'+(parseInt(i)+1)+'" \
                          onmousemove="highlight('+(parseInt(i)+1)+')"></a>';
     nitems+=1; }
  }

  ele.innerHTML+="<div id='iteminfo' style='position: absolute; font-size: 1.2em; font-family: Garamond, Georgia, serif; font-weight:normal; color:#660000; width: "+(width+110)+"px; text-align: center; top: "+(height+10)+"px;'></div>";

  highlight(nitems); highlight(Math.floor(nitems/2)); 
}

function item(i) { 
   return document.getElementById("item"+i);
   
}

function setOpacity(obj, value) {
	obj.style.opacity = value/5;
	obj.style.filter = 'alpha(opacity=' + value*10 + ')';
}

function highlight(me) {
  var info = document.getElementById("iteminfo");
  var left = 10;
  for(i=1;i<nitems+1;i++) {
    var prop = Math.pow(.9 ,Math.abs(me-i))
    setOpacity(item(i), prop*10);
    item(i).style.left=left+"px";
    if(i<me) { item(i).style.zIndex=i; }
    else { item(i).style.zIndex=nitems-i; }
    item(i).style.height=prop*height+"px"
    item(i).style.width=prop*width+"px"
    item(i).style.top=(height-prop*height)/2+10+"px"   
    left += prop*(width/dist); 
  }
  item(me).style.zIndex="100";
  info.style.left=parseInt(item(me).style.left)-50+"px";
  info.innerHTML=item(me).title;
  setOpacity(item(me), 100); 
}


