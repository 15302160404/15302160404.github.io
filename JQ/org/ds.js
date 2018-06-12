var a1,a2,a3;
$(document).ready(function() {
	var num =0;
	goLightning();
	ra();
	re();
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
	function ra(){
		$("#ra").click(function(){
			var b1 = randomNum()*367;
			var b2 = randomNum()*367;
			var b3 = randomNum()*367;
			var b4 = randomNum()*367;
			$("#head").animate({left: "-"+b1+'px',},500);
			$("#eyes").animate({left: "-"+b2+'px',},500);
			$("#nose").animate({left: "-"+b3+'px',},500);
			$("#mouth").animate({left: "-"+b4+'px',},500);
		});
	}
	function re(){
		$("#re").click(function(){
			var c = 0;
			$("#head").animate({left: c+'px',},500);
			$("#eyes").animate({left: c+'px',},500);
			$("#nose").animate({left: c+'px',},500);
			$("#mouth").animate({left: c+'px',},500);
		});
	}
	function randomNum(){
		return parseInt(Math.random()*9);
	}
});