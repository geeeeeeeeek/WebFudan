/**
 * Created by Tong on 11.23.
 */
$(function () {
    var name = sessionStorage.getItem("name");
    if (!name){
        window.location.href="login.html";
        return;
    }
    document.getElementById("name").value = name;
    $("[data-toggle='offcanvas']").click(function (e) {
        e.preventDefault();

        //If window is small enough, enable sidebar push menu
        if ($(window).width() <= 992) {
            $('.row-offcanvas').toggleClass('active');
            $('.left-side').removeClass("collapse-left");
            $(".right-side").removeClass("strech");
            $('.row-offcanvas').toggleClass("relative");
        } else {
            //Else, enable content streching
            $('.left-side').toggleClass("collapse-left");
            $(".right-side").toggleClass("strech");
        }


    });

});