var gameHeight;
var gameWidth;
var viewportHeight = $(window).height();
var viewportWidth = $(window).width();

$(window).load(function () {
    gameHeight = $("#animation_container").height();
    gameWidth = $("#animation_container").width();
})

function resize() {
    var scale = Math.min(viewportWidth / gameWidth, viewportHeight / gameHeight) + 0.05;
    console.log(parseFloat(scale.toFixed(2)));
    $("#animation_container").css("transform", "scale(" + scale + ")");
    console.log(gameHeight);
    console.log(gameWidth);
    console.log(viewportWidth);
    console.log(viewportHeight);
}


