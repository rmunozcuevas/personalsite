let myElement = document.querySelector("#change");


function changeText(){
    setInterval(() => {
        if (myElement.innerText === "FLASH!!!!") {
          myElement.innerText = "JANE SERVICE";
        } else {
          myElement.innerText = "FLASH!!!!";
        }
      }, 20000); 
}

changeText();











