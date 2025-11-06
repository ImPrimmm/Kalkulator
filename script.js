const screen = document.getElementById("screen");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const removeOne = document.getElementById("removeOne");
const wrapper = [];
const wrapperConvert = [];
const removeLastString = [];
const operator = {
  plus: {
    value: document.getElementById("plus").value,
    type: "operator",
  },
  minus: {
    value: document.getElementById("minus").value,
    type: "operator",
  },
  times: {
    value: document.getElementById("times").value,
    type: "operator",
  },
  divide: {
    value: document.getElementById("divide").value,
    type: "operator",
  },
};

function addNumber(num) {
  if (wrapper.length === 0) {
    wrapper.push(num);
    screen.append(num);
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push(num);
        screen.innerHTML = "";
        screen.append(num);
      } else {
        wrapper[wrapper.length - 1] = last + num;
        screen.append(num);
      }
    } else {
      wrapper.push(num);
      screen.append(num);
    }
  }
}

one.addEventListener("click", () => {
  addNumber("1");
});

two.addEventListener("click", () => {
  addNumber("2");
});

three.addEventListener("click", () => {
  addNumber("3");
});

four.addEventListener("click", () => {
  addNumber("4");
});

five.addEventListener("click", () => {
  addNumber("5");
});

six.addEventListener("click", () => {
  addNumber("6");
});

seven.addEventListener("click", () => {
  addNumber("7");
});

eight.addEventListener("click", () => {
  addNumber("8");
});

nine.addEventListener("click", () => {
  addNumber("9");
});

zero.addEventListener("click", () => {
  addNumber("0");
});

function addOperator(op) {
  if (wrapper.length !== 0) {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      switch (op) {
        case "+":
          wrapper.push(operator.plus);
          screen.append(operator.plus.value);
          break;
        case "-":
          wrapper.push(operator.minus);
          screen.append(operator.minus.value);
          break;
        case "*":
          wrapper.push(operator.times);
          screen.append("x");
          break;
        case "÷":
          wrapper.push(operator.divide);
          screen.append("÷");
          break;
      }
    }
  }
}

plus.addEventListener("click", () => {
  addOperator("+");
});

minus.addEventListener("click", () => {
  addOperator("-");
});

times.addEventListener("click", () => {
  addOperator("*");
});

divide.addEventListener("click", () => {
  addOperator("÷");
});

equal.addEventListener("click", () => {
  wrapperConvert.splice(0, wrapperConvert.length);

  for (let i = 0; i < wrapper.length; i++) {
    if (typeof wrapper[i] === "string") {
      wrapperConvert.push(parseInt(wrapper[i]));
    } else {
      wrapperConvert.push(wrapper[i].value);
    }
  }

  for (let n = 0; n < wrapperConvert.length; n++) {
    if (typeof wrapperConvert[n] === "string") {
      if (wrapperConvert[n] === "*") {
        wrapperConvert[n - 1] = wrapperConvert[n - 1] * wrapperConvert[n + 1];
        wrapperConvert.splice(n, 2);
        screen.innerHTML = "";
        screen.append(wrapperConvert[0]);
        n = n - 1;
      } else if (wrapperConvert[n] === "/") {
        wrapperConvert[n - 1] = wrapperConvert[n - 1] / wrapperConvert[n + 1];
        wrapperConvert.splice(n, 2);
        screen.innerHTML = "";
        screen.append(wrapperConvert[0]);
        n = n - 1;
      }
    }
  }

  for (let j = 0; j < wrapperConvert.length; j++) {
    if (typeof wrapperConvert[j] === "string") {
      if (wrapperConvert[j] === "+") {
        wrapperConvert[j - 1] = wrapperConvert[j - 1] + wrapperConvert[j + 1];
        wrapperConvert.splice(j, 2);
        wrapper.splice(0, wrapper.length);
        wrapper.push(String(wrapperConvert[0]));
        screen.innerHTML = "";
        screen.append(wrapperConvert[0]);
        j = j - 1;
      } else if (wrapperConvert[j] === "-") {
        wrapperConvert[j - 1] = wrapperConvert[j - 1] - wrapperConvert[j + 1];
        wrapperConvert.splice(j, 2);
        wrapper.splice(0, wrapper.length);
        wrapper.push(String(wrapperConvert[0]));
        screen.innerHTML = "";
        screen.append(wrapperConvert[0]);
        j = j - 1;
      } else {
        wrapper.splice(0, wrapper.length);
        screen.innerHTML = "";
        screen.append(wrapperConvert[0]);
      }
    }
  }
});

removeOne.addEventListener("click", () => {
  const last = wrapper[wrapper.length - 1];

  if (typeof last === "string") {
    for (let i = 0; i < last.length; i++) {
      removeLastString.push(last[i]);
    }

    removeLastString.pop();
    wrapper[wrapper.length - 1] = "";

    for (let n = 0; n < removeLastString.length; n++) {
      wrapper[wrapper.length - 1] =
        wrapper[wrapper.length - 1] + removeLastString[n];
    }

    removeLastString.splice(0, removeLastString.length);

    screen.innerHTML = "";

    for (let j = 0; j < wrapper.length; j++) {
      if (typeof wrapper[j] === "string") {
        screen.append(wrapper[j]);
      } else {
        screen.append(wrapper[j].value);
      }
    }

    if (wrapper[wrapper.length - 1] === "") {
      wrapper.pop();
    }
  } else {
    wrapper.splice(wrapper.length - 1, 1);

    screen.innerHTML = "";

    for (let i = 0; i < wrapper.length; i++) {
      if (typeof wrapper[i] === "string") {
        screen.append(wrapper[i]);
      } else {
        screen.append(wrapper[i].value);
      }
    }
  }
});
