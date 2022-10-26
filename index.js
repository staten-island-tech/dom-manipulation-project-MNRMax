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
    let p = document.createElement('p')
    let h1 = document.createElement('h1')
    p.innerHTML = DOMSelectors.nameInput.value;
    h1.innerHTML = DOMSelectors.titleInput.value;
    image.src = DOMSelectors.imageInput.value;
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(image)
    DOMSelectors.objects.appendChild(div)
});