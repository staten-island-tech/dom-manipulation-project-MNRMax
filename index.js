DOMSelectors = {
    submit: document.getElementById("submit"),
    nameInput: document.getElementById("name-input"),
    titleInput: document.getElementById("title-input"),
    imageInput: document.getElementById("image-input"),
    objects: document.getElementById("objects"),
}

DOMSelectors.submit.addEventListener('click', function() {
    let div = document.createElement('div');
    div.className = 'object'
    let image = document.createElement('img');
    image.className = 'object-image'
    let p = document.createElement('p')
    let h1 = document.createElement('h1')
    let button = document.createElement('button')
    p.innerHTML = DOMSelectors.nameInput.value;
    h1.innerHTML = DOMSelectors.titleInput.value;
    image.src = DOMSelectors.imageInput.value;
    button.onclick = function() {
        button.parentElement.remove()
    }
    button.className = "remove-button"
    button.innerHTML = "Remove"
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(image)
    div.appendChild(document.createElement('br'))
    div.appendChild(button)
    DOMSelectors.objects.appendChild(div)
    DOMSelectors.nameInput.value = '';
    DOMSelectors.titleInput.value = '';
    DOMSelectors.imageInput.value = '';
});

