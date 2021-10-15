## Your Box :
_El proyecto en si es un ecommerce en el cual el usuario puede navegar por el mismo, viendo los productos desde el home hasta poder verlo en detalle. Si el usuario quiere comprar algun item, tendra que iniciar sesion, de lo contrario solo podra ver en detalle el producto sin poder agregarlo al carrito._ 
_Es un proyecto SPA (single page aplication), construido con React.js con una base de datos en Firebase._
_Para la construccion del proyecto instale algunas librerias/frameworks como bootstrap 5.1 , splice js ( para poder agregar sliders/carousels )._

### Navegacion por el proyecto :
![Navegacion por la pagina](https://i.imgur.com/7rdAvq5.gif)
### Estructura del Proyecto :

_En cada proyecto React generalmente se crean los archivos basicos, los cuales no modifique, por lo tanto nada mas voy a definir la estructura de la carpeta 'src'._

1. src
  * views
    * _En esta carpeta estan las vistas del proyecto como home, category, etc... ._
***
  * services
     * _En esta carpeta estan las funciones con las que llamo a la base de datos y traigo los datos que necesite._
***
  * img
    * _En esta carpeta se encuentran las imagenes y ademas el archivo 'js' con el que las exporto para utilizarlas en otro archivo._
  ***
  * context
    *  _En esta carpeta se encuentran los archivos context, tales como userContext , notificationContext , cartContext los que utilizo a lo largo del proyecto._
  ***
  * components
    *  _En esta carpeta se encuentran todos los componentes que componen toda la pagina, en estos componentes se cargan los items que obtenemos desde la base de datos y los mostramos en las views._
    * _Algunas de las carpetas mas importantes:_
       *  _ItemListContainer - se llama a la base de datos con todos los items_
       *  _ItemListDetail - se llama a la base de dato con el item seleccionado_
       *  _Cart - logica para agregar al carrito , ademas de llamar a la base de datos para agregar los productos comprados_
       *  _NavBar - navegador el cual esta siempre presente en toda la navegacion por la pagina_
  ***