# PWA COUNTER APP
 ## **Descripción**
 
 Aplicación desarrollada con LitElement y Open Web components que permite el registro, incio y cierre de sesión de usuarios mediante email y contraseña.
 Tras el inicio de sesión se mostrará una vista con un contador, que indicará el tiempo que ha pasado desde la última vez que se cerró sesión.
 En el caso del primer inicio de sesión tras el registro, el contador comenzará en 00:00:00:00.
 
 **CARACTERÍSTICAS DETALLADAS**
* Posibilita la creación de usuarios mediante email y contraseña.
* Permite el inicio de sesión, accediendo a una vista con un contador.
* Permite el cierre de sesión, guardando la fecha y hora del mismo para calcular el tiempo que un usuario pasa desconectado.
* Cumple con el concepto de desarrollo mobile first.
* Comportamiento responsive.
* Incluye funcionalidades de PWA, añadiendo un manifest con iconos de diferentes tamaños, estilos y configuración de comportamiento de la app.
* Validaciones en el formulario de registro (No permite contraseñas de menos de 4 caracteres o con espacios así como tampoco el registro de un usuario ya existente en la base de datos)
* Validaciones en el formulario de login (No permite la entrada si la contraseña es incorrecta)


**DESCARGA**

Descargar archivo de la rama develop.

**INSTALACIÓN**

Para el correcto funcionamiento de la aplicación es necesario tener Node.js instalado. Se puede descargar desde su página oficial: https://nodejs.org/es/.
</br>


## Instalación

    npm run install

## Ejecutar la app en modo desarrollo

    npm run start
    
## Realizar test unitarios

    npm run test

## Realizar comprobaciones de linter

    npm run lint


## Ejecutar la app en modo producción
    
    npm run build
    npm run start:build



**INFORMACIÓN IMPORTANTE SOBRE LA API**

La base de datos está alojada en MongoDb y la API REST desplegada en la plataforma de heroku.</br>
Debido a que la plataforma de heroku es posible que esté en reposo y tarde en iniciarse o que pueda dar algún error aquí indico instrucciones para poder probar la aplicación corriendo la api en local.</br>

Acceder a la app y dentro de src/servicios/index.js sustituír la baseURL por http://localhost:3001/api (Está comentada justo debajo).
Iniciar la API con las instrucciones provistas en el readme y mantenerla en ejecución. (Se puede acceder a la api en el enlace que pongo justo abajo): </br>
Iniciar la app y escribir el comando de ejecución.


**ACCESO A LA API REST UTILIZADA [DESDE ESTE ENLACE](https://github.com/aliparra/pwa-api )**


## **Snapshots**

![Captura vista de incicio de sesión](https://res.cloudinary.com/dv4pkbmin/image/upload/v1631871825/pwa-counter/tres_r140hi.png)
![Captura vista de registro](https://res.cloudinary.com/dv4pkbmin/image/upload/v1631871768/pwa-counter/dos_v9kskh.png)
![Captura área personal](https://res.cloudinary.com/dv4pkbmin/image/upload/v1631871626/pwa-counter/Captura_de_pantalla_de_2021-09-17_11-07-49_jo1gzf.png)

