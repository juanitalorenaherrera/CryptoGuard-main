# CryptoGuard — versión mejorada

CryptoGuard es una demostración educativa de sustitución de caracteres para encriptar y desencriptar mensajes en el navegador.

## Cómo usarlo

Abre `index.html` directamente en el navegador o publica toda la carpeta manteniendo la estructura de recursos. No hace falta instalar dependencias.

## Mejoras incluidas

- Diseño responsive para móvil, tablet y escritorio.
- Eliminación de anchos fijos que provocaban desplazamiento horizontal.
- Interfaz con tarjetas, instrucciones y estados visibles.
- Mejoras de accesibilidad: etiquetas, texto alternativo, foco visible y mensajes de estado.
- Validación que conserva el texto introducido en lugar de borrarlo.
- Contador de caracteres y límite de 500 caracteres.
- Copiado con `navigator.clipboard` y fallback compatible.
- Mensaje visual de confirmación al copiar.
- Año del footer actualizado automáticamente.
- Favicon normalizado como `img-Proyect/favicon.png`.
- Código JavaScript sin llamadas automáticas ni mensajes de consola al cargar.

## Nota de seguridad

El algoritmo usado es una sustitución de caracteres pensada para aprendizaje. No debe utilizarse para proteger información sensible ni se considera cifrado criptográfico real.
