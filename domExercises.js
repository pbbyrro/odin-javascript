const container = document.html.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!"

container.appendChild(redParagraph);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!"

container.appendChild(h3);

const div2 = document.createElement("div");
div2.style.cssText = "border: 5px solid black, background: pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

div2.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

div2.appendChild(p);

container.appendChild(div2);