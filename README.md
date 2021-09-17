# PWA COUNTER APP.
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
* 
**INSTALACIÓN**

Para el correcto funcionamiento de la aplicación es necesario tener Node.js instalado. Se puede descargar desde su página oficial: https://nodejs.org/es/.
</br>


**INFORMACIÓN IMPORTANTE SOBRE LA API**
La base de datos está alojada en MongoDb y la API REST desplegada en la plataforma de heroku.</br>
Debido a que la plataforma de heroku es posible que esté en reposo y tarde en iniciarse o que pueda dar algún error aquí indico instrucciones para poder probar la aplicación corriendo la api en local.</br>

Acceder a la app y dentro de src/servicios/index.js sustituír la baseURL por http://localhost:3001/api (Está comentada justo debajo).
Iniciar la API con las instrucciones provistas en el readme. (Se puede acceder a la api en el enlace que pongo justo abajo): </br>


**ACCESO A LA API REST UTILIZADA [DESDE ESTE ENLACE](https://github.com/aliparra/pwa-api )**


## **Snapshots**

![Home crud app snapshoot](https://res.cloudinary.com/dv4pkbmin/image/upload/v1624552027/Basic%20crud%20captures/Captura_de_pantalla_de_2021-06-24_18-26-57_atqpmp.png)
![Home crud app snapshoot](https://res.cloudinary.com/dv4pkbmin/image/upload/v1624551971/Basic%20crud%20captures/Captura_de_pantalla_de_2021-06-24_18-23-55_xelobd.png)
![Home crud app snapshoot](https://res.cloudinary.com/dv4pkbmin/image/upload/v1624551971/Basic%20crud%20captures/Captura_de_pantalla_de_2021-06-24_18-24-11_w0ffcv.png)
![Home crud app snapshoot](https://res.cloudinary.com/dv4pkbmin/image/upload/v1624552034/Basic%20crud%20captures/Captura_de_pantalla_de_2021-06-24_18-26-35_fcnazc.png)
![Home crud app snapshoot](https://res.cloudinary.com/dv4pkbmin/image/upload/v1624551971/Basic%20crud%20captures/Captura_de_pantalla_de_2021-06-24_18-25-05_lugjdu.png)
