// template strings

//String Interpolation : Imperative.

var fullName = "Antonio Nicasio";
var email = "antonio.nicasio.herrera@gmail.com";
var title = "Software Engineer";

// Imperative.
var messages =
  "Welcome to this Basics of JS, I'm a: " +
  title +
  " my name is: " +
  fullName +
  ", contact: " +
  email +
  ".";

console.log(messages);

// Declarative
let msg = `Hello my name is ${fullName} and I'm a ${title} please feel free to contact me ${email}`;
console.table(msg);

// tagged literals

var amount = 12.3;
var myMessage = formatCurrency`The total for your order is ${amount}`;

function formatCurrency(strings, ...values) {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += ` $${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
    }
  }
  return str;
}

console.log(myMessage);

// Create your own logger for debugging
function logger(strings, ...values) {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] == "object") {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            str += values[i - 1].stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(values[i - 1]);
            continue;
          } catch (err) {}
        }
      }
      str += values[i - 1];
    }
    str += strings[i];
  }
  console.log(str);
  return str;
}

var v = 42;
var o = { a: 1, b: [2, 3, 4] };

logger(`This is my value: ${v} and another ${o}`);

try { 
  nothing()
}
catch (err) {
  logger `Caught: ${err}`
}


// Tagged more examples:

function upper (strings, ...values) {
  let str = ''
  for (let i = 0; i < strings.length; i++) {
    if(i > 0) {
      str += String(values[i-1].toUppercase)
    }
    str += strings[i]
  }
  return ""
}

const useName = 'anicasio',
      twitter = 'wbmediadigital',
      topic = 'javascript'

      console.log(`Hello ${useName} or ${twitter}, welcome to ${topic}`)