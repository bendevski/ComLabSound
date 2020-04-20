let entered = [1, 1, 1];
let x = -120;
let inter;
let lockers = ["media/Locked.mp3", "media/Locked-2.mp3", "media/Locked-3.mp3"];

function onload() {
    $(".open").fadeOut(0);
    $("#done").fadeOut(0);
    $("#home").fadeIn(0);
    refresh()
}

function enter(close, open, after, audio, duration) {
    close.fadeOut(0);
    open.show(0);
    play(audio);
    setTimeout(() => $("img").fadeOut(0), 650);
    if (after) {

        setTimeout(() => after.fadeIn(200), 650);
    }
    if (duration !== 65500) {
        setTimeout(() => refresh(), duration);
    } else {
        setTimeout(() => inter = setInterval(() => {
            fadeToBlack()
        }, 20), duration - 30000);
        return;
    }


}

function what1() {
    entered[0] = 1;
    if (entered[0]) {
        locked();
        return;
    }
    entered[0] = 1;
    enter($("#door1c"), $("#door1o"), $("#door1a"), "media/Door 1.mp3", 75500);
}

function what2() {
    entered[1] = 1;
    if (entered[1]) {
        locked();
        return;
    }
    entered[1] = 1;
    enter($("#door2c"), $("#door2o"), $("#door2a"), "media/Door 2.mp3", 59500);
}

function what3() {
    if (entered[2]) {
        locked();
        return;
    }
    entered[2] = 1;
    enter($("#door3c"), $("#door3o"), null, "media/Door 3.mp3", 55500);
}

function what4() {
    enter($("#door4c"), $("#door4o"), $("#door4a"), "media/Door 4.mp3", 65500);
}

function play(file) {
    let why = new Audio(file);
    why.play();
}

function refresh() {
    $("img").fadeOut(0)
    if (entered[0] === entered[1] && entered[1] === entered[2] && entered[0] === 1) {
        $("#done").fadeIn(0);
        $("#door4c").fadeIn(0);
    } else $(".close").fadeIn(500);
    $("#home").fadeIn(0);
}

function fadeToBlack() {
    if (x > -10) {
        clearInterval(inter);
        return;
    }
    $("#end").css("top", (x + "%"));
    x += 0.1;
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function locked() {
    play(choose(lockers));
}