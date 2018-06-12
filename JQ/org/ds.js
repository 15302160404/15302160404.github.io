var a1,a2,a3;
$(document).ready(function() {
	var num =0;
	goLightning();
	window.onblur= stopLightning;
	window.onfocus = goLightning;
	face('#head',num);
	face('#eyes',num);
	face('#nose',num);
	face('#mouth',num);
	function goLightning(){
		a1 = setInterval('$("#lightning1").fadeIn(250).fadeOut(250)',7000);
		a2 = setInterval('$("#lightning2").fadeIn("fast").fadeOut("fast")',5000);
		a3 = setInterval('$("#lightning3").fadeIn("fast").fadeOut("fast")',3000);
	}
	function stopLightning(){
		clearInterval(a1);
		clearInterval(a2);
		clearInterval(a3);
	}
	function face(id,num){
		$(id).click(function(){
			if(num < 9){
				$(this).animate({left: '-=367px',},500);
				num += 1;
			}
			else{
				$(this).animate({left: '0px',},500);
				num = 0;
			}
		});
	}
});