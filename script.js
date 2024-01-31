let nummer1 = 747;
let nummer2 = 530;
console.log(nummer1 + nummer2);
let nummer3 = 120;
function add(x, y) {
    return x + y;
}
function divide(x, y) {
    return x / y;
}
function addinf(...sum) {
    let result = 0;
    for (const x of sum) {
        result = result + x;
    }
    return result;
}
console.log("Die Addition ergibt: " + add(nummer1, nummer2));
console.log("Die Division ergibt: " + divide(nummer1, nummer2));
console.log("Alle Zahlen zusammen ergeben: " + addinf(nummer1, nummer2, nummer3));
console.log("Running function inception: " + add(divide(nummer1, nummer2), nummer3));
class Frau {
    kochen(x) {
        if (this.putzen) {
            return "Ich putze leider gerade.";
        }
        return "Okay, ich koche dir heute " + x + ".";
    }
    putzen = false;
}
const frau = new Frau;
frau.putzen = false;
console.log(frau.kochen("vor Wut"));
const frau2 = new Frau;
console.log(frau2.kochen("Schnitzel"));
const var1 = (frau2.putzen == false);
console.log(var1);
const div1 = document.createElement("div");
document.body.appendChild(div1);
div1.textContent = "Hier könnte ihre Werbung stehen!";
const span1 = document.createElement("span");
document.body.appendChild(span1);
span1.textContent = "Hier steht was anderes";
const span2 = document.createElement("span");
document.body.appendChild(span2);
span2.textContent = "...als hier";
//# sourceMappingURL=script.js.map