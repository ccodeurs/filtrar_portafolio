/* let btnmodal = document.getElementById("btn_modal");
let modal = document.getElementById("modal");
btnmodal.addEventListener("click", () => {
    modal.style.visibility = "visible";
});


window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.visibility = "hidden";
    }
} */
/*
var mos = document.querySelectorAll(".acordion");


for (var i = 0; i < mos.length; i++) {
    mos[i].addEventListener("click", function () {

        var p = this.nextElementSibling;
        if (p.style.display == "block") {
            p.style.display = "none";
        } else {
            p.style.display = "block";
        }
    });
}*/
const btn = document.querySelectorAll(".btns");
const box = document.querySelectorAll(".box");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        const get = this.getAttribute("data-target");
        for (k = 0; k < box.length; k++) {
            box[k].style.display = "none";
            if (box[k].getAttribute("data-id") == get) {
                box[k].style.display = "block";
            }
            if (get == "todo") {
                box[k].style.display = "block";
            }
        }
    });
}

/* document.getElementById("porta").addEventListener("click", () => {
    alert("ok")
}) */