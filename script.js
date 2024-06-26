var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
});

$(document).ready(function(){
    // $(".counter").counterUp({
    //     delay:10,
    //     time:1100
    // });
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

const handleErrorMessage = (currentEl)=>{
    newEl = document.createElement('div')
    newEl.classList.add("form-validation-message")
    newEl.innerHTML = "This field is required"
    currentEl.parentNode.append(newEl)
}

// student carousel
const NextStudent = ()=>{
    var allImages = document.querySelectorAll(".student-image")
    var nextId = 0
    for(var i=0;i<allImages.length;i++){
        var isShow = false
        allImages[i].classList.forEach((cls)=>{
            if(cls==="show"){
                isShow = true
            }
        })
        if(isShow){
            if(i === allImages.length-1){
                nextId = parseInt(allImages[i].id)
            }
            else{
                allImages[i].classList.remove("show")
            nextId =  parseInt(allImages[i].id) + 1
            }    
        }  
    }
    document.getElementById(nextId).classList.add("show")
}

const PrevStudent = ()=>{
    var allImages = document.querySelectorAll(".student-image")
    var prevId = 0
    for(var i=0;i<allImages.length;i++){
        var isShow = false
        allImages[i].classList.forEach((cls)=>{
            if(cls==="show"){
                isShow = true
            }
        })
        if(isShow){
            if(i === 0){
                prevId = parseInt(allImages[i].id)
            }
            else{
                allImages[i].classList.remove("show")
                prevId =  parseInt(allImages[i].id) - 1
            }    
        }  
    }
    document.getElementById(prevId).classList.add("show")
}

$("#myForm").submit((e)=>{
    e.preventDefault()
    var parentName = document.getElementById("parentName")
    var studentName = document.getElementById("studentName")
    var studyingIn = document.getElementById("studyingIn")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")
    var slot = document.getElementById("slot")
    var course = document.getElementById("course")
    if(parentName.value === ""){
        handleErrorMessage(parentName) 
    }
    else if(studentName.value === ""){
        handleErrorMessage(studentName) 
    }
    else if(studyingIn.value === ""){
        handleErrorMessage(studyingIn) 
    }
    else if(phone.value === ""){
        handleErrorMessage(phone) 
    }
    else if(email.value === ""){
        handleErrorMessage(email) 
    }
    else if(slot.value === ""){
        handleErrorMessage(slot) 
    }
    else if(course.value === ""){
        handleErrorMessage(course) 
    }
    else{
        document.getElementById("preloader").style.display = "block"
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyXvVoSDrm5DkXSnNWzMQDfHlBrC_BprdxN_ZrCrYXco61RyLjyWmXjL61S3ueQ8ZaA/exec",
            data:$("#myForm").serialize(),
            method:"post",
            success:function (response){
                // alert("Form submitted successfully")
                console.log("Form submitted successfully")
                document.getElementById("preloader").style.display = "none"
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    }
    
    
})

//popup
document.getElementById("popUpCloseButton").addEventListener('click',()=>{
    document.querySelector(".pop-up").classList.add('hide')
})