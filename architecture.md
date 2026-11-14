# architecture.md

## Partes
- `public/index.html`: la página. Define dónde van el formulario y la lista.
- `public/estilos.css`: los colores y el diseño.
- `public/app.js`: la pantalla. Lee lo que escribe la persona, llama a las
  reglas, guarda en el navegador y dibuja la lista.
- `public/tareas.js`: las reglas. Crear y alternar tareas.
- `server.js`: servidor mínimo que entrega la carpeta `public`.
- `test/tareas.test.js`: pruebas de las reglas.

## Flujo
clic o Enter → `app.js` → función de `tareas.js` → guarda en el navegador → se dibuja la lista

## Por qué está separado así
Las reglas no dependen de la página ni del navegador: así se prueban solas y
se pueden reutilizar el día que haya otra pantalla (por ejemplo, un móvil).
