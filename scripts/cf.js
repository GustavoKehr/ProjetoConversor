let cf = document.getElementById("ccf")

let r = document.getElementById("res")

function converter(){

    if(cf.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(cf.value)

        cf = numDig * 1.8 + 32

        r.innerHTML = `${cf}`

    }

}

function limpar(){
    location.reload()
}