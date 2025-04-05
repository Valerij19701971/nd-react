// 1. Create a new <div> element (the square)
const square = document.createElement("div");

// 2. Style the square
square.style.width = "300px";
square.style.height = "300px";
square.style.backgroundColor = "#DDF3F5";
square.style.display = "flex";
square.style.justifyContent = "center";
square.style.alignItems = "center";
square.style.border = "3px solid skyblue";
square.style.borderRadius = "10px";
square.style.margin = "50px auto";
square.style.padding = "20px";

// 3. Create a <p> element
const paragraph = document.createElement("p");
paragraph.textContent = "Labas, zuiki!";

// 4. Style the <p>
paragraph.style.color = "#FF00AE";
paragraph.style.fontFamily = "monospace";
paragraph.style.fontSize = "36px";
paragraph.style.textTransform = "uppercase";
paragraph.style.textAlign = "center";

// 5. Add the <p> into the square
square.appendChild(paragraph);

// 6. Add the square into the <body>
document.body.appendChild(square);