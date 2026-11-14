# AGENTS.md

## Qué es
Lista de tareas por línea de comandos. Node.js, sin dependencias externas.

## Comandos
- Probar: `npm test`
- Ejecutar: `node src/cli.js listar`

## Reglas de código
- `src/tareas.js` contiene solo reglas: no lee archivos ni imprime en pantalla.
- `src/cli.js` es el único que lee y escribe `tareas.json` y usa `console`.
- Las funciones de `tareas.js` devuelven una lista nueva; nunca modifican la que reciben.
- Nombres, mensajes y comentarios en español.
- Toda función nueva en `tareas.js` lleva pruebas en `test/tareas.test.js`.

## Límites
- No agregar dependencias sin preguntar.
- No modificar ni borrar pruebas existentes para que pasen.
- No tocar archivos fuera de lo que pide la tarea.
- Cambios pequeños: una tarea a la vez.

## Antes de dar algo por terminado
- `npm test` pasa completo.
- Explica qué cambiaste y qué no pudiste verificar.
