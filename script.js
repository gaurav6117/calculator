        var flag = false; 
      function clearHistory() {
        console.log("clear called");
        $("#ulist").empty();
      }
      let screen = document.getElementById("screen");
      buttons = document.querySelectorAll("button");
      let screenValue = "";
      for (item of buttons) {
        item.addEventListener("click", (e) => {
          buttonText = e.target.innerText;
          console.log("Button text is ", buttonText);

          if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
          } 
          else if (buttonText == "=") {
            if (eval(screenValue)) {
              let elem = document.createElement("li");
              elem.innerHTML = `${screen.value} => ${eval(screenValue)}`;
              document.getElementById("ulist").appendChild(elem);
            }
            screen.value = eval(screenValue);
          } 
          else {
            screenValue += buttonText;
            screen.value = screenValue;
          }
        });
      }
   
