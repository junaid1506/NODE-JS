// 1 . GLOBAL 
// The global object is the root object in Node.js, similar to window in browsers. All global variables can be accessed through global.

global.myVar ="Hello wolrld"
console.log(global.myVar)

// 2. __dirname
// It gives the absolute path of the directory containing the currently executing script.

console.log(__dirname)

// 3.  __filename
// It provides the absolute path of the currently executing script, including the filename.

console.log(__filename)

// 4. process
// The process object provides information about and control over the current Node.js process.

console.log(process.version)
console.log(process.platform)

// 5. console
// Provides a simple way to output messages to the console, similar to console in browsers.

console.log('Hello console')
console.error("error 404")

// 6. setTimeout and clearTimeout
// Used to execute a function after a delay.

const timer = setTimeout(()=>{
    console.log("Run this code after 2 second")
}, 2000)
// console.log(timer)

// 7. setInterval and clearInterval
// Used to execute a function repeatedly at a specified interval.

const interval = setInterval|(()=>{
    console.log("This code run every 1 second")
},1000)

setTimeout(()=>clearInterval(interval),5000)

// 8. setImmediate and clearImmediate
// Executes a function immediately after the current event loop finishes.

const immediate = setImmediate(() => {
    console.log("Executed immediately after the current event loop.");
  });
  
  clearImmediate(immediate); // Cancels the immediate execution

//   9. require
// Used to import modules in Node.js.
const fs = require("fs")
fs.writeFileSync("example.txt", "Hello, Node.js!");

// 10. module
// Provides information about the current module, such as exports

console.log(module.exports)

// 11. exports
// A shorthand for module.exports, used to export functionality from a module.

exports.new = ()=>{
    console.log("eports example")
}

// 12. Buffer
// Provides a way to handle binary data.

const buffer = Buffer.from("Hello, Buffer!");
console.log(buffer.toString()); // Output: Hello, Buffer!

// 13. URL
// The URL class is part of the global object and provides utilities to parse and manipulate URLs.

const myURL = new URL("https://example.com?name=junaid");
console.log(myURL.searchParams.get("name")); // Output: junaid

// 14. TextDecoder and TextEncoder
// Used for encoding and decoding text.

const encoder = new TextEncoder();
const encoded = encoder.encode("Hello");

const decoder = new TextDecoder();
console.log(decoder.decode(encoded)); // Output: Hello