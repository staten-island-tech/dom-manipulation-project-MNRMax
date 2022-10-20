DOMSelectors = {
    button: document.getElementById("submit"),
    input: document.getElementById("input"),
    list: document.getElementById("ol")
}

DOMSelectors.button.addEventListener(click, create);

function create() {
    console.log("test")
    value = DOMSelectors.input.value 
    li = document.createElement("li")
    DOMSelectors.ol.append(li)
}