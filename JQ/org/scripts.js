$('document').ready(function () {
    $('.img').click(function () {
        var sale = getRandoms(50,50);
        var tu = getRandoms(4,1);
        var msg = '<p>your Code is : CODE'+sale + '</p>';
        $('.img').each(function (index,value) {
            console.log(tu);
            if(tu == index+1){
                $(this).append(msg);
                $('.img').css('border-color','red');
                $(this).css('border-color','green');
             }
            $(this).unbind('click');
        });
    });
});

function getRandoms(a,b)
{
    return Math.floor(Math.random()*a)+b;
} 