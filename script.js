/*
let nummer1 = 747
let nummer2 = 530
console.log(nummer1 + nummer2)

let nummer3 = 120

function add(x: number, y: number): number {
    return x + y
}

function divide(x: number, y: number): number {
    return x / y
}

function addinf(...sum: number[]): number {
    let result = 0
    for (const x of sum) {
        result = result + x
    }
    return result
}

console.log("Die Addition ergibt: " + add(nummer1, nummer2))
console.log("Die Division ergibt: " + divide(nummer1, nummer2))
console.log("Alle Zahlen zusammen ergeben: " + addinf(nummer1, nummer2, nummer3))

console.log("Running function inception: " + add(divide(nummer1, nummer2), nummer3))

class Frau {
    kochen(x: string): string {
        if (this.putzen) {
            return "Ich putze leider gerade."
        }

        return "Okay, ich koche dir heute " + x + "."
    }
    putzen: boolean = false
}

const frau = new Frau
frau.putzen = false
console.log(frau.kochen("vor Wut"))


const frau2 = new Frau
const frau3 = frau2
frau3.putzen = true

console.log(frau2.kochen("Schnitzel"))

console.log(frau2.kochen("Schnitzel"))

const var1: boolean = (frau2.putzen == false)
console.log(var1)

const div1 = document.createElement("div")
document.body.appendChild(div1)
div1.textContent = "Hier könnte ihre Werbung stehen!"

const span1 = document.createElement("span")
document.body.appendChild(span1)
span1.textContent = "Hier steht was anderes"

const span2 = document.createElement("span")
document.body.appendChild(span2)
span2.textContent = "...als hier"

const br1 = document.createElement("br")
document.body.appendChild(br1)

const br2 = document.createElement("br")
document.body.appendChild(br2)

const span3 = document.createElement("span")
document.body.appendChild(span3)
span3.textContent = "Hier sollte ein zweiter Absatz vor sein"

const button1: HTMLElement = document.getElementById("test-id1")
const realButton1 = button1 as HTMLButtonElement
const realButton2 = <HTMLButtonElement>document.getElementById("test-id1")
realButton2.disabled = false
button1.addEventListener("click", click)

function click(event: MouseEvent) {
    console.log("buttondrölf")
    
    const event1 = event.target as HTMLButtonElement
    event1.disabled = true
}

// addEventListener übergibt der Variable button1 den Auslöser (Event) "Mausclick" und "=>" beschreibt die Defintion einer Funktion die in {}
// steht uns als Parameter weitergegeben wird. In () stehen normalerweise die Parameter, welche hier leer sind.
// Funktionen ohne Namen heißen "anonyme Funktionen"
// Funktionen die ohne "function" definiert werden, also mit "=>", heißen "Closures".
button1.addEventListener("click", (event) => {
    console.log(event)
    realButton2.disabled = true
})

const button3 = document.createElement("button")
document.body.appendChild(button3)
button3.textContent = "Click mich!"

button3.addEventListener("click", click)

let var3 = 5
let var4 = var3
var4 = 6
console.log(var3, var4)
*/
//# sourceMappingURL=script.js.map