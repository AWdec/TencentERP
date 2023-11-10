window.addEventListener('DOMContentLoaded', () => {
    core(window, document)
});

function core(w, d) {
    var editarDatos_btn = d.getElementById("editarDatosPersonales"),
        originalText = editarDatos_btn.textContent,
        cambiando = false;

        var elemsToModify_names = ["editarNombre", "editarEmail", "editarNumero", "editarDireccion"],
            elemsToModify = [];

        for(elem in elemsToModify_names) {
           var curElem = d.getElementById(elemsToModify_names[elem]),
           curOriginalContent = curElem.children[0];


           elemsToModify.push({
             "elem": curElem,
             "originalContent": curOriginalContent
           })
        }


    editarDatos_btn.addEventListener('click', (t) => {
        cambiando = !cambiando;

        editarDatos_btn.textContent = cambiando ? "Guardar" : originalText;

        if(cambiando) {   
            
            for(elem in elemsToModify) {
                var input = d.createElement("input");
                    input.id = elemsToModify[elem].elem.id + "" + elem;
                    input.className = "inputModifyData"
                    input.value = elemsToModify[elem].originalContent.textContent;

                elemsToModify[elem].elem.removeChild(elemsToModify[elem].elem.children[0]);
                elemsToModify[elem].elem.append(input)

                if(elem == 0) {
                    input.focus();
                }
            }

            //nombreCompletoDiv.removeChild(nombreCompletoOriginalChild);
           // nombreCompletoDiv.append(input)
        } else {
            for(elem in elemsToModify) {
                elemsToModify[elem].elem.removeChild(elemsToModify[elem].elem.children[0]);

                // realmente, en vez de meterle el originalContent, debiesemos leer el NUEVO VALOR CAMBIADO!!
                elemsToModify[elem].elem.append(elemsToModify[elem].originalContent)
            }
        }

    });

    var editar2FA_btn = d.getElementById("editarMetodo2FA");

    editar2FA_btn.addEventListener("click", () => {
        console.log("modify 2FA...")
    });
}