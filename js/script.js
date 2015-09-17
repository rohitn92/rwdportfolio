var codeIsOpen = 0, designIsOpen = 0, moreIsOpen=0;
var oWidth = 0;
function OpenCode() {

console.log("Open Code");
if (codeIsOpen==0){
	CloseDesign();
	CloseMore();
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

document.getElementById("designImgDiv").style.backgroundImage = "url('images/2.jpg')";

console.log("Open Design");
	if (designIsOpen == 0) {

oWidth = document.getElementById("codeId").style.width;
		CloseCode();
		CloseMore();
document.getElementById("codeId").style.width = "0%";

document.getElementById("moreId").style.width = "0%";
document.getElementById("designId").style.width = "90%";
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
	}, 500); 
	
	designIsOpen = 1;
	}
	else
	{

		document.getElementById("codeId").style.width = oWidth;
		document.getElementById("moreId").style.width = oWidth;
		document.getElementById("designId").style.width = oWidth;
		CloseDesign();
	}
}


function OpenMore() {

console.log("Open more");
if (moreIsOpen == 0) {
	CloseCode();
	CloseDesign();
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
}

function CloseDesign(){
designIsOpen =0;
console.log("Close Design");
	var delay=300;
	document.getElementById("designDetails").style.height = "0";
	document.getElementById("designText").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("designText").style.lineHeight = "0";
	}, delay); 
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


// For Flipout contacts
