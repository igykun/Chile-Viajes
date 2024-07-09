const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){

    $(".icono-desc-1").click(function(){
        $(".text-descripcion-1").toggle();
    });

    $(".icono-desc-2").click(function(){
        $(".text-descripcion-2").toggle();
    });

    $(".icono-desc-3").click(function(){
        $(".text-descripcion-3").toggle();
    });

    let mybutton = document.getElementById("bktop");

    window.onscroll = function(){scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }



});