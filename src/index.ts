import express from "express";

const app = express();

interface Params {
  a: number;
  b: number;
}

type Add = (x: Params) => number;

// const add = (x: Params) => {
//   return x.a + x.b;
// };

const add: Add = (x) => {
  return x.a + x.b;
};

app.get("/", (req) => {
  add({ a: 1, b: 3 });
});

const jatin = { jatin: "jatin" };
app.listen(5000, () => {
  console.log("listening on port " + 5000);
});
