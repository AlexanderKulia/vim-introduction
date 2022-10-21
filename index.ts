// TASK: Rename num argument to somenum
// OPTION 1: navigate with hjkl, dw i somenum ctrl+c
const addOne = (num: number): number => {
  return num + 1;
};

// OPTION 2: wwww dw somenum ctrl+c
const addOne = (num: number): number => {
  return num + 1;
};

// OPTION 3: 4w dw somenum ctrl+c
// OPTION 3.1: 4w cw somenum cltr+c
// c (change) - deletes and enters insert mode
const addOne = (num: number): number => {
  return num + 1;
};

// TASK: Replace {} with []
// OPTION 1: using w
// OPTION 2: f{ xx i []
const someVeryLongString =
  "This is a very long string has has a {} in it for some reason";

// TASK: Rename element to newelement
// OPTION 1: 4w ciw newelement
// OPTION 2: ci" anywhere on the line
const someArray = ["element"];

// TASK: Delete prop_5, prop_6 and prop_7
// OPTION 1: V 2j d
// OPTION 2: dd dd dd
// OPTION 3: 3dd
const mapObject = (obj) => {
  return {
    prop_1: obj.prop1,
    prop_2: obj.prop2,
    prop_3: obj.prop3,
    prop_4: obj.prop4,
    prop_5: obj.prop5,
    prop_6: obj.prop6,
    prop_7: obj.prop7,
    prop_8: obj.prop8,
    prop_9: obj.prop9,
    prop_10: obj.prop10,
    prop_11: obj.prop11,
    prop_12: obj.prop12,
    prop_13: obj.prop13,
  };
};

// TASK: Remove contents of the function
// OPTION 1: S to delete line and enter insert mode
// OPTION 2: di{
function badFunction() {
  // some bad code
}

// TASK: Extract object into a variable called data
// OPTION 1: jump to line, f{ v% d
// OPTION 2: anywhere inside the object, va{ d
console.log({
  a: 1,
  b: 2,
  c: 3,
});

// TASK: Replace object to { d: 4, e: 5, f: 6 }
// OPTION 1: Y new object, 2j
// OPTION 2: vi{ d O
console.log({
  a: 1,
  b: 2,
  c: 3,
});

// TASK: Put items into array as strings
// OPTION 1: V 4j :s/(\w.*)/data[0] = "\1"
const data: string[] = [];
// one
// two
// three
// four
// five
