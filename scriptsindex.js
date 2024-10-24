 function addBlur(activeImg) {
            document.querySelectorAll('.columna').forEach(col => {
                // Desenfocar las demás columnas excepto la que contiene la imagen activa
                if (!col.contains(activeImg)) col.classList.add('blurred');
            });
        }

        function removeBlur() {
            document.querySelectorAll('.columna').forEach(col => col.classList.remove('blurred'));
        }

