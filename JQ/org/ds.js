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
		setInterval('$("#lightning1").fadeIn(250).fadeOut(250)',2000);
		setInterval('$("#lightning2").fadeIn("fast").fadeOut("fast")',3000);
		setInterval('$("#lightning3").fadeIn("fast").fadeOut("fast")',4000);
	}
	function stopLightning(){
		clearInterval(goLightning());
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