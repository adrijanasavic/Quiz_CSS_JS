export const questionPool = [
  // 5
  {
    question: `Is JavaScript the same as Java?`,
    answers: [
      `Yes`,
      `No`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 6
  {
    question: `Is HTML case sensitive language?`,
    answers: [
      `Yes`,
      `No`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 7
  {
    question: `Is JavaScript case sensitive language?`,
    answers: [
      `Yes`,
      `No`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 8
  {

    question: `How to insert JavaScript in Html document?`,
    answers: [
      `<script>`,
      `<src>`,
      `<code>`,
      `<js>`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 9
  {
    question: `How to properly select html and insert text in JavaScript? <div id="test"></div>`,
    answers: [
      `document.getElement("test").text = "Hello Wolrd";`,
      `document.getElementById("test") = "Hello Wolrd";`,
      `document.getElementById("test").innerHtml = "Hello Wolrd";`,
      `#test.innerHtml = "Hello World"`,
      `document.getElementsByTagName("div")[0].innerText = "Hello World";`
    ],
    correctAnswerIndex: [2, 4],
    answer: ""
  },
  // 10
  {
    question: `Which of the following tags is used to create a combo box (or drop-down box)`,
    answers: [
      `<list />`,
      `<select />`,
      `<input type="dropdown" />`,
      `<ul />`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 11
  {
    question: `Which of the following is the correct syntax to select all paragraph elements in a div element?`,
    answers: [
      `div p`,
      `p`,
      `div#p`,
      `div ~ p`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 12
  {
    question: `Which border edge doesn't get affected by this rule? border-radius: 2px 4px 2px;`,
    answers: [
      `top-left`,
      `top-right`,
      `bottom-left`,
      `bottom-right`,
      `They all get affected`,
      `None of them get affected`
    ],
    correctAnswerIndex: 4,
    answer: ""
  },
  // 13
  {
    question: `Which of the following CSS property is used to set the background image of an element?`,
    answers: [
      `background-attachment`,
      `background-image`,
      `background-color`,
      `None of the above`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 14
  {
    question: `In which order the margins are defined when using "margin" prop to define them?`,
    answers: [
      `top, right, bottom, left`,
      `left, top, right, bottom`,
      `top, bottom, left, right`,
      `left, right, top, bottom`,
      `top/bottom, right/left`,
      `right/left, top/bottom`,
      `top, right/left, bottom`,
      `right, top/bottom, left`
    ],
    correctAnswerIndex: [0, 4, 6],
    answer: ""
  },
  //15
  {
    question: `In which order do these properties appear, starting from the content and moving "outside"?`,
    answers: [
      `margin, padding, border`,
      `padding, margin, border`,
      `padding, border, margin`,
      `margin, border, padding`,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  //16
  {
    question: `Which color will the background of the div be? 
    <style>
            #id {
                background: green !important;
            }
            
            .class {
                background: blue;
            }
    </style>

    <div id="id" class="class" style="background: red;">JS</div>`,
    answers: [
      `green`,
      `blue`,
      `red`,
      `transparent`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 17
  {
    question: `How many rows of children will we see?
     <style>
            #parent {
                display: flex;
                width: 100px;
            }
            
            .child {
                width: 40px;
                height: 20px;
            }
        </style>

        <div id="parent">
            <div class="child"></div>
            <div class="child"></div>
            <div class="child"></div>
        </div>`,
    answers: [
      `0`,
      `1`,
      `2`,
      `3`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 18
  {
    question: `What will be the height and width of the ".cell" element with "First" text? 
     <style>
      .flex {
         display: flex;
         height: 100px;
         width: 300px;
         align-items: centers
      }
      .cell {
         border 1px solid gray;
         width: 50px;
         min-height: 50px;
         flex-grow 1;
     </style>
     
     <div class-"flex">
          <div class="cell">First</div
          <div class="cell">Second</div
          <div class-"cell">Third</div
     </div>`,
    answers: [
      `height: 52px, width: 50px`,
      `height: 50px, width: 100px`,
      `height: 100px, width: 50px`,
      `height: 100px, width 100px`,
      `height: 52px, width: 100px`,
    ],
    correctAnswerIndex: 4,
    answer: ""
  },
  // 19
  {
    question: `Which color will we see?
    <style>

    div {
        position: relative; 
        float: left; 
        height: 50px; 
        width: 50px; 
    }

    #first {
          z-index: 3;
          background: red;
      }

    #second { 
          position: absolute; 
          left: 0; 
          z-index : 2; 
          backgnound: green; 
    </style>
        
    <div> 
        <div id="first"></div>
        <div id="second"></div>
    </div>`,
    answers: [
      `red`,
      `green`,
      `red and green`,
      `brown`,
      `none`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 20
  {
    question: `What is the position and alignment of the component with the following code?
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }`,
    answers: [
      `vertically and horizontally centered with top to bottom order`,
      `horizontally centered with bottom to top order`,
      `vertically centered with top to bottom order`,
      `top left corner`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 21
  {
    question: `What will be visible in the end?
    <style>
      div {
        background: gray;
      }

      p {
        background: red;
        height:50px;
        width: 50px;
      }

      div span {
        background: green;
        width: 100%;
        height: 100%;
      }

      div > span {
        background: blue;
      }
    </style>

    <div> 
      <p>
          <span>Flag</span>
      </p>
    </div>`,
    answers: [
      `"Flag" text in blue rectangle in a gray rectangle`,
      `"Flag" text in blue rectangle in a red rectangle in a gray rectangle`,
      `"Flag" text in green rectangle in red rectangle`,
      `"Flag" text in green rectangle in a red rectangle in a gray rectangle`,
      `"Flag" text in green rectangle`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 22
  {
    question: `What will the code below output to the console?
    var person;

    console.log(person);

    person = 'Marko';`,
    answers: [
      `Reference error`,
      `undefined`,
      `Marko`,
      `Uncaught SyntaxError`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 23
  {
    question: `What will the code below output to the console?
    var person;
    console.log(person);

    let person2;
    console.log(person2);

    let person3;
    console.log(person3);`,

    answers: [
      `undefined, undefined, undefined`,
      `undefined, undefined, Uncaught SyntaxError`,
      `It won't run`,
      `"", "", ""`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 24
  {
    question: `What will the code below output to the console?
    var person = 'Marko';
    
    {
      console.log(person);
    }`,
    answers: [
      `Peter`,
      `undefined`,
      `Marko`,
      `Reference error`,
      `It won't run`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 25
  {
    question: `What will the code below output to the console?
    var person = 'Marko';

    {
      console.log(person);
      let person = "Peter";
    }`,
    answers: [
      `Peter`,
      `undefined`,
      `Marko`,
      `Reference error`,
      `It won't run`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 26
  {
    question: `What will the code below output to the console?
     var person = 'Marko';

     function test() {
        console.log(person);
        let person = "Peter";
     }
    
     test();`,
    answers: [
      `Peter`,
      `undefined`,
      `Marko`,
      `Reference error`,
      `It won't run`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 27
  {
    question: `What will the code below output to the console?
    function test() {
        let person = "Peter";
    }

    console.log(test());`,
    answers: [
      `Marko`,
      `undefined`,
      `Reference error`,
      `It won't run`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  //28
  {
    question: `What will the code below output to the console?
    test();

    function test() {
        console.log('marko');
    }`,
    answers: [
      `It won't run`,
      `Reference error`,
      `marko`,
      `undefined`,

      ,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  {
    question: `What will the code below output to the console?
    test();

    const test = () => {
      console.log('marko');
    }`,
    answers: [
      `It won't run`,
      `Reference error`,
      `marko`,
      `undefined`,

      ,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 30
  {
    question: `What will the code below output to the browser console?
    console.log(this.obj);
    console.log(this);`,
    answers: [
      `undefined, Window`,
      `undefined, undefined`,
      `Reference Error, Reference Error`,
      `Reference Error, undefined`,
      `undefined, Reference Error`
      ,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 31
  {
    question: `What will the code below output to the console?
    const obj = {
      test: "Marko",
      handler: function() {
        console.log(this.test);
      }
    }

    obj.handler();`,
    answers: [
      `undefined`,
      `It won't run`,
      `Marko`,
      `Reference Error`,
      `obj not an instance`
      ,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  // 32
  {
    question: `What will the code below output to the console?
    const obj = {
      test: "Marko",
      handler: () => {
        console.log(this.test);
      }
    }

    obj.handler();`,
    answers: [
      `It won't run`,
      `Marko`,
      `Reference Error`,
      `undefined`,
      `obj not an instance`
      ,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 33
  {
    question: `What will the code below output to the console?
    const obj = {
      test: "Marko",
      handler: function() {
        console.log(this.test);
      }
    }

    const a  = obj.handler;
    
    a();`,
    answers: [
      `It won't run`,
      `Marko`,
      `undefined`,
      `Reference Error`,
      `obj not an instance`
      ,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },

  // 34
  {
    question: `What will the code below output to the console?
    console.log(1 + 4 + "23");

    console.log(1 + 4 * "2");

    console.log(1 + 4 / "2");
    `,
    answers: [
      `523, 9, 3`,
      `28, 9 , 3`,
      `523, 10, 2.5`,
      `28, 10, 2.5`,
      `Error, 9, 3`,
      `Error, 10, 2.5`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 35
  {
    question: `What is the output of the following code?

    const initialArray = [1, 3, 5];
    const updatedArray = [...initialArray, 2, 4, 6];

    console.log(initialArray);
    console.log(updatedArray);
    `,
    answers: [
      `123456 123456`,
      `135246 246`,
      `135 246`,
      `135 135246`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 36
  {
    question: `What is the output of the following code?

    let person = ["Albert", "Einstein"];
    let [firstName, lastName] = person;

    console.log(firstName);
    console.log(lastName);
    `,
    answers: [
      `firstName lastName`,
      `Albert Einstein`,
      `undefined undefined`,
      `Reference error`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 37
  {
    question: `What is the output of the following code?
    var five = 5;
    var fiveOneMoreTime = 5;
    var fiveString = "5";

    console.log(five == fiveOneMoreTime);
    console.log(five === fiveOneMoreTime);
    console.log(five == fiveString);
    console.log(five === fiveString);
    
    `,
    answers: [
      `true false true false`,
      `true true true false`,
      `true true true true`,
      `false true false true`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 38
  {
    question: `What is the output of the following code?
    var firstArray = [1,2,3,4,5];
    var secondArray = [1,2,3,4,5];
    console.log(firstArray == secondArray);
    console.log(firstArray === secondArray);
    
    `,
    answers: [
      `true false`,
      `false true`,
      `true true`,
      `false false`,
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 39
  {
    question: `What will the code below output to the console?
      const person = {
      name: "Ljubica",
      age: 23,
      address: {
        coty: "Pripyat",
        street: "Valutsya Zhdanova",
        number: 5
      }
    };

    const secondPerson = { ...person };
    secondPerson.address.number = 7;

    console.log(person.address.number, secondPerson.address.number);
    `,
    answers: [
      `5 5`,
      `7 7`,
      `5 7`,
      `7 5`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 40
  {
    question: `What will the code below output to the console?
    const arr = [1, 2, 3];
    const mappedArr= arr.map(i => i ** 2);
    
    let data = {};
    data[arr] arr;
    data[mappedArr]= mappedArr;
    
    console.log (data.arr, data [mappedArr]);
    `,
    answers: [
      `[1, 2, 3] [1, 4, 9]`,
      `undefined [2, 4, 6]`,
      `[1, 2, 3] undefined`,
      `undefined [1, 4, 9]`,
      `undefined, undefined`
    ],
    correctAnswerIndex: 3,
    answer: ""
  },
  // 41
  {
    question: `Which of these keys will NOT be present on the data object?
    const basicData = { id: "333-222" };
    const relatedId = "wow";

    let data = {};
    data[basicData] = basicData;
    data[relatedId] = relatedId;
    `,
    answers: [
      `[object Object]`,
      `basicData`,
      `relatedId`,
      `wow`,
      `{ id: "333-222" }`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 42
  {
    question: `Which type does the typeof operator return?`,
    answers: [
      `string`,
      `object`,
      `symbol`,
      `enum`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 43
  {
    question: `What will the code below output to the console?
    const kobe = {
      points: 21,
      score: () => {
        this.points++;
        this.points++;
        this.points++;
      }
    }

    kobe.score();
    kobe.score();
    kobe.score();
    
    console.log(kobe.points);
   `,
    answers: [
      `21`,
      `30`,
      `Infinity`,
      `NaN`,
      `uderfined`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 44
  {
    question: `What will the code below output to the console?
    const getItemData = () => ({
    name: "Desk"
    });

    console.log(getItemData().name);
   `,
    answers: [
      `TypeError: Cannot read property 'name' of undefined`,
      `Desk`,
      `() => { name: 'Desk' };`,
      `getItemData`,
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 45
  {
    question: `What will the code below output to the console?
    const later = (fn, ...args) => () => fn(...args);
    console.log(later(x => x, 3));`,
    answers: [
      `3`,
      `Desk`,
      `() => fn(...args)`,
      `SyntaxError: Identifier 'later' has already been declared`,
      `ReferenceError: later is not defined`,
      `IllegalArgumentException: Cannot read property args of undefined`,
      `TypeError: Found non-callable @@iterator`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 46
  {
    question: `What will the code below output to the console?
    const data = { a: 3, b: 4 };
    Object.freeze(data);

    const otherData = { b: 5, c: 6 };
    Object.seal(otherData);
    
    const completeData = Object.assign({}, data, otherData);

    console.log(completeData.b);`,
    answers: [
      `4`,
      `5`,
      `undefined`,
      `TypeError: Cannot assign value from frozen object [object Object]`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 47
  {
    question: `Is this valid JS?
    const arr = [];
    arr.x = 3;`,
    answers: [
      `Yes`,
      `No`,
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 48
  {
    question: `What will the code below output to the console?
    class NumberBox {
      constructor(initialValue) {
       this._value = initialValue;
      }

      get value() {
        return this._value;
      }

      set value(newValue) {
        this._value = newValue;
      }

      get increment() {
        this.value++;
      }
    }

    const box = new NumberBox(2);
    box.increment;

    console.log(box.value);`,
    answers: [
      `2`,
      `3`,
      `undefined`,
      `function value() { return this._value; }`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 49
  {
    question: `What will the code below output to the console? 
    const then = async () => {
    console.log(await Promise.resolve(3));
    };

    then();`,
    answers: [
      `3`,
      `undefined`,
      `Promise {<resolved>: 3}`,
      `then {<suspended>}`,
      `SyntaxError: Identifier 'then' has already been declared`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 50
  {
    question: `What will the code below output to the console? 
    const then = async () => 3; 
    then().then(x => console.log(x));

    then();`,
    answers: [
      `3`,
      `undefined`,
      `Promise {<resolved>: 3}`,
      `then {<suspended>}`,
      `SyntaxError: Identifier 'then' has already been declared`,
      `TypeError: then().then is not a function`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 51
  {
    question: `What is the difference between a while and do...while loop?`,
    answers: [
      `"do...while" will execute at least once`,
      `"while" will execute at least once`,
      `no difference`,
      `"do...while" isn't supported in older browsers, while "while" is`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 52
  {
    question: `What will the code below output to the console?
    console.log(typeof ("x" instanceof Function));`,
    answers: [
      `true`,
      `false`,
      `boolean`,
      `SyntaxError: Unexpected token instanceof`
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  // 53
  {
    question: `What will the code below eventually output to the console?
    Promise.resolve(3)
      .then(() => Promise.resolve(4))
      .then(x => console.log(x));`,
    answers: [
      `3`,
      `4`,
      `underfined`,
      `x`,
      `Promise {<resolved>: 4}`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 54
  {
    question: `What will the code below eventually output to the console? 
    Promise.resolve(3)
      .then(() => {
        throw new Error();
      })
      .then(() => Promise.resolve(4))
      .catch(() => Promise.reject(5))
      .then(x => console.log(x))
      .catch(err => console.log(err));`,
    answers: [
      `3`,
      `4`,
      `underfined`,
      `x`,
      `5`,
      `Error: 5`
    ],
    correctAnswerIndex: 4,
    answer: ""
  },
  // 55
  {
    question: `How many array references are created in the sequence below?
    [1, 2, 3]
      .map(x => x ** 3)
      .filter(x => x > 1)
      .map(x => x + 1)
      .reduce((a, b) => a + b, 0);`,
    answers: [
      `0`,
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correctAnswerIndex: 4,
    answer: ""
  },
  // 56
  {
    question: `What will the code below output to the console? 
    const arr = [1, 4, 9];
    const sqrtSum = arr.forEach(Math.sqrt).reduce((a, b) => a + b, 0);`,
    answers: [
      `6`,
      `14`,
      `TypeError: Cannot read property 'reduce' of undefined`,
      `0`,
      `TypeError: Math.sqrt is not a function`,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  // 57
  {
    question: `How can we detect if a variable "x" is an "array"?`,
    answers: [
      `Array.isArray(x)`,
      `x.length >= 0`,
      `typeof x === 'Array'`,
      `x instanceof Array`,
      `x.constructor.name === 'Array'`,
      `x.length !== undefined`
    ],
    correctAnswerIndex: [0, 3, 4],
    answer: ""
  },
  // 58
  {
    question: `What will the code below output to the console?
    Object.prototype.value = 2;
    Object.prototype.increaseValue = function () {
      this.value++;
      };
    const objA = {};
    objA.increaseValue();

    const objB = {};
    Object.prototype.increaseValue();

    const objC = { value: 10 };
    objC.increaseValue();

    console.log(objA.value, objB.value, objC.value);`,
    answers: [
      `undefined undefined 11`,
      `3 3 11`,
      `3 3 10`,
      `undefined undefined 10`,
      `3 3 10`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 59
  {
    question: `What will the code below output to the console?
    function sum(a, b, c) {
      let i = c;
      let res = 0;
      for (let i = 0; i < c; i++){
      res += arguments[i];
      }
      res += arguments[i];
      return res;
    }

    console.log(sum(1, 2, "3"));`,
    answers: [
      `"333"`,
      `"123undefined"`,
      `Uncaught ReferenceError: arguments is not defined`,
      `"1233"`,
      `"33undefined"`
    ],
    correctAnswerIndex: 4,
    answer: ""
  },
  // 60
  {
    question: `How can the form below be submitted?
    <form id="form">
        <button id="1">Button 1</button>
        <button id="2" type="submit">Button 2</button>
        <input id="3" value="submit"></input>
        <input id="4" type="submit"></input>
    </form>`,
    answers: [
      `Click on element with id="1"`,
      `Click on element with id="2"`,
      `Click on element with id="3"`,
      `Click on element with id="4"`,
      `Executing in console document.getElementById("form").click()`,
      `Executing in console document.getElementById("1").submit()`
    ],
    correctAnswerIndex: [0, 1, 3],
    answer: ""
  },
  // 61
  {
    question: `The following function can not be considered as pure because:
    const func = (x, y) => {
      console.log(Data.now() - x ** y);`,
    answers: [
      `The function depends on the constantly changing Date.now()`,
      `The function is declared as an arrow function instead of a function expression`,
      `The parameters don't have default values`,
      `The function outputs to console`,
      `The function mutates one of its input parameters`,
      `All of the above`
    ],
    correctAnswerIndex: [0, 3],
    answer: ""
  },
  // 62
  {
    question: `Which of the following claims for "first" and "second" element are correct?
    <style>
        .box {
            height: 50px;
            width: 10px;
            border: 1px solid black;
            margin: 5px;
            padding: 0 5px;
        }
        
        .first {
            box-sizing: border-box;
        }
        
        .second {
            display: inline-block;
        }
    </style>
    <div>
        <div class="box first"></div>
        <div class="box second"></div>
    </div>`,
    answers: [
      `"first" and "second" box are in different rows`,
      `distance between "first" and "second" box is 5px`,
      `"first" box has height of 50px`,
      `"first" box has the same height as the "second" box`,
      `"second" box has width of 112px`,
      `"first" box has width of 100px`
    ],
    correctAnswerIndex: [0, 2, 4, 5],
    answer: ""
  },
  // 63
  {
    question: `What will the code below output to the console?
    let a = 'a';
    const b = 'd';

    try {
      a = 'b';
      b = 'c';
      var c = 'd';
    }
    catch {
      a = 'c';
      let b = 'd';
    }
    finally {
      a = 'f';
      var d = 'g';
    }

    console.log(a, 'b', c, d);`,
    answers: [
      `a b c g`,
      `a b c undefined`,
      `b c d g`,
      `f c undefined g`,
      `f b undefined undefined`,
      `f b undefined g`,
      `f d d g`,
      `Option 2`
    ],
    correctAnswerIndex: [5],
    answer: ""
  },
  // 64
  {
    question: `Select statements that are true:`,
    answers: [
      `Data stored in localStorage is preserved on window close`,
      `Data stored in sessionStorage is preserved on window close`,
      `Data stored in localStorage is shared between tabs`,
      `Data stored in sessionStorage is shared between tabs`,
      `Both localStorage and sessionStorage accept only string values`,
      `Protocol of the page affects both the localStorage and sessionStorage`,
      `Protocol of the page affects localStorage, but not the sessionStorage`
    ],
    correctAnswerIndex: [0, 2, 4, 5],
    answer: ""
  },
  // 65
  {
    question: `What will the code below output to the console?
    const later = (func) => {
      return new Promise((resolve, reject) => {
        if (later) {
          resolve(func(4));
        } else {
          reject(new Error("later is not defined"));
        }
      })
    }

    later(x => Promise.resolve(12 + x))
      .then(console.log)
      .catch(console.log);`,
    answers: [
      `Error: later is not defined`,
      `Promise {<pending>}`,
      `16`,
      `Uncaught (in promise) Error: later is not defined`,
      `None of the above`
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  // 66
  {
    question: `What are the widths of "first", "second", "third" and "forth" elements (window size is 200x200px)? 
     <style>
        html {
            font-size: 16px;
        }
        
        body {
            font-size: 14px;
        }
        
        div {
            height: 100px;
            width: 100px;
            font-size: 12px;
            display: inline-block;
        }
        
        .first {
            width: 10em;
        }
        
        .second {
            font-size: 14px;
            width: 10rem;
        }
        
        .third {
            font-size: 10px;
            width: 50%;
        }
        
        .forth {
            font-size: 15px;
            width: 10vw;
        }
    </style>

    <html>
      <body>
          <div>
              <div class="first">
                  <div class="second"></div>
              </div>
              <div class="third"></div>
              <div class="forth"></div>
          </div>
      </body>
    </html>`,
    answers: [
      `120px, 160px, 50px, 100px`,
      `120px, 160px, 50px, 20px`,
      `160px, 140px, 100px, 10px`,
      `100px, 160px, 100px, 160px`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 67
  {
    question: `Which of the following claims are correct?
    const a = '0';
    const b = 2.02362;
    const c = '5.82';
    const d = 'false';
    const e = true;
    const f = null;
    const g = NaN;`,
    answers: [
      `!!a === false;`,
      `b.toFixed(2) == 2.02;`,
      `parseInt(c, 10) == '5';`,
      `Boolean(d) === false`,
      `${e} === true;`,
      `f == 'null';`,
      `g == parseFloat('true');`
    ],
    correctAnswerIndex: [1, 2],
    answer: ""
  },
  // 68
  {
    question: `What will the code below output to the console?
    let a = 0;
    let b = 0;
    var c;

    function count(a) {
      a++;
      c = a;
      if (b) {
        let c = 0;
        c++;
      }
      b += c;
    }

    count(a);
    count(1);
    count(2);

    console.log(a,b,c);`,
    answers: [
      `0 6 3`,
      `1 6 3`,
      `1 3 3`,
      `0 3 3`,
      `3 6 3`,
      `3 3 3`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 69
  {
    question: `How many rows of children will we see?
    <style>
        div {
            height: 100px;
            width: 100px;
        }
        
        .box {
            display: inline-block;
            width: 40px;
            padding: 5px;
            margin: 5px;
        }
        
        .first {
            background-color: blue;
            box-sizing: border-box;
        }
        
        .second {
            background-color: green;
            box-sizing: content-box;
        }
        
        .third {
            background-color: red;
            border: 5px solid red;
        }
    </style>

    <div>
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
    </div>`,
    answers: [
      `0`,
      `1`,
      `2`,
      `3`,
    ],
    correctAnswerIndex: 2,
    answer: ""
  },
  // 70
  {
    question: `Select elements which are focusable;
     <div>
        <div id="1"></div>
        <div id="2" tabindex="0"></div>
        <div id="3" tabindex="-1"></div>
        <label id="4"></label>
        <button id="5"></button>
        <select id="6"></select>
        <input id="7">
        <span id="8"></span>
        <span id="9" tabindex="0"></span>
    </div>`,
    answers: [
      `id="1"`,
      `id="2"`,
      `id="3"`,
      `id="4"`,
      `id="5"`,
      `id="6"`,
      `id="7"`,
      `id="8"`,
      `id="9"`,
    ],
    correctAnswerIndex: [1, 4, 6, 8],
    answer: ""
  },
  // 71
  {
    question: `What is the output of the following code?
    var prA = new Promise((res, rej) => res());
    prA.then((...args) => console.log("prA: ", args.length));

    var prB = new Promise((res, rej) => res());
    prB.then((...args) => console.log("prB: ", args.length));

    var prC = new Promise((res, rej) => res());
    prC.then((...args) => console.log("prC: ", args.length));

    var prD = new Promise((res, rej) => res());
    prD.then((...args) => console.log("prD: ", args.length));`,
    answers: [
      `1 1 undefined undefined`,
      `1 1 1 1`,
      `undefined undefined 1 undefined`,
      `undefined undefined 1 1`,
      `0 0 1 undefined`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
  // 72
  {
    question: `Which of these is an invalid CSS unit for width?`,
    answers: [
      `vw`,
      `px`,
      `mm`,
      `%`,
      `em`,
      `yd`,
      `pt`
    ],
    correctAnswerIndex: 5,
    answer: ""
  },
  // 73
  {
    question: `In a flexbox layout, the justify-content property will align children along the...`,
    answers: [
      `main axis`,
      `cross axis`,
      `diagonal axis`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 74
  {
    question: `Which of the following is correct CSS syntax to select all the paragraph elements bold?`,
    answers: [
      `p {font-weight:bold;}`,
      `<p style="font-size:bold;">`,
      `<p style="text-size:bold;">`,
      `p {text-size:bold;}`
    ],
    correctAnswerIndex: 0,
    answer: ""
  },
  // 75
  {
    question: `What will be the text colors of words: "Hello", "Europe", "America" and "World"?
    <style>
      p {
          color: red;
      
      section > p {
          color: blue;
      
      article + article p {
          color: green;
      
      article ~ p {
          color: yellow;
      }
    </style
    <section>
        <p>Hello</p>
        <article>
            <p>Europe</p>
        </article>
        <article>
            <p>merica</p>
        </article>
        <p>World</p>
    </section>`,
    answers: [
      `red, blue, green, yellow`,
      `blue, red, green, yellow`,
      `blue, red, green, blue`,
      `yellow, red, red, yellow`,
      `yellow, red, red, blue`
    ],
    correctAnswerIndex: 1,
    answer: ""
  },
];