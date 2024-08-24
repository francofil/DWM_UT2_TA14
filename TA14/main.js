const text = document.getElementById("input");
const lista = document.getElementById("lista");

document.getElementById("button").addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = text.value; // Obtenemos el valor del input directamente
  lista.appendChild(li);       // Agregamos el nuevo <li> a la lista
  text.value = "";             // Limpiamos el input
});