"use strict";
const type = document.querySelector("#type");
const montant = document.querySelector("#montant");
const motif = document.querySelector("#motif");
const myButton = document.querySelector("#myButton");
const list = document.querySelector("#list");
myButton.addEventListener("click", function add(event) {
    event.preventDefault();
    let li = document.createElement("li");
    let p = document.createElement("p");
    let h4 = document.createElement("h4");
    p.innerText = `${type.value} \n` + type.value + " de " + montant.value + " par " + motif.value;
    li.className = type.value;
    li.append(p);
    li.append(h4);
    li.className = type.value;
    list.append(li);
});
