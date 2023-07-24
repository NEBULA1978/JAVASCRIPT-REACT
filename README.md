# JAVASCRIPT-REACT
Reapaso básico Javascript para React
Moverse por los commit para ver ejerccios diferentes:

    Ir al commit deseado:

Una vez que tengas el identificador del commit que deseas ver,
puedes usar el comando git checkout para moverte a ese commit y
explorar el código en ese estado. Supongamos que quieres ver el
código del commit con el identificador c3106ef00a6a1b85898d1c95355db1520348d45e
(el primer commit mencionado en tu lista):
git checkout c3106ef00a6a1b85898d1c95355db1520348d45e

Si prefieres ver el código de una rama específica, 
por ejemplo, la rama "fuciones-anonimas" que contiene 
el commit mencionado:

git checkout fuciones-anonimas

    Explorar el código en el commit:

Después de ejecutar el comando git checkout, estarás en un estado
"desconectado" conocido como "detached HEAD", lo que significa que
no estás en ninguna rama. Esto es normal cuando te mueves a un commit específico.

Puedes explorar y revisar el código en ese commit particular 
utilizando cualquier editor de código o herramienta que prefieras.
Al estar en ese commit, tendrás acceso al estado exacto del 
repositorio tal como estaba en ese momento.

Es importante tener en cuenta que al moverte a un commit 
específico en modo "detached HEAD", no puedes hacer nuevos 
commits directamente en esa posición. Si deseas realizar cambios, 
te recomendamos crear una nueva rama desde ese commit usando el
comando git checkout -b nueva-rama.
