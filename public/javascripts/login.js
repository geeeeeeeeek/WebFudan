/**
 * Created by Tong on 11.27.
 */
$(function () {
    $("#maillogin").click(function (e) {
        open('https://uis1.fudan.edu.cn/amserver/UI/Login?goto=http://www.fudan.edu.cn/')
    });
    $("#enter").click(function (e) {
        sessionStorage.setItem("name", document.getElementById("name").value);
    });

});
