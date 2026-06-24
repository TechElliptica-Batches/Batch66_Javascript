import { PI, g } from "./export.js";
import PromptSync from "prompt-sync";
import { areaOfCircle, square } from "./functions/func1.js";
// library 
// npm install prompt-sync

// Get area of circle.

const prompt = PromptSync();

let radius = prompt("Please provide your radius: ");
//let area = PI * radius * radius;
let area = areaOfCircle(radius);
console.log(area.toFixed(2));

// node >= 20 , "type": "module",  ES6 