document.addEventListener('DOMContentLoaded', () => {
    let boton = document.querySelector("#verify");
    let res = document.querySelector(".resultado");

    boton.addEventListener('click', () => {
        let numero1 = parseInt(document.querySelector("#uno").value) || 0;
        let numero2 = parseInt(document.querySelector("#dos").value) || 0;
        let numero3 = parseInt(document.querySelector("#tres").value) || 0;

        let suma = numero1 + numero2 + numero3;

        if (suma <= 10) {
            res.innerHTML = "Llevas " + suma + " stickers";
        } else {
            res.innerHTML = "Llevas demasiados stickers";
        }
    });
});