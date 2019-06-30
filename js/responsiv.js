$(function (){
    isNavbarHidden = true;
    $('.nav_bar_menu_icon img').click(function (){
        if(isNavbarHidden){
            $('body > header .nav_three .nav_bar').fadeIn("slow");
            isNavbarHidden = false;
        }
        else{
            $('body > header .nav_three .nav_bar').fadeOut("slow");
            isNavbarHidden = true;
        }
    });
    
    $('.liste_view_article_one section .item').mouseover(function (){
       $('.liste_view_article_one section .item .shop_btn:visible').hide();
       $(this).find('.shop_btn').show();
    });
});
