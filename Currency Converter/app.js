const base_url  = "https://latest.currency-api.pages.dev/v1/currencies/{base}.json";

const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")



for(let select of dropdowns){
    for (currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newoption.selected = "selected"
        }else  if(select.name === "to" && currcode === "INR"){
            newoption.selected = "selected"
        }
        select.append(newoption)
    }
    select.addEventListener("change",(evt) => {
        updateflag(evt.target)
    })
}

const updateexchangerate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;

    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }

    const from = fromcurr.value.toLowerCase();
    const to = tocurr.value.toLowerCase();
    const URL = `https://latest.currency-api.pages.dev/v1/currencies/${from}.json`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const rate = data[from][to];
        const finalamount = (amtval * rate).toFixed(2);
        msg.innerText = `${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate.";
        console.error("Fetch error:", error);
    }
};



const updateflag = (element) => {
   let currcode = element.value;
  let countrycode = countryList[currcode]
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
   let img = element.parentElement.querySelector("img")
   img.src = newsrc
    
}


btn.addEventListener("click", (evt) => { 
    evt.preventDefault();
    updateexchangerate();
    
});

window.addEventListener("load",() =>{
    updateexchangerate()
 })
 
