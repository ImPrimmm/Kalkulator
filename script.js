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
let wrapper = [];
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
  times: {
    value: document.getElementById("times").value,
    type: "operator",
  },
  divide: {
    value: document.getElementById("divide").value,
    type: "operator",
  },
  removeOne: {
    value: document.getElementById("removeOne").value,
    type: "specialOperator",
  },
  equal: {
    value: document.getElementById("equal").value,
    type: "specialOperator",
  },
};

one.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("1");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("1");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "1";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "1";
        }
      }
    }
  }
});

two.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("2");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("2");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "2";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "2";
        }
      }
    }
  }
});

three.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("3");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("3");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "3";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "3";
        }
      }
    }
  }
});

four.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("4");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("4");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "4";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "4";
        }
      }
    }
  }
});

five.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("5");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("5");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "5";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "5";
        }
      }
    }
  }
});

six.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("6");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("6");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "6";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "6";
        }
      }
    }
  }
});

seven.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("7");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("7");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "7";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "7";
        }
      }
    }
  }
});

eight.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("8");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("8");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "8";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "8";
        }
      }
    }
  }
});

nine.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("9");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("9");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "9";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "9";
        }
      }
    }
  }
});

zero.addEventListener("click", () => {
  if (wrapper[0] === undefined) {
    wrapper.push("0");
  } else {
    for (let i = 0; i < wrapper.length; i++) {
      if (wrapper[i].type === "operator") {
        wrapper.push("0");
      } else {
        if (i === 0) {
          wrapper[i] = wrapper[i] + "0";
        } else {
          wrapper[i - 1] = wrapper[i - 1] + "0";
        }
      }
    }
  }
});

plus.addEventListener("click", () => {
  let n = 1;
  for (let i = 0; i < n; i++) {
    screen.append("+");
    wrapper.push("+");
  }
});

minus.addEventListener("click", () => {
  let n = 1;
  for (let i = 0; i < n; i++) {
    screen.append("-");
    wrapper.push("-");
  }
});

times.addEventListener("click", () => {
  let n = 1;
  for (let i = 0; i < n; i++) {
    screen.append("x");
    wrapper.push("x");
  }
});

divide.addEventListener("click", () => {
  let n = 1;
  for (let i = 0; i < n; i++) {
    screen.append("/");
    wrapper.push("/");
  }
});
