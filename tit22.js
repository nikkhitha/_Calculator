let display=document.getElementById("display")
let removebtn=document.getElementById("removebtn")
function update(input){
    if (display.value === "Error") {
        display.value = input; 
    } else {
        display.value += input;
    }
    toggleRemoveBtn();
    adjustFontSize();
}

function equalto(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
    toggleRemoveBtn();
    adjustFontSize();
}

function clearvalue(){
    display.value="";
    toggleRemoveBtn();
}

function removedigit(){
    display.value=display.value.slice(0,-1);
    toggleRemoveBtn();
}

let bracket=true;
function brackets(){
    if(bracket){
        display.value+="(";
        bracket=false;
    }
    else{
        display.value+=")";
        bracket=true;
    }
    toggleRemoveBtn();
    adjustFontSize();
}

function toggleRemoveBtn() {
    if (display.value.length === 0) {
        removebtn.classList.add('disabled');
        removebtn.disabled = true;
    } else {
        removebtn.classList.remove('disabled');
        removebtn.disabled = false;
    }
}

function adjustFontSize() {
    const length = display.value.length;
    if (length > 20) {
        display.style.fontSize = "14px";
    } else if (length > 15) {
        display.style.fontSize = "18px";
    } else if (length > 10) {
        display.style.fontSize = "24px";
    } else {
        display.style.fontSize = "32px"; 
    }
}

toggleRemoveBtn();
adjustFontSize();