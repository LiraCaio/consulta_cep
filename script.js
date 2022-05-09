const pesquisarCEP = async () => {
    const CEP = document.querySelector("#cep");
    const valueCEP = CEP.value.trim();
    console.log(valueCEP)

    if(valueCEP.length == 8){

        const resp = await fetch(`https://viacep.com.br/ws/${valueCEP}/json/`)
        .then(resp => resp.json())
        .then(resp => {
            if(resp.erro == "true"){
                alert("CEP inexistente.")
                CEP.style.borderColor = "#ff0000"

                limparCampos()

            }else{

            const nome = document.querySelector("#nome").value = resp.logradouro;
    
            const bairro = document.querySelector("#bairro").value = resp.bairro;
    
            const estado = document.querySelector("#estado").value = resp.uf;
    
            const cidade = document.querySelector("#cidade").value = resp.localidade;
            }
    
    
        })
    }
    else{
        CEP.style.borderColor = "#ff0000"
        alert("Formato de CEP inválido. Tente novamente!")
        limparCampos()

    }

    
    
}

const limparCampos = () => {
            const nome = document.querySelector("#nome").value = "";
    
            const bairro = document.querySelector("#bairro").value = "";
    
            const estado = document.querySelector("#estado").value = "";
    
            const cidade = document.querySelector("#cidade").value = "";
}

