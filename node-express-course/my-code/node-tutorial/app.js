// const { log } = require("console");
// const os = require("os");
// const path = require("path");

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds.`);

// // current os specs
// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

// // path separators depending on OS
// console.log(path.sep);

// // relevant filePath. Utilizes your OS separators!
// const filePath = path.join("/content/", "subfolder", "test.txt");
// console.log(filePath);

// // shows base name of the path ( the very end )
// const base = path.basename(filePath);
// console.log(base);

// // absolute path from the root
// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);

// const {
//   readFileSync,
//   writeFileSync,
//   readFile,
//   writeFile,
//   read,
// } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log("done with this task");
// console.log("starting next task");

// readFile(`./content/first.txt`, "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const second = result;

//     writeFile(
//       "./content/result-sync.txt",
//       `Here's the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }

//         console.log(result);
//       }
//     );
//   });
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.end("Welcome to my homepage");
//   } else if (req.url === "/about") {
//     res.end("here's about us page");
//   } else {
//     res.end(
//       `<h1>whoops! we can't seem to find a page you're looking for. <a href="/">homepage</a></h1>`
//     );
//   }
// });
// server.listen(5000);

// // npm - global command, comes with node
// // npm --version

// // local dependency - use it only in this particular project
// // npm i <packageName>

// // global dependency - use it in any project
// // npm i -g <packageName>
// // sudo npm i -g <packageName> (mac)

// // package.json - manifest file (stores important info about project/package)
// // manual approach (create package.json in the root, create properties etc)
// // npm init (step by step, press enter to skip)
// // npm init -y (everything is default)

// const _ = require("lodash");

// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf8", (error, data) => {
// //       if (error) {
// //         reject(error);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// // getText("./content/first.txt")
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(error));

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`
//     );

//     console.log(first, second);
//   } catch (erorr) {
//     console.log(error);
//   }
// };

// start();

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id) => {
//   console.log(`data received ${name}: ${id}`);
// });

// customEmitter.on("response", () => {
//   console.log(`some other logic here`);
// });

// customEmitter.emit("response", "john", 34);

// const http = require("http");

// // using even emitter
// const server = http.createServer();
// //emits request event
// // subscribe to it / listen for it / respond to it
// server.on("request", (req, res) => {
//   res.end("Welcome");
// });

// server.listen(5000);

// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./content/big.txt", `hello world${i}`, { flag: "a" });
// }

const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
