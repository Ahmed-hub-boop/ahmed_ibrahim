let section_2 = document .querySelector(".main-2");
let section_1 = document .querySelector(".main-1");
let section_3 = document .querySelector(".main-3");
let section_4 = document .querySelector(".main-4");
let divs = document.querySelectorAll(" .bar-2 div");
window.onscroll = function (){
    if(window.scrollY >= section_2.offsetTop - 100){
        //console.log("Reached")
        divs.forEach((div) => {
            div.style.width = div.dataset.width
            document.getElementById("arrup").style.opacity="1";
            document.getElementById("arrup").style.zIndex="999";
        })
    }
    if(window.scrollY <= section_1.offsetTop){
        document.getElementById("arrup").style.opacity="0"
        document.getElementById("arrup").style.zIndex="-50";
    }
    if(window.scrollY >= section_4.offsetTop - 100){
        document.querySelector(".mess-1").style.left="0"
        document.querySelector(`form`).style.top="0"
    }   
}


        function sendEmail(){
                Email.send({
                    SecureToken : "97327d16-c824-462c-bf9a-2b0e4779e27c",
                    To : 'mido.coach.ah@gmail.com',
                    From : "mido.coach.ah@gmail.com",
                    Subject : "An Order from Someone",
                    Body : "Name: "+ document.form1.txt1.value
                    + "<br> Email: " + document.form1.txt2.value
                    + "<br> Phone Number: " + document.form1.txt3.value
                    + "<br> Order: " + document.form1.txt4.value
                }).then(
                swal("Order Sent Successfully", "I will contact you as soon as possible", "success")
                );
            }



    function golight(){
        var a = false
        if(a){
            document.getElementById('sty').setAttribute("href","css/dark-style.css");
            a = true
        }
        else{
            document.getElementById('sty').setAttribute("href","css/light-style.css");
            a = false
            document.querySelector(".h-3").innerHTML=`<a onclick="godark()"><i class="fa-solid fa-moon"></i></a>`
        }
    }
    function godark(){
        var b = true
        if(b){
            document.getElementById('sty').setAttribute("href","css/dark-style.css");
            b = false
            document.querySelector(".h-3").innerHTML=`<a onclick="golight()"><i class="fa-solid fa-sun"></i></a>`
        }
        else{
            document.getElementById('sty').setAttribute("href","css/light-style.css");
            b = true

        }
    }

    //<i class="fa-solid fa-moon"></i>