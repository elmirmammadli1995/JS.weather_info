"use strict";
$(document).ready(function () {


    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&appid=050215f83eaa3500e1575b3890c5a60e&units=metric`;
            async function myWeather() {
                let responce = await fetch(url);
                let data = await responce.json();
                $("#city").html(data.name);
                $("#temp").html(data.main.temp);
                $("#feels").html(data.main.feels_like);
                $("#myweather").val("");
                console.log(data);
            };
            myWeather();
        };

    });

    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&appid=050215f83eaa3500e1575b3890c5a60e&units=metric`;
        async function myWeather() {
            let responce = await fetch(url);
            let data = await responce.json();
            $("#city").html(data.name);
            $("#temp").html(data.main.temp);
            $("#feels").html(data.main.feels_like);
            $("#myweather").val("");
            console.log(data);
        };
        myWeather();
    });


});