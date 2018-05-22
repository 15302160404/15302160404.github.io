$(document).ready(function () {
    $('#vegOn').click(function () {
        //删除fish
        $save = $('.fish').parent().parent().detach();
        //替换汉堡包为大蘑菇
        $('.hamburger').replaceWith('<li class="mushroom">mushroom</li>');
        //把meat 替换成tufo
        $('.meat').replaceWith('<li class="tofu">tofu</li>');
        $('.menu_list').parent().addClass('veg_leaf');
    });
    $('#restoreMe').click(function () {
        //还原
        history.go(0);
    });
});