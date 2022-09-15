let result = "";
let newResult = "";

const resultTitle = document.querySelector(".calculator__result");
const buttons = document.querySelectorAll("button");

const getTitle = (title, color) => {
  resultTitle.textContent = title;
  resultTitle.style.color = color;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    const targetText = event.target.textContent;

    if (targetText !== "C" && targetText !== "=") {
      result += targetText;

      getTitle(result, "black");
    }

    if (targetText === "C") {
      result = "";

      getTitle("0", "#757575");
    } else if (targetText === "=") {
      newResult = eval(result);

      getTitle(newResult, "black");
    }
  });
}
