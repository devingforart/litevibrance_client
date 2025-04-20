import os

files_to_process = [

"/home/southtoms/Escritorio/develop/personal/calmhc/src"


]
ignore_list = [
]


file_extensions = ['ts', 'tsx', 'json']
output_file = '_chasquido.txt' 

def is_code_file(file_path):
    return any(file_path.endswith(ext) for ext in file_extensions)

def should_ignore(path):
    """Verifica si la ruta debe ser ignorada según ignore_list."""
    return any(ignore_item in path for ignore_item in ignore_list)

def process_path(path, outfile):
    if should_ignore(path):
        print(f'Ignorando {path} porque está en la lista de exclusión.')
        return

    if os.path.isfile(path):
        if is_code_file(path):
            try:
                with open(path, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                outfile.write(f'{path}\n\n')
                outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')
            except UnicodeDecodeError:
                print(f'El archivo {path} no es un archivo de texto válido.')
            except Exception as e:
                print(f'Error al leer {path}: {e}')
        else:
            print(f'La ruta {path} no coincide con las extensiones definidas.')
    elif os.path.isdir(path):
        for root, _, files in os.walk(path):
            if should_ignore(root):
                print(f'Ignorando directorio {root} porque está en la lista de exclusión.')
                continue
            for file in files:
                file_path = os.path.join(root, file)
                if should_ignore(file_path):
                    print(f'Ignorando archivo {file_path} porque está en la lista de exclusión.')
                    continue
                if is_code_file(file_path):
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            content = infile.read()
                        outfile.write(f'{file_path}\n\n')
                        outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')
                    except UnicodeDecodeError:
                        print(f'El archivo {file_path} no es un archivo de texto válido.')
                    except Exception as e:
                        print(f'Error al leer {file_path}: {e}')
    else:
        print(f'La ruta {path} no es un archivo ni un directorio válido.')

with open(output_file, 'w', encoding='utf-8') as outfile:
    for path in files_to_process:
        process_path(path, outfile)

print(f'Todos los archivos de código se han copiado en {output_file}')

