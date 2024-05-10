function maior() {
    var data1 = document.getElementById('data1').value; 
    var data2 = document.getElementById('data2').value; 
  
    var pdata = new Date(data1);
    var sdata = new Date(data2);
  
    if (pdata > sdata) {
      alert("A primeira data é maior...");
    } else if (sdata > pdata) {
      alert("A segunda data é maior...");
    } else {
      alert("As datas são iguais.");
    }
  }
  
  function diferenca() {
    var data1, data2;
  
    var data1 = document.getElementById("data1").value;
    var data2 = document.getElementById("data2").value;
  
    var sdata = new Date(data2);
    var pdata = new Date(data1);
    var diferenca = sdata.getTime() - pdata.getTime();
    var dias = diferenca / (1000 * 60 * 60 * 24);
    alert("A diferença entre as datas é de " + dias + " dias.");
  }
  
  function mostrarDataAtual() {
    var dataAtual = new Date();
    var hour = dataAtual.getHours();
    var minutes = dataAtual.getMinutes();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; 
    var ano = dataAtual.getFullYear();
  
    var dataFormatada = hour + ':' + minutes + 'h   ' + dia + '/' + mes + '/' + ano;
  
    return dataFormatada;
  }
  
  document.getElementById('dataAtual').textContent = mostrarDataAtual();
  
  