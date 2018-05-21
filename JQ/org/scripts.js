$('document').ready(function () {
    var code = getRandoms(50,50);
    var id = getRandoms(4,1);
    var ele = "<p class='tisi'></p>";
    var msg = 'your Code is CODE'+code;
    // randomEle();
    $('.img').click(function(){
        var a = $('.img img').attr('alt');
        if(a == id)
        {
            randomEle();
            $('img').parent().eq(id-1).css('border-color','green');
            $('img').parent().eq(id-1).append(ele);
            $('.result').html(msg);
        }
        else{
            randomEle();
            $('img').parent().eq(id-1).css('border-color','green');
            $('.result').html('no');
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