# architecture.md

## Partes
- `src/tareas.js`: las reglas. Crear, completar, listar y filtrar tareas.
- `src/cli.js`: la entrada. Lee el comando, carga `tareas.json`, llama a las
  reglas, guarda y muestra el resultado.
- `test/tareas.test.js`: pruebas de las reglas.

## Flujo
comando → `cli.js` → carga `tareas.json` → función de `tareas.js` → guarda → pantalla

## Por qué está separado así
Las reglas no dependen de archivos ni de la pantalla: así se prueban solas y
se pueden reutilizar el día que haya una versión web.
