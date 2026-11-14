// Lógica de la lista de tareas.
// Todas las funciones reciben una lista y devuelven una lista NUEVA.
// Aquí no se leen ni se escriben archivos: eso es trabajo de cli.js.

export function crearTarea(lista, titulo) {
  if (titulo === '') {
    throw new Error('El título no puede estar vacío');
  }
  const id = lista.length === 0 ? 1 : Math.max(...lista.map((t) => t.id)) + 1;
  return [...lista, { id, titulo, completada: false }];
}

export function completarTarea(lista, id) {
  const existe = lista.some((t) => t.id === id);
  if (!existe) {
    throw new Error(`No existe la tarea con id ${id}`);
  }
  return lista.map((t) => (t.id === id ? { ...t, completada: true } : t));
}

export function listarTareas(lista) {
  return lista.map((t) => `${t.completada ? '[x]' : '[ ]'} ${t.id}. ${t.titulo}`);
}

export function filtrarTareas(lista, estado = 'todas') {
  if (estado === 'todas') return lista;
  if (estado === 'pendientes') return lista.filter((t) => !t.completada);
  if (estado === 'completadas') return lista.filter((t) => t.completada);
  throw new Error(`Estado desconocido: "${estado}". Usa pendientes, completadas o todas`);
}
