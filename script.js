$(document).ready(function () {
    $("#cardname").text("");
    $("#amt").text("");
    $("#redcard").hover(function () {
        $(this).animate({
            "margin-left": 30
        }, 200);
        $("#cardname").text("ICICI Credit");
        $("#amt").text("$45.00");
    }, function () {
        $(this).animate({
            "margin-left": 0
        }, 200);
        $("#cardname").text("");
        $("#amt").text("");
    });
    $("#bluecard").hover(function () {
        $(this).animate({
            "margin-left": 30
        }, 200);
        $("#cardname").text("GPay");
        $("#amt").text("$109.00");
    }, function () {
        $(this).animate({
            "margin-left": 0
        }, 200);
        $("#cardname").text("");
        $("#amt").text("");
    });
    $("#yellowcard").hover(function () {
        $(this).animate({
            "margin-left": 30
        }, 200);
        $("#cardname").text("PayTm");
        $("#amt").text("$256.00");
    }, function () {
        $(this).animate({
            "margin-left": 0
        }, 200);
        $("#cardname").text("");
        $("#amt").text("");
    });
});