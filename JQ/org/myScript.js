$('document').ready(function () {
    $('.img').click(function () {
        var sale = getRandom(5,5);
        var msg = '<p>your sale is '+sale + '%</p>';
        $('.img p').remove();
        $(this).append(msg);
    });
});

function getRandom(a,b)
{
	return Math.floor(Math.random()*a)+b;
}