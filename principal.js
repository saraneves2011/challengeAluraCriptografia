function copiar(){
      
    var  copia = document.getElementById("text");
    copia.select();
    document.execCommand("copy");
    copia.select();
    document.execCommand("cut");
    
  }

    function criptografar(){
    var textarea = document.getElementById("criptografar");

    var n = textarea.value;

    n = n.replace(/(e)/g,'enter');

    n = n.replace(/(i)/g,'imes');

    n = n.replace(/(a)/g,"ai");

    n = n.replace(/(o)/g,'ober');

    n = n.replace(/(u)/g,'ufat');
  
    document.getElementById("text").value = n;

    document.getElementById("inserir").style.display = "inline";
    document.getElementById("imagem").style.display = "none";

    textarea.select();
    document.execCommand("cut");
   

}
function descriptografar(){
    var textarea = document.getElementById("criptografar");

    var n = textarea.value;

    n = n.replace(/enter/g,'e');

    n = n.replace(/imes/g,'i');

    n = n.replace(/(ai)/g,"a");

    n = n.replace(/(ober)/g,'o');

    n = n.replace(/(ufat)/g,'u');
  
    document.getElementById("text").value = n;
  }
