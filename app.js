
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


