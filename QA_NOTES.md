# Pruebas de la versión mejorada

La versión local se abrió correctamente en el navegador con el título `CryptoGuard | Encriptador educativo`.

En el viewport de prueba no se detectó desbordamiento horizontal: el ancho del documento y el ancho visible coincidieron en 1265 px.

Se comprobó el flujo de encriptado con `hola mundo`, que produjo `hoberlai mufatndober`, y el flujo de desencriptado recuperó `hola mundo`.

También se verificó la validación de una entrada no permitida (`Hola2`). El contenido se conserva, aparece un mensaje específico indicando el carácter no permitido y el resultado anterior no se sobrescribe.

La sintaxis de `home-js.js` pasó la comprobación de Node y se confirmó que no quedan referencias a los anchos antiguos, llamadas inline `onclick`, el script con extensión mayúscula ni mensajes `console.log`.
