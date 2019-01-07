# reactjs-test
Testing seguimiento de manual reactive programing

Proyecto levantado de forma manual en react, permite utilizar el paquete de redux para el cambio de estados entre componentes, y está configurado
para el uso en local de base de datos creada en mongodb.

Lo interesante de la web lanzada mediante

npm start
es el menu que permite cambiar el contenedor principal según se seleccione un link u otro:

Para ello redux utiliza las siguientes páginas:

**componentes (apartado vista redux):
app/App.js
componentes/header/header.js
componentes/header/FilterLink.js

**configuración redux (apartado modelo redux):
app/actions/Actions.js
app/const.js
app/reducers/index.js
app/reducers/PageReducer.js

---

Conexión a base de datos para consumir de base de datos:

Mediante la ruta /notes configurada en server.js podemos recoger el json obtenido de la tabla Notes.

Su correcto uso se puede ver en app/Notas.js, donde se lista los elementos.
