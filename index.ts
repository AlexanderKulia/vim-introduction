// TASK: Rename num argument to somenum
// OPTION 1: navigate with hjkl, dw i somenum ctrl+c
const addOne = (num: number): number => {
  return num + 1;
};

// OPTION 2: wwww dw i somenum ctrl+c
const addOne = (num: number): number => {
  return num + 1;
};

// OPTION 3: f( l cw somenum ctrl+c
// c (change) - deletes and enters insert mode
// f (forward) - jump to character (inclusive)
// t (to) - jump to character (non-inclusive)
const addOne = (num: number): number => {
  return num + 1;
};

// TASK: Replace {} with []
// OPTION 1: using w
// OPTION 2: f{ xx i []
// x (cut) - delete one character
const someVeryLongString = "This is a very long string has a {} in it for some reason";

// TASK: Rename element to newelement
// OPTION 1: 4w ciw newelement
// OPTION 2: ci" anywhere on the line
const someArray = ["element"];

// TASK: Delete prop_5, prop_6 and prop_7
// OPTION 1: V 2j d
// OPTION 2: dd dd dd
// OPTION 3: 3dd
// d saves deleted text to a register
// TASK: Extract prop_5, prop_6 and prop_7 into a new object called obj
// o - adds new line below
// O - adds new line above
const mapObject = (obj) => {
  return {
    prop_1: obj.prop1,
    prop_2: obj.prop2,
    prop_3: obj.prop3,
    prop_4: obj.prop4,
    prop_5: obj.prop5,
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
  const n = 1000;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          for (let m = 0; m < n; m++) {
            count += 1;
          }
        }
      }
    }
  }
}

// TASK: Remove all arguments except for a and b
// OPTION 1: f( w dt)
// OPTION 2: D to delete everything on the line after the cursor
function doSomething(a: number = 1, b: number = 1, c: number = 1, d: number = 1, e: number = 1) {
  return a + b + c + d + e;
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
// OPTION 1: vi{ d O
console.log({
  a: 1,
  b: 2,
  c: 3,
});

// TASK: Reuse inline type of blaz in new_fn for bar
// OPTION 1: f{ ya{
function foo(blaz: { oddly: "long" | "type"; but: "hey" | "this" | "is" | number }) {
  console.log("hi");
}

function new_fn(bar: number) {
  console.log("hi");
}

// TASK: Put items into array as strings
// OPTION 1: V 4j :s/(\w.*)/data[0] = "\1"
const data: string[] = [];
// one
// two
// three
// four
// five
