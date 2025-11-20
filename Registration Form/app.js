
let input = document.querySelector(".input");
        let Button = document.querySelector("#btn");

        Button.addEventListener("click", function () {
          
            if (input.value.trim() === "") {
                alert("Please enter something before submitting!");
                return; 
            }

            Button.classList.toggle("green-background"); //  background color to green
            alert("You are registered"); 
            Button.innerHTML = "Submitted"; 
            Button.disabled = true; // Disable button after submission
        });


var tl = gsap.timeline()


tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("p",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("input",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("label",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("button",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})


