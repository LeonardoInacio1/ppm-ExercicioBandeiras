function mostrarFoto(){
    var a = document.getElementById("comboEstados");
    var comboEstados = a.options[a.selectedIndex].value;
    var img = document.getElementById("imagem");
    var nome = document.getElementById("nome");

    if(comboEstados == "parana"){
        img.innerHTML = "<img src='./imagens/BandeiraPR.png' width= '250px'></img>";
        nome.innerHTML = "<p> Paraná <p>";

    }else if(comboEstados == "santacatarina"){
        img.innerHTML = "<img src='./imagens/BandeiraSC.png' width= '250px' ></img>";
        nome.innerHTML = "<p> Santa Catarina </p>";
    
    }else if(comboEstados == "riograndedosul"){
        img.innerHTML = "<img src='./imagens/BandeiraRS.jpg' width= '250px'></img>";
        nome.innerHTML = "<p> Rio Grande do Sul </p>";
    } 
}
