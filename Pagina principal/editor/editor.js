const textarea = document.getElementById("textarea1");

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}
function f2(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}
function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}
function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}
function f5(e) {
    textarea.style.textAlign = "left";
}
function f6(e) {
    textarea.style.textAlign = "center";
}
function f7(e) {
    textarea.style.textAlign = "right";
}
function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}
function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}
function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}
window.addEventListener('load', () => {
    textarea.value = "";
});

const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})

textarea.addEventListener("input", function() {
    let links = mytextarea.value.match(/https?:\/\/[^\s]+/g);
    for ( let i = 0; i < links.length; i++) {
        var link = document.createElement("a");
        link.href = links[i];
        link.textContent = links[i];
        textarea.appendChild(link);
    }
});

document.getElementById("textarea1").addEventListener("click", function(event) {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let anchorNode = range.commonAncestorContainer.parentNode;
  
    if (anchorNode.tagName.toLowerCase() === "a") {
      let href = anchorNode.getAttribute("href");
      if (href) {
        window.open(href, "_blank");
        event.preventDefault();
      }
    }
  });