const type = document.querySelector("#type")! as HTMLInputElement;
const montant = document.querySelector("#montant")! as HTMLInputElement;
const motif = document.querySelector("#motif")! as HTMLInputElement;
const myButton = document.querySelector("#myButton")! as HTMLButtonElement;
const list = document.querySelector("#list")! as HTMLUListElement;

myButton.addEventListener("click", function add(event: Event) {
  event.preventDefault();
  let li = document.createElement("li");
  let p = document.createElement("p");
  let h4 = document.createElement("h4")

  p.innerText = `${type.value} \n`+ type.value + " de " + montant.value + " par " + motif.value;
  li.className = type.value;
  li.append(p);
  
  li.append(h4);
  li.className = type.value;

  list.append(li);
});

