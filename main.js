//1
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

const button_func = () =>{
    if (input.value.trim() === "")return alert("напиши что нибудь )))")
    const div = document.createElement("div");
    const text = document.createElement("h3");
    text.innerHTML = input.value.split("").reverse().join("");


    div .setAttribute("class" , "block_text")
    div.prepend(text)
    list.prepend(div)

    input.value = "";
}
button.onclick = () => button_func();

input.onkeydown = (e) => {
    if (e.key === "Enter") button_func()
}
