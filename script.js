var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
});

$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time:1100
    });
    $(".menu-icon").click(function(){
        $(".navlist").toggleClass("navshow");
    });
    $(".navlink").click(function(){
        $(".navlist").removeClass("navshow")
    })
});

window.addEventListener("scroll",testimonialAnim);

function testimonialAnim(){
    var cl=[".testimonial-card-one",".testimonial-card-two",".testimonial-card-three"];
    for(var i=0;i<3;i++){
        var content=document.querySelector(cl[i]);
        var contentPosition=content.getBoundingClientRect().top;
        var screenPosition=window.innerHeight;
        if(contentPosition<screenPosition){
            content.classList.add("testimonial-card-anim");
        }
        else{
            content.classList.remove("testimonial-card-anim");
        }
    }
}

$("#myForm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxdiHUNQIg9q9Jq9PCV2bdekBKP2Yt-dAQa_8KBFOvC3PgyEsqXvq-M6o_2NJ-zPsZfUg/exec",
        data:$("#myForm").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})