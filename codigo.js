document.addEventListener('DOMContentLoaded', function() {
    const visor = document.getElementById('visor');
    const imagenAmpliada = document.getElementById('imagenAmpliada');
    const cerrar = document.querySelector('.cerrar');
    const imagenes = document.querySelectorAll('.item img');
    
    // Configurar clic para cada imagen
    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            imagenAmpliada.src = this.src;
            visor.classList.add('activo');
        });
    });
    
    // Cerrar visor
    cerrar.addEventListener('click', function() {
        visor.classList.remove('activo');
    });
    
    // Cerrar al hacer clic fuera
    visor.addEventListener('click', function(e) {
        if(e.target === visor) {
            visor.classList.remove('activo');
        }
    });
});