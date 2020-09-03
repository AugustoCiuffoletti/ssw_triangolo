// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>I risultati sono nella console</h1>`;

function Triangolo(l1, l2, l3) {
  this.perimetro = function () {
    return this.lato1 + this.lato2 + this.lato3;
  }
  this.lato1 = l1;
  this.lato2 = l2;
  this.lato3 = l3;
}
var t1 = new Triangolo(1, 1, 2);
var x = t1.perimetro();
console.log(x);
t1.lato2 = 2.5;
console.log(t1["perimetro"]);
t1.lato4 = 3;
t1.perimetro = function () {
  return this.lato1 + this.lato2 + this.lato3 + this.lato4;
}
console.log(t1.perimetro());