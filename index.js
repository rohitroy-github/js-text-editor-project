// maniJSFile

let optionsButtons = document.querySelectorAll(".option-button");

let advancedOptionButton = document.querySelectorAll("adv-option-button");

let fontName = document.getElementById("fontName");

let fontSizeRef = document.getElementById("fontSize");

let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");

let alignButton = document.querySelectorAll(".align");

let spacingButtons = document.getElementById(".format");

let scriptButtons = document.querySelectorAll(".script");

let fontList = [
  "Arial",
  "Veranda",
  "Times New Roman",
  "Garmond",
  "Courier New",
  "Cursive",
];

const initializer = () => {
  // functionCallsForHighlightingButtons

  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

//   createOptionsForfontName
fontList.map(value => { 
    let option = document.createElement("option"); 
    option.value = value; 
    option.innerHTML = value; 
    fontName.appendChild(option); 
})

// fontSizesOptions
let i; 
for(i = 1, i <= 7; i++)
{ 
    let option = document.createElement("option");
    option.value = i; 
    option.innerHTML = i; 
    fontSizeRef.appendChild(option); 
}

// defaultSize
fontSizeRef.value = 3; 
};

// mainLogic
// //codeToModifyText

const modifyText = (command, defaultUi, value) => { 
    document.execCommand(command, defaultUi,value); 
}; 

optionsButtons.forEach(button => { 
    button.addEventListener("click", () => { 
        modifyText(button.id, false, null); 
    })
});

// links
linkButton.addEventListener("click", () => { 
    let userLink = promt("Ebter a URL"); 

    if(/http/i.test(userLink)) { 
        modifyText(linkButton.id, false, userLink); 
    }
    else
    { 
        userLink = "http://"+userLink; 
        moodifyText(linkButton.id, false, userLink); 
    }
})

advancedOptionButton.forEach((button) => { 
    button.addEventListener("change", () => { 
        modifyText(button.id, false, button.value); 
    })
})

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        highlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};
 

const highlighterRemover = (className) => { 
    className.forEach((button) => { 
        button.classList.remove
    })
}
