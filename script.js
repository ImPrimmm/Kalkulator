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

one.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("1");
    screen.append("1");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("1");
        screen.innerHTML = "";
        screen.append("1");
      } else {
        wrapper[wrapper.length - 1] = last + "1";
        screen.append("1");
      }
    } else {
      wrapper.push("1");
      screen.append("1");
    }
  }
});

two.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("2");
    screen.append("2");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("2");
        screen.innerHTML = "";
        screen.append("2");
      } else {
        wrapper[wrapper.length - 1] = last + "2";
        screen.append("2");
      }
    } else {
      wrapper.push("2");
      screen.append("2");
    }
  }
});

three.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("3");
    screen.append("3");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("3");
        screen.innerHTML = "";
        screen.append("3");
      } else {
        wrapper[wrapper.length - 1] = last + "3";
        screen.append("3");
      }
    } else {
      wrapper.push("3");
      screen.append("3");
    }
  }
});

four.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("4");
    screen.append("4");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("4");
        screen.innerHTML = "";
        screen.append("4");
      } else {
        wrapper[wrapper.length - 1] = last + "4";
        screen.append("4");
      }
    } else {
      wrapper.push("4");
      screen.append("4");
    }
  }
});

five.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("5");
    screen.append("5");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("5");
        screen.innerHTML = "";
        screen.append("5");
      } else {
        wrapper[wrapper.length - 1] = last + "5";
        screen.append("5");
      }
    } else {
      wrapper.push("5");
      screen.append("5");
    }
  }
});

six.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("6");
    screen.append("6");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("6");
        screen.innerHTML = "";
        screen.append("6");
      } else {
        wrapper[wrapper.length - 1] = last + "6";
        screen.append("6");
      }
    } else {
      wrapper.push("6");
      screen.append("6");
    }
  }
});

seven.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("7");
    screen.append("7");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("7");
        screen.innerHTML = "";
        screen.append("7");
      } else {
        wrapper[wrapper.length - 1] = last + "7";
        screen.append("7");
      }
    } else {
      wrapper.push("7");
      screen.append("7");
    }
  }
});

eight.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("8");
    screen.append("8");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("8");
        screen.innerHTML = "";
        screen.append("8");
      } else {
        wrapper[wrapper.length - 1] = last + "8";
        screen.append("8");
      }
    } else {
      wrapper.push("8");
      screen.append("8");
    }
  }
});

nine.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("9");
    screen.append("9");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      if (last[0] === "0") {
        wrapper.splice(last, 1);
        wrapper.push("9");
        screen.innerHTML = "";
        screen.append("9");
      } else {
        wrapper[wrapper.length - 1] = last + "9";
        screen.append("9");
      }
    } else {
      wrapper.push("9");
      screen.append("9");
    }
  }
});

zero.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("0");
    screen.append("0");
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string" && last[0] !== "0") {
      wrapper[wrapper.length - 1] = last + "0";
      screen.append("0");
    } else if (typeof last !== "string" && last[0] !== "0") {
      wrapper.push("0");
      screen.append("0");
    }
  }
});

plus.addEventListener("click", () => {
  if (wrapper.length !== 0) {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper.push(operator.plus);
      screen.append(operator.plus.value);
    }
  }
});

minus.addEventListener("click", () => {
  if (wrapper.length !== 0) {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper.push(operator.minus);
      screen.append(operator.minus.value);
    }
  }
});

times.addEventListener("click", () => {
  if (wrapper.length !== 0) {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper.push(operator.times);
      screen.append(operator.times.value);
    }
  }
});

divide.addEventListener("click", () => {
  if (wrapper.length !== 0) {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper.push(operator.divide);
      screen.append("÷");
    }
  }
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
      if (wrapperConvert[n] === "x") {
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

    if (typeof removeLastString[0] !== "undefined") {
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
        wrapper.pop()
      }
    } else {
      removeLastString.splice(0, removeLastString.length);
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
