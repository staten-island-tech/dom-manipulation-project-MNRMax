DOMSelectors = {
    submit: document.getElementById("submit"),
    nameInput: document.getElementById("name-input"),
    titleInput: document.getElementById("title-input"),
    imageInput: document.getElementById("image-input"),
    objects: document.getElementById("objects"),
}
DOMSelectors.submit.addEventListener('click', function() {
    p = DOMSelectors.nameInput.value;
    h2 = DOMSelectors.titleInput.value;
    image = DOMSelectors.imageInput.value;
    DOMSelectors.objects.insertAdjacentHTML(
        "afterbegin",
        `<div class="object">
                <h2>${h2}</h2>
                <p>${p}</p>
                <img class="object-image" src="${image}">
                <br>
                <button class="remove-button" onclick="this.parentElement.remove()">Remove</button>
        </div>`
    )
    DOMSelectors.nameInput.value = '';
    DOMSelectors.titleInput.value = '';
    DOMSelectors.imageInput.value = '';
});