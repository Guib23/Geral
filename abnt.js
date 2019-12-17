let livro=[];
function abnt(){
livro.autor = document.getElementById("autor").value;
livro.sobre2 = document.getElementById("sobre").value;
livro.tit1 = document.getElementById("tit").value;
livro.edi1 = document.getElementById("edi").value;
livro.loca1 = document.getElementById("local").value;
livro.edit1 = document.getElementById("edit").value;
livro.ano1 = document.getElementById("ano").value;
document.getElementById("texto").innerText=`${ livro.sobre2.toUpperCase() } ${ livro.autor.toUpperCase().slice(0,1) } ${ livro.tit1.toLowerCase() } ${ livro.edi1.toLowerCase() } ${ livro.loca1.toLowerCase() } ${ livro.edit1.toLowerCase() } ${ livro.ano1.toLowerCase() }`
}

