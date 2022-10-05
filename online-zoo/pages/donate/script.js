const arrOfFixAmount = [5000, 2000, 1000, 500, 250, 100, 50, 25];

const progressBar = document.querySelector(".radio-buttons__wrapper");

const anotherAmount = document.querySelector("#another_amount");

progressBar.addEventListener("click", (event) => {
  if (event.target.id) {
    const id = event.target.id;
    anotherAmount.value = +id.slice(7);
  }
});

anotherAmount.addEventListener("keyup", (event) => {
  const anotherAmount = event.target.value;
  if (arrOfFixAmount.includes(+anotherAmount)) {
    document.querySelector(`#dollar_${anotherAmount}`).checked = true;
  }
});
