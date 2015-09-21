var codeIsOpen = 0, designIsOpen = 0, moreIsOpen=0;
var oWidth = 0;
var pic = ["1.png","2.jpg","3.png","4.jpg"];
var picindex=0;



function OpenCode() {
console.log("Open Code");
if (codeIsOpen==0){
	CloseDesign();
	CloseMore();
	var lilicons = document.getElementsByClassName("lilicon");
var i;
for (i = 0; i < lilicons.length; i++) {
    lilicons[i].style.display = "inline";
}

	document.getElementById("codeDetails").style.height = "500px";
	document.getElementById("codeText").style.opacity = "1";
	document.getElementById("codeText").style.lineHeight = "normal";
	var delay=270; //1 seconds

setTimeout(function(){
	document.getElementById("codeDetails").style.height = "100%";
	}, delay);
setTimeout(function(){
var h = document.getElementById("codeDetails").clientHeight;
document.getElementById("codeDetails").style.height = h+"px";
	console.log(h);
	}, 500);

	codeIsOpen=1;
}
else { CloseCode();
}
}

function OpenDesign() {

console.log("Open Design");
	if (designIsOpen == 0) {

oWidth = document.getElementById("codeId").style.width;

		CloseCode();
		CloseMore();

if (document.documentElement.clientWidth > 800)
{
document.getElementById("codeId").style.width = "0%";

document.getElementById("moreId").style.width = "0%";
document.getElementById("designId").style.width = "80%";
	document.getElementById("designBtn").innerText = "Click again to close";
/*
	document.getElementById("designDetails").style.height = "500px";
	document.getElementById("designText").style.opacity = "1";
	document.getElementById("designText").style.lineHeight = "normal";
	var delay=270; //1 seconds

setTimeout(function(){
	document.getElementById("designDetails").style.height = "100%";
	}, delay);
setTimeout(function(){
var h = document.getElementById("designDetails").clientHeight;
document.getElementById("designDetails").style.height = h+"px";
	console.log(h);
}, 500);*/
}
	designIsOpen = 1;
	}
	else
	{

		document.getElementById("codeId").style.width = oWidth;
		document.getElementById("moreId").style.width = oWidth;
		document.getElementById("designId").style.width = oWidth;
		document.getElementById("designBtn").innerText = "See stuff I Designed";
		CloseDesign();
	}
}

function moveLeft(){
	--picindex;
	if (picindex < 0) picindex = 3;
	console.log("INDEX:" + picindex);
	console.log("moved left");
document.getElementById("designImgDiv").style.backgroundImage = "url('images/" + pic[picindex] + "')";

}
function moveRight(){
	++picindex;
	if (picindex >= 4) picindex = 0;
	console.log("INDEX:" + picindex);
	console.log("moved right");
document.getElementById("designImgDiv").style.backgroundImage = "url('images/" + pic[picindex] + "')";

}

function OpenMore() {

console.log("Open more");
if (moreIsOpen == 0) {
	CloseCode();
	CloseDesign();
	var lilicons = document.getElementsByClassName("lilicon2");
var i;
for (i = 0; i < lilicons.length; i++) {
		lilicons[i].style.display = "inline";
}

	document.getElementById("moreDetails").style.height = "500px";
	document.getElementById("moreText").style.opacity = "1";
	document.getElementById("moreText").style.lineHeight = "normal";
	var delay=270; //1 seconds

setTimeout(function(){
	document.getElementById("moreDetails").style.height = "100%";
	}, delay);
setTimeout(function(){
var h = document.getElementById("moreDetails").clientHeight;
document.getElementById("moreDetails").style.height = h+"px";
	console.log(h);
	}, 500);

moreIsOpen = 1;

	}
	else
	{
		CloseMore();
	}
}

function CloseCode(){

codeIsOpen = 0;
console.log("Close Code");
	document.getElementById("codeDetails").style.height = "0px";
	document.getElementById("codeText").style.opacity = "0";
	var delay=300;
	setTimeout(function(){

	document.getElementById("codeText").style.lineHeight = "0";


}, delay);


setTimeout(function(){
	var lilicons = document.getElementsByClassName("lilicon");
	var i;
	for (i = 0; i < lilicons.length; i++) {
		lilicons[i].style.display = "none";
	}

}, delay);

}

function CloseDesign(){
designIsOpen =0;
console.log("Close Design");
/*	var delay=300;
	document.getElementById("designDetails").style.height = "0";
	document.getElementById("designText").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("designText").style.lineHeight = "0";
	}, delay);*/
}

function CloseMore(){
	moreIsOpen = 0;

console.log("Close More");
	var delay=300;
	document.getElementById("moreDetails").style.height = "0";
	document.getElementById("moreText").style.opacity = "0";
		setTimeout(function(){
	document.getElementById("moreText").style.lineHeight = "0";
}, delay);


setTimeout(function(){
	var lilicons = document.getElementsByClassName("lilicon2");
	var i;
	for (i = 0; i < lilicons.length; i++) {
		lilicons[i].style.display = "none";
	}

}, delay);

}


(function (window, $) {

  $(function() {


    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;



      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);


$(document).ready(function(){
var theElement = document.getElementById("designId");

theElement.addEventListener("touchend", handlerFunction, false);

function handlerFunction(event) {

//	OpenDesign();
}

if (document.documentElement.clientWidth < 800)
{
	document.getElementById("designBtn").innerText = "Swipe Through my Designs";
}

theElement.addEventListener("touchstart", touchStartHandler, false);
theElement.addEventListener("touchend", touchEndHandler, false);


var touchesInAction = {};

function touchStartHandler(event) {
    var touches = event.changedTouches;

    for(var j = 0; j < touches.length; j++) {

         /* store touch info on touchstart */
         touchesInAction[ "$" + touches[j].identifier ] = {

            identifier : touches[j].identifier,
            pageX : touches[j].pageX,
            pageY : touches[j].pageY
         };
    }
}

function touchEndHandler(event) {
    var touches = event.changedTouches;

    for(var j = 0; j < touches.length; j++) {

        /* access stored touch info on touchend */
        var theTouchInfo = touchesInAction[ "$" + touches[j].identifier ];
        theTouchInfo.dx = touches[j].pageX - theTouchInfo.pageX;  /* x-distance moved since touchstart */
        theTouchInfo.dy = touches[j].pageY - theTouchInfo.pageY;  /* y-distance moved since touchstart */
				console.log(theTouchInfo.dx); console.log(theTouchInfo.dy);

				var x = Math.abs(theTouchInfo.dx); var y = Math.abs(theTouchInfo.dy);
				if (x>25 && y < 30) {
					if (theTouchInfo.dx<0) moveRight();
					if (theTouchInfo.dx>0) moveLeft();
				}
    }

    /* determine what gesture was performed, based on dx and dy (tap, swipe, one or two fingers etc. */

}

});

// For Flipout contacts
