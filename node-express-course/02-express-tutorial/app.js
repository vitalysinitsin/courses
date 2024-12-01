// const { readFileSync } = require("fs");
// const http = require("http");

// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>about page</h1>");
//     res.end();
//   } else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImage);
//     res.end();
//   } else if (url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   } else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>about page</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>page not found </h1>");
//     res.end();
//   }
// });

// server.listen(5000);

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>not found page</h1>");
// });

// app.listen(5000, () => {
//   console.log("server is listening to 5000");
// });

// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static("./public"));

// // app.get("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// // });
// app.all("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

// app.listen(5000, () => {
//   console.log("server is listening on port 5000..");
// });

// const express = require("express");
// const { readFileSync } = require("fs");
// const { products } = require("./data");
// const { serialize } = require("v8");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>homepage</h1><a href='/api/products'>products</a>");
// });

// app.get("/api/v1/query", (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }

//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }

//   if (sortedProducts.length < 1) {
//     res.status(200).send("no products matched your search parameters");
//   }

//   res.status(200).json(sortedProducts);
//   res.send("hello world");
// });
// app.get("/api/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   console.log(productId, products);

//   const singleProduct = products.find(
//     (product) => product.id === Number(productId)
//   );

//   if (!singleProduct) {
//     return res.status(404).send("Product does not exist");
//   }

//   res.send(singleProduct);
// });

// app.listen(5000, () => {
//   console.log("server is listening to port 5000");
// });

// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

// // app.use([logger, authorize]);
// // app.use(express.static("./public"));
// app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   res.send("home");
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });
// app.get("/api/products", (req, res) => {
//   res.send("products");
// });
// app.get("/api/items", (req, res) => {
//   res.send("items");
// });

// app.listen(5000, () => {
//   console.log("server is listening on port 5000");
// });

const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
// app.use();

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.use(express.json());
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "please provide the name value" });
  }
  res.status(201).json({ success: true, person: name });
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "please provide the name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res
      .status(400)
      .json({ success: false, msg: `no person with id: ${id} exists.` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res
      .status(400)
      .json({ success: false, msg: `no person with id: ${id} exists.` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  console.log(newPeople);

  res.status(200).json({ success: true, newPeople });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`);
  } else {
    return res.status(401).send("please provide credentials");
  }
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
