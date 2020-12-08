export const decoder = (code) => {
  let knownNumbers = code
    .split("")
    .map((num) => parseInt(num))
    .filter((num) => !Number.isNaN(num));
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (num) => !knownNumbers.includes(num)
  ); /*?*/

  let possiblies = [];

  for (let i = 0; i < numbers.length; i++) {
    let HKEY = numbers[i];
    let numbersWithoutHKey = numbers.filter((el) => el !== HKEY);
    for (let j = 0; j < numbersWithoutHKey.length; j++) {
      let NKEY = numbersWithoutHKey[j];
      let numbersWithoutNKey = numbersWithoutHKey.filter((el) => el !== NKEY);

      for (let k = 0; k < numbersWithoutNKey.length; k++) {
        let CKEY = numbersWithoutNKey[k];
        possiblies.push(
          code.replace(/H/g, HKEY).replace(/N/g, NKEY).replace(/C/g, CKEY)
        );
      }
    }
  }
  return [...new Set(possiblies)];
};

export const mergeCode = (first, second) => {
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
};
