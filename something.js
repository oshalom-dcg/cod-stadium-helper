let code2 = "N2CNNH49";
let code = "0HCNNH49";

function finalCode(first, second) {
  const isKey = (key) => {
    return key === "H" || key === "N" || key === "C";
  };
  const mapping = {};
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (isKey(first[i]) !== isKey(second[i])) {
        if (isKey(first[i])) {
          mapping[first[i]] = second[i];
        }
        if (isKey(second[i])) {
          mapping[second[i]] = first[i];
        }
      }
    }
    return first
      .split("")
      .map((char) => {
        if (mapping[char]) {
          return mapping[char];
        } else {
          return char;
        }
      })
      .join("");
  } else {
    return null;
  }
}

let res = finalCode(code, code2);
console.log(res);
let res2 = finalCode(code2, code);
console.log(res2);
