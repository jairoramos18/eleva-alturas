var updateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(), 
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(), 
        day = currentDate.getDate(), // Corregido: Obtener el día del mes
        month = currentDate.getMonth(), 
        year = currentDate.getFullYear();
 
    const weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];
 
    document.getElementById('weekDay').textContent = weekDays[weekDay];
    document.getElementById('day').textContent = day;
 
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
 
    document.getElementById('month').textContent = months[month];
    document.getElementById('year').textContent = year;
 
    document.getElementById('hours').textContent = hours;
 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};

updateTime();

setInterval(updateTime, 1000);


// Obtener elementos del DOM
const searchInput = document.getElementById('searchInput');
const resultados = document.querySelectorAll('.resultado');

// Escuchar el evento "input" en la barra de búsqueda
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Iterar a través de los elementos de resultado
  resultados.forEach((resultado) => {
    const textoResultado = resultado.textContent.toLowerCase();

    // Comprobar si el término de búsqueda está contenido en el texto del resultado
    if (textoResultado.includes(searchTerm)) {
      resultado.style.display = 'block'; // Mostrar el elemento si hay una coincidencia
    } else {
      resultado.style.display = 'none'; // Ocultar el elemento si no hay coincidencia
    }
  });
});
