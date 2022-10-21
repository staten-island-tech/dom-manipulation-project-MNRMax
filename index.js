DOMSelectors = {
    button: document.getElementById("submit"),
    input: document.getElementById("input"),
    objects: document.getElementById("objects"),
    remove: document.getElementById('remove')
}

DOMSelectors.button.addEventListener('click', function() {
    DOMSelectors.objects.insertAdjacentHTML("beforeend", `<p>${DOMSelectors.input.value}</p>\n`);
    DOMSelectors.input.value = ''
});
DOMSelectors.remove.addEventListener('click', function() {
    DOMSelectors.objects.innerHTML.substring(DOMSelectors.objects.innerHTML.indexOf("\n") + 1)
    console.log(DOMSelectors.objects.innerHTML.split('\n'))
});