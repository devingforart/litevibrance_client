import os
import re

# Lista inicial de archivos o directorios a analizar
directories = [
"/home/southatoms/Escritorio/lite_vibrance_web/src"

]
file_extensions = ['.js', '.jsx', '.ts', '.tsx']
output_file = 'plurals.txt'
analyzed_files = set()  # Para evitar procesar el mismo archivo varias veces

def is_code_file(file):
    """ Verifica si el archivo tiene una extensión válida de código """
    return any(file.endswith(ext) for ext in file_extensions)

def resolve_import_path(import_path, current_dir):
    """
    Resuelve la ruta absoluta de un archivo importado.
    """
    # Si es una importación relativa (./ o ../)
    if import_path.startswith('.') or import_path.startswith('/'):
        file_path = os.path.abspath(os.path.join(current_dir, import_path))

        # Si es un directorio, buscar un `index.js` o `index.ts` dentro
        if os.path.isdir(file_path):
            for ext in ['index.js', 'index.ts']:
                possible_path = os.path.join(file_path, ext)
                if os.path.exists(possible_path):
                    print(f"📂 Importación detectada como directorio: {possible_path}")  # Debug
                    return possible_path

        # Si no tiene extensión, probar con .js, .jsx, .ts, .tsx
        if not any(file_path.endswith(ext) for ext in file_extensions):
            for ext in file_extensions:
                possible_path = file_path + ext
                if os.path.exists(possible_path):
                    print(f"📄 Importación sin extensión resuelta: {possible_path}")  # Debug
                    return possible_path

        # Si ya tiene extensión y existe
        elif os.path.exists(file_path):
            print(f"✅ Importación resuelta: {file_path}")  # Debug
            return file_path

    return None  # No se encontró una ruta válida

def find_imports(file_content, current_dir):
    """
    Encuentra las importaciones en un archivo y devuelve sus rutas absolutas si son locales.
    """
    imports = []
    
    # Expresión regular mejorada para detectar importaciones con llaves y comillas
    pattern = re.compile(r'^\s*(?:import|require)\s*(?:[\w{}*,\s]*)\s*from\s*["\'](.*?)["\']', re.MULTILINE)

    for match in pattern.findall(file_content):
        resolved_path = resolve_import_path(match, current_dir)

        if resolved_path and resolved_path not in analyzed_files:
            print(f"✅ Archivo importado detectado: {resolved_path}")  # Debug
            imports.append(resolved_path)
        else:
            print(f"❌ Archivo importado NO encontrado: {match}")  # Debug

    return imports

def search_and_combine_files(directories, output_file):
    """
    Busca y transcribe archivos en la lista, incluyendo sus importaciones recursivamente.
    """
    with open(output_file, 'w', encoding='utf-8') as outfile:
        queue = list(directories)

        while queue:
            path = queue.pop(0)
            
            if path in analyzed_files:  # Evitar procesar el mismo archivo varias veces
                continue
            analyzed_files.add(path)

            print(f"\n📄 Procesando: {path}")  # Debug

            if os.path.isfile(path):  # Si es un archivo
                if is_code_file(path):
                    with open(path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(f'{path}\n\n')
                        outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')

                        # Buscar importaciones y agregarlas a la cola
                        imports = find_imports(content, os.path.dirname(path))
                        queue.extend(imports)  # Aquí agregamos importaciones para análisis recursivo

            elif os.path.isdir(path):  # Si es un directorio
                for root, _, files in os.walk(path):
                    for file in files:
                        file_path = os.path.join(root, file)
                        if is_code_file(file_path) and file_path not in analyzed_files:
                            queue.append(file_path)

# Ejecutar la función
search_and_combine_files(directories, output_file)
print(f'\n✅ Todos los archivos de código y sus importaciones se han copiado en {output_file}')
