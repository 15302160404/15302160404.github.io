var bool = false;
$(document).ready(function () {
    if(bool == false){
        $('#vegOn').click(function () {
            //删除fish
            $f = $('.fish').parent().parent().detach();
            //替换汉堡包为大蘑菇
            $('.hamburger').replaceWith('<li class="mushroom">mushroom</li>');
            //把meat 替换成tufo
            $('.meat').after('<li class="tofu">tofu</li>');
            $m = $('.meat').detach();
            $('.tofu').parent().parent().addClass('veg_leaf');
            $('.mushroom').parent().parent().addClass('veg_leaf');
            // $(this).unbind('click');
            bool = true;
            console.log(bool);
        });
    }
        $('#restoreMe').click(function () {
            if(bool == true){
            //还原fish
            $('.menu_entrees li').first().before($f);
            //大蘑菇还原为汉堡包
            $('.mushroom').replaceWith('<li class="hamburger">hamburger</li>');
            //tofu还原成meat
            $('.tofu').each(function(i){
                $(this).after($m[i]);
            });
            $('.tofu').remove();
            $('.meat').parent().parent().removeClass('veg_leaf');
            $('.hamburger').parent().parent().removeClass('veg_leaf');
            // $(this).unbind('click');
            bool = false;
            console.log(bool);
        }
        });
    
});