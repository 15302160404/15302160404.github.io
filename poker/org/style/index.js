/**
 * 定义扑克零件
 * [cards description]
 * @type {Array}
 */
var cards = [];
var cardsType = ['square','plum','spade','hearts'];
var score = [1,2,3,4,5,6,7,8,9,'t','j','q','k'];
var times = 0;
var mTotal = 0;
var cTotal = 0;
var result = 0;


/**
 * 页面加载
 * @param  
 * @return {[type]}   [description]
 */
$(document).ready(function() {
	//点击开始游戏
	startGame();
	//重置游戏
	var a = 7;
	reStart(a);
	//添加点数
	$('.add_cards').click(function() {
		var addGetCard = "<div id='m"+times+"'><div><img src='org/img/"+getCard()+".jpg' class='img-responsive img-rounded'></div></div>";
		$('.m_cards').append(addGetCard);
		if(times == 7){
			$(this).unbind('click');
		}
		console.log(times);
	});
	$('.c_cards_show img').attr('src','org/img/back.jpg');
	//翻牌
	showResult();
});

//#############################################################################


/**
 ***
 ****
 *****
 *******
 ********
 *********
 **********函
 ************
 ************数
 **************
 **************的
 ****************
 ****************定
 ******************
 ******************义
 ********************
 *******************
 ******************
 *****************
 ****************
 ***************
 **************
 *************
 ************
 ***********
 **********
 *********
 ********
 *******
 ******
 *****
 ****
 ***
 **
 */


//开始游戏
function startGame(){
	//添加扑克
	addPoker();
	//洗牌
	shuffle();
	//隐藏其他部件
	hideTools();
	//点击开始游戏事件
	$('.start_img').click(function() {
		//初始化页面
		$(this).fadeOut('slow').hide('slow');
		$('.score').show('fast');
		$('.cards').fadeIn('slow').show();
		$('.show_result').fadeIn('slow').show();
		$('.replay').fadeIn('slow').show();
		$('.computer').fadeIn('slow').show();
		$('.me').fadeIn('slow').show();
		$('.m_card1 img').attr('src','org/img/'+getCard()+'.jpg');
		$('.c_card1 img').attr('src','org/img/'+getCard()+'.jpg');
		$('.m_card2 img').attr('src','org/img/'+getCard()+'.jpg');
		$('.c_card2 img').attr('src','org/img/'+getCard()+'.jpg');
	});
}


/**
 * 发牌
 * @return {[type]} [description]
 */
function getCard(){
	var card = cards[times];
	times++;
	return card;
}


/**
 * 隐藏组件
 * @return {[type]} [description]
 */
function hideTools(){
	$('.score').hide();
	$('.cards').hide();
	$('.replay').hide();
	$('.computer').hide();
	$('.me').hide();
	$('.show_result').hide();
}

/**
 * 创建一副扑克
 */
function addPoker(){
	var count = 0;
	for(var i = 0;i<cardsType.length;i++){
		for(var j = 0;j<score.length;j++){
			cards[count] = cardsType[i]+score[j];
			count++;
		}
	}
}
/**
 * 洗牌
 * @return {[type]} [description]
 */
function shuffle(){
	for (var i = 0, len = cards.length; i < len; i++) {
	  var randomIndex = i + Math.floor(Math.random() * (len - i));
	  var temp = cards[i];
	  cards[i] = cards[randomIndex];
	  cards[randomIndex] = temp;
	}
}


/**
 * [翻牌]
 * @return {[type]} [description]
 */
function showResult(){
	$('.isWin').click(function() {
		$('.m_cards img').each(function(index) {
			var aa = $('.m_cards img').eq(index).attr('src');
			var bb = aa.split('.jpg');
			var num = bb[0].substring(bb[0].length-1);
			if(num == 't' || num == 'j' || num == 'q' || num == 'k'){
				num = 10;
			}
			if(num == 1){
				num = 11;
			}
			mTotal += parseInt(num);
		});
		$('.c_cards img').each(function(index) {
			var aa = $('.c_cards img').eq(index).attr('src');
			var bb = aa.split('.jpg');
			var num1 = bb[0].substring(bb[0].length-1);
			if(num1 == 't' || num1 == 'j' || num1 == 'q' || num1 == 'k'){
				num1 = 10;
			}
			if(num1 == 1){
				num1 = 11;
			}
			cTotal += parseInt(num1);
		});
		$('#m2 img')[0].src = $('#m8 img')[0].src;
		$('#m3 img')[0].src = $('#m9 img')[0].src;
		$('#m2 img').attr('class',$('#m8 img').attr('class'));
		$('#m3 img').attr('class',$('#m9 img').attr('class'));
		var a = 0;
		if(mTotal > cTotal){
			a =setTimeout('confirm("你赢了，是否继续")',1000);
			isContinue(a);
			result += 10;
		}
		else if(mTotal == cTotal){
			a =setTimeout('confirm("和人机平手，是否继续")',1000);
			isContinue(a);
			result += 0;
		}
		else{
			a =setTimeout('confirm("你输了，是否继续")',1000);
			isContinue(a);
			result -= 20;
		}
		$('.show_score').html(result);
	});
}

/**
 * [翻牌后是否继续游戏]
 * @return {Boolean} [description]
 */
function isContinue(a){
	if(a >= 7){
		setTimeout("$('.c_cards_show img').attr('src','org/img/back.jpg')",1000);
		setTimeout("$('.c_cards_show img').attr('class','img-responsive img-thumbnail')",1000);
		shuffle();
		times=0;
		setTimeout("$('.m_card1 img').attr('src','org/img/'+getCard()+'.jpg');",1000);
		setTimeout("$('.c_card1 img').attr('src','org/img/'+getCard()+'.jpg');",1000);
		setTimeout("$('.m_card2 img').attr('src','org/img/'+getCard()+'.jpg');",1000);
		setTimeout("$('.c_card2 img').attr('src','org/img/'+getCard()+'.jpg');",1000);	
	}
}



/**
 * [重置游戏]
 * @return {[type]} [description]
 */
function reStart(a){
	$('.replayGame').click(function() {
		isContinue(a);
		result = 0;
		$('.show_score').html(result);
		$('.m_cards').children().not('.me_cards').remove();
		times = 0;
	});
}
