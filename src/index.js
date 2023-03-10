const val1 = "test";
const val2 = "sample";
const val3 = "foo";
const val4 = "bar";
const val5 = "baz";

function catString(...args) {
  let resultString = "";
  for (const item of args) {
    // is last item or not
    if (args.indexOf(item) === args.length - 1) {
      resultString += item;
    } else {
      resultString += item + "-";
    }
  }
  return resultString;
}

console.log({ result: catString(val1, val2, val3, val4, val5) });
