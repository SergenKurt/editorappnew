window.onload = async () => {
    await getLastTemplate();
    await runContent();
}

const saveBtn = document.querySelector('#temp-save');

saveBtn.addEventListener('click', () => {
   alert();
});

async function update() {
    await runContent();
    setStorage("test");
    getStorageList();
}

function minimize () {
     var x = document.getElementById("minimize");
      if (x.innerHTML === "EXPAND") {
        x.innerHTML = "MINIMIZE";
      } else {
        x.innerHTML = "EXPAND";
      }
    const element = document.getElementById('code1');  element.classList.toggle("newCss");
    const element2 = document.getElementById('code2');  element2.classList.toggle("newCss");
    const element3 = document.getElementById('code3');  element3.classList.toggle("newCss");
    const element4 = document.getElementById('outpot');  element4.classList.toggle("outpotnew");
}

async function runContent() {
    let output = document.querySelector(".output .virtual-iframe").contentWindow.document;
    output.open();
    output.write("<style>" + cssEditor.getValue() + "</style>" + htmlEditor.getValue() + "<script>" + jsEditor.getValue() + "</script>");
    output.close();
}
