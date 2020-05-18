$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
        $('#toggleBg').toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
        $('#toggleBg').toggle();
    });

    $(".closeAbout").click(function () {
        $('#toggleBg').hide();
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $('#toggleBg').hide();
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
});