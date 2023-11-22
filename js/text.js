const text = document.getElementById('text');
const text_size = document.getElementById('text_size');

let previous_length = 0;

function changeSize(newSize) {
    return `${newSize}px`
}

text.addEventListener('input', () => {

    const textHeight = text.scrollHeight;
    const textareaHeight = text.clientHeight;

    text_size.innerText = text.value;

    if (textHeight > textareaHeight) {
        text.style.height = changeSize(text.offsetHeight + 25);
    } else if (textHeight == textareaHeight && text_size.offsetWidth % 220 == 8) {
        text.style.height = changeSize(text.offsetHeight - 25);
    } else if (text.value.length == 0 || text_size.offsetWidth == 220) {
        text.style.height = `25px`;
    }
})