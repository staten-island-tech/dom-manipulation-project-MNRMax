DOMSelectors = {
    button: document.getElementById("submit"),
    input: document.getElementById("input"),
    objects: document.getElementById("objects"),
    remove: document.getElementById('remove')
}

DOMSelectors.button.addEventListener('click', function() {
    console.log("test")
    DOMSelectors.objects.insertAdjacentHTML("beforeend", `<p>${DOMSelectors.input.value}</p>`);
});