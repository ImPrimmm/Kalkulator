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
  if (wrapper.length === 0) {
    wrapper.push("1");
    screen.append("1")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "1";
      screen.append("1")
    } else {
      wrapper.push("1");
      screen.append("1")
    }
  }
});

two.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("2");
    screen.append("2")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "2";
      screen.append("2")
    } else {
      wrapper.push("2");
      screen.append("2")
    }
  }
});

three.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("3");
    screen.append("3")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "3";
      screen.append("3")
    } else {
      wrapper.push("3");
      screen.append("3")
    }
  }
});

four.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("4");
    screen.append("4")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "4";
      screen.append("4")
    } else {
      wrapper.push("4");
      screen.append("4")
    }
  }
});

five.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("5");
    screen.append("5")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "5";
      screen.append("5")
    } else {
      wrapper.push("5");
      screen.append("5")
    }
  }
});

six.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("6");
    screen.append("6")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "6";
      screen.append("6")
    } else {
      wrapper.push("6");
      screen.append("6")
    }
  }
});

seven.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("7");
    screen.append("7")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "7";
      screen.append("7")
    } else {
      wrapper.push("7");
      screen.append("7")
    }
  }
});

eight.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("8");
    screen.append("8")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "8";
      screen.append("8")
    } else {
      wrapper.push("8");
      screen.append("8")
    }
  }
});

nine.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("9");
    screen.append("9")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "9";
      screen.append("9")
    } else {
      wrapper.push("9");
      screen.append("9")
    }
  }
});

zero.addEventListener("click", () => {
  if (wrapper.length === 0) {
    wrapper.push("0");
    screen.append("0")
  } else {
    const last = wrapper[wrapper.length - 1];
    if (typeof last === "string") {
      wrapper[wrapper.length - 1] = last + "0";
      screen.append("0")
    } else {
      wrapper.push("0");
      screen.append("0")
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
      wrapper.push(operator.times);
      screen.append(operator.times.value);
    }
  }
});
