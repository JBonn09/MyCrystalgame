var target = "";
var wins = 0;
var losses = 0;
var score = 0;
var images = ["./assets/images/BlueCrystal.png", "./assets/images/GreenCrystal.png", "./assets/images/WhitCrystal.png", "./assets/images/YellowCrystal.png"];

function randomTarget () {
    target = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals () {
    for(var i = 0; i < images.length; i++) {
        var images = $("<img>");
        images.addClass("images");
        images.attr("images");
        images.attr("src, images[i]");
        images.attr("value", (Math.floor(Math.random() * 12)+ 1));
        images.attr("height", "100");
        $(".images").append(images);
        
    }
}

function resetHTML () {
    $("target").html(target);
    $("win-losses").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" )
}

function totalReset () {
    randomTarget ();
    counter = 0;
    resetHTML ();
    resetImages ();

}

randomTarget ();
resetHTML ();
resetCrystals ();

function crystalClick () {
    counter +=parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == target) {
        wins++;
        totalReset();

    }
    else if (counter > target) {
        losses++;
        totalReset();

    };
};

$(document).on("click", "crystal-images", imagesClick);
