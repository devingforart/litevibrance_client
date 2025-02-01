// src/utils/slugify.ts
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Reemplaza los espacios por guiones
    .replace(/[^\w\-]+/g, '')       // Elimina caracteres no alfanuméricos
    .replace(/\-\-+/g, '-')         // Reemplaza múltiples guiones por uno solo
    .replace(/^-+/, '')             // Elimina guiones al inicio
    .replace(/-+$/, '');            // Elimina guiones al final
};
