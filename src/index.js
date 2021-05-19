"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// const add = (x: Params) => {
//   return x.a + x.b;
// };
const add = (x) => {
    return x.a + x.b;
};
app.get("/", (req) => {
    add({ a: 1, b: 3 });
});
app.listen(5000, () => {
    console.log("listening on port " + 5000);
});
