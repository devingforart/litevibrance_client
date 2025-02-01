import os

# Lista que incluye directorios y archivos individuales
directories = [


"/home/southatoms/Escritorio/lite_vibrance_web/src"



]

file_extensions = ['slint','rs']
output_file = 'plurals.txt'

def is_code_file(file):
    return any(file.endswith(ext) for ext in file_extensions)

def search_and_combine_files(directories, output_file):
    with open(output_file, 'w') as outfile:
        for path in directories:
            if os.path.isfile(path):  # Si es un archivo
                if is_code_file(path):
                    with open(path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(f'{path}\n\n')
                        outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')
            elif os.path.isdir(path):  # Si es un directorio
                for root, _, files in os.walk(path):
                    for file in files:
                        if is_code_file(file):
                            file_path = os.path.join(root, file)
                            with open(file_path, 'r', encoding='utf-8') as infile:
                                content = infile.read()
                                outfile.write(f'{file_path}\n\n')
                                outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')

# Run the function
search_and_combine_files(directories, output_file)
print(f'Todos los archivos de código se han copiado en {output_file}')
