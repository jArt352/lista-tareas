# AGENTS.md

## Qué es
Lista de tareas en una página web. HTML, CSS y JavaScript, sin dependencias externas.

## Comandos
- Probar: `npm test`
- Ver la página: `npm start` y abrir http://localhost:3000

## Reglas de código
- `public/tareas.js` contiene solo reglas: no toca la página ni el almacenamiento.
- `public/app.js` es el único que usa la página (`document`) y `localStorage`.
- Las funciones de `tareas.js` devuelven una lista nueva; nunca modifican la que reciben.
- Los colores y el diseño viven en `public/estilos.css`, no en el JavaScript.
- Nombres, mensajes y comentarios en español.
- Toda función nueva en `tareas.js` lleva pruebas en `test/tareas.test.js`.

## Límites
- No agregar dependencias sin preguntar.
- No modificar ni borrar pruebas existentes para que pasen.
- No tocar archivos fuera de lo que pide la tarea.
- No cambiar el aspecto general (colores, tipografía) si la tarea no lo pide.
- Cambios pequeños: una tarea a la vez.

## Antes de dar algo por terminado
- `npm test` pasa completo.
- Si cambió la pantalla, abre la página y compruébalo.
- Explica qué cambiaste y qué no pudiste verificar.
