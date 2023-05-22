let horas = new Date()
document.write(horas.getHours());
document.write(':')
let minutos = new Date()
document.write(minutos.getMinutes());

// Data para o footer

date = document.getElementById('date');
let data = new Date();
let dia = ('0' + data.getDate()).slice(-2);
let mes = data.getMonth();
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let ano = data.getFullYear()

date.innerHTML += `<p id="date"> ${dia} de ${meses[mes]} de ${ano} <\p>`
