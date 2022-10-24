DOMSelectors = {
    button: document.getElementById("submit"),
    input: document.getElementById("input"),
    objects: document.getElementById("objects"),
    remove: document.getElementById('remove')
}

DOMSelectors.button.addEventListener('click', function() {
    DOMSelectors.objects.insertAdjacentHTML("afterbegin", `<p>${DOMSelectors.input.value}</p>\n`);
    DOMSelectors.input.value = ''
});
DOMSelectors.remove.addEventListener('click', function() {
    newP = DOMSelectors.objects.innerHTML.split('\n')
    newP.shift()
    DOMSelectors.objects.innerHTML = newP.join('\n')
});