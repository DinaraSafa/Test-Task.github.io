const meaning = document.querySelectorAll(".cart__meaning");
const symbol = document.querySelectorAll(".cart__symbol");
const date = document.querySelectorAll(".cart__date");

const num = 0;

// console.log(currency.forEach((el) => console.log(el)));

symbol.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.textContent === "$") {
      symbol.forEach((c) => {
        c.textContent = "₽";
      });
      meaning.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) * 90);
      });
    } else if (el.textContent === "₽") {
      symbol.forEach((c) => {
        c.textContent = "€";
      });
      meaning.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) / 97);
      });
    } else if (el.textContent === "€") {
      if (date[0].textContent === "/Months") {
        symbol.forEach((c) => {
          c.textContent = "$";
        });
        meaning.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 1.07);
        });
      } else if (date[0].textContent === "/Day") {
        symbol.forEach((c) => {
          c.textContent = "$";
        });
        meaning.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent));
        });
      }
    }
  });
});

date.forEach((d) => {
  d.addEventListener("click", () => {
    if (d.textContent === "/Months") {
      date.forEach((m) => {
        m.textContent = "/Day";
      });
      meaning.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) / 30);
      });
    } else if (d.textContent === "/Day") {
      if (symbol[0].textContent === "€") {
        date.forEach((m) => {
          m.textContent = "/Months";
        });
        meaning.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 28);
        });
      } else {
        date.forEach((m) => {
          m.textContent = "/Months";
        });
        meaning.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 30);
        });
      }
    }
  });
});
