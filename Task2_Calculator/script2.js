let Takeinput = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let buttonsArray = Array.from(buttons);
let valforInp = "";

buttonsArray.forEach(btn => {
    btn.addEventListener("click", e => {

        if (e.target.innerHTML == "DEL") {
            valforInp = valforInp.substring(0, valforInp.length - 1);
            Takeinput.value = valforInp;

        } else if (e.target.innerHTML == "AC") {
            valforInp = "";
            Takeinput.value = valforInp;
        } else if (e.target.innerHTML == "=") {
            valforInp = eval(valforInp);
            Takeinput.value = valforInp;
        }
        else {
            valforInp += e.target.innerHTML;
            Takeinput.value = valforInp;
        }
    })
})


