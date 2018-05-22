$('document').ready(function () {
    var code = getRandoms(50,50);
    var id = getRandoms(4,1);
    var msg = '<strong style="color:orange">Congratulations!!</strong><br>your Code is <strong style="color:cadetblue">CODE'+code+'</strong>';
    // randomEle();
    $('.img img').click(function(){
        var a = $(this).attr('alt');
        console.log(a);
        if(a == id)
        {
            randomEle();
            $('img').parent().eq(id-1).css('border-color','green');
            $('.result').html(msg);
        }
        else{
            randomEle();
            $('img').parent().eq(id-1).css('border-color','green');
            $('.result').html('Sorry,no discount this time!');
        }
        $(this).unbind('click');
    });
});
function getRandoms(a,b)
{
    return Math.floor(Math.random()*a)+b;
}
function randomEle()
{
    return $('img').parent().css('border-color','red');
}