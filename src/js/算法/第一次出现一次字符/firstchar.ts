const str = "ssssssssssssssssssj";

function firstChar(str) {
  let firstChar = "";
  const curStrArr = str.split("");
  console.log("curStrArr->", curStrArr);
  curStrArr.forEach((s, index) => {
    if (!firstChar) {
      const lastStr = curStrArr.slice(index + 1, curStrArr.length);
      console.log("lastStr->", lastStr);
      if (!lastStr.includes(s)) {
        console.log("lastChar------------value>", s);
        firstChar = s;
        return;
      }
    }
  });

  return firstChar;
}

console.log("value->", firstChar(str));
