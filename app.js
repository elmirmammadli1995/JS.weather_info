"use strict";
$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `api.openweathermap.org/data/2.5/forecast?q=${$("myweather").val()}&appid=529397dd240ccade9afb588a4e1185e3&units=metric`;
            async function myweather() {
                let responce = await fetch(url);
                let data = await responce.json();
                $("#city").html(data.name);
                $("#temp").html(data.main.temp);
                $("#feels").html(data.main.feels_like);
                $("#myweather").val("");
                console.log(data);
            }
            myweather();
        }
    })


    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `api.openweathermap.org/data/2.5/forecast?q=${$("myweather").val()}&appid=529397dd240ccade9afb588a4e1185e3&units=metric`;
        async function myweather() {
            let responce = await fetch(url);
            let data = await responce.json();
            $("#city").html(data.name);
            $("#temp").html(data.main.temp);
            $("#feels").html(data.main.feels_like);
            $("#myweather").val("");
            console.log(data);
        }
        myweather();
    })

});