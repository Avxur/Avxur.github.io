const textToRepeat = "« AVXUR » ";
const card = document.querySelector(".card"),
      letters = card.querySelector(".card-letters");

const handleOnMove = e => {
  const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);

  // Repeat "« AVXUR »" infinitely
  letters.innerText = textToRepeat.repeat(1500);    
}

card.addEventListener("mousemove", e => handleOnMove(e));
card.addEventListener("touchmove", e => handleOnMove(e.touches[0]));
