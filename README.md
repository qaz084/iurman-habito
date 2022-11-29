 ![Tux, the Linux mascot](/src/images/header/banner_01.png)
# HABITO
---

Este proyecto está focalizado principalmente en el aspecto del **Front** de un e-commerce de ropa.

## Userflow:

El usuario navega por las categorías de productos, pudiendo ingresar a cada una para ver su contenido.
Cada producto tiene su vista de detalle, con una breve descripción y la posibilidad de agregarlo al carrito.
Una vez en el carrito, se puede modificar la cantidad de productos comprados,agregar nuevos, así como eliminarlos o cancelar la compra. 
El carrito hace uso del **LocalStorage** para persistirlo en caso de que el usuario recargue la página.
Una vez aceptado el carrito, el usuario debe completar sus datos y se genera un ticket con la orden de compra, ese ticket se puede copiar y luego al ingresar a la seccion de Usuario, podemos pegarlo o escribirlo manualmente para ver los detalles de lo que se acaba de adquirir.


Tomé mi proyecto realizado enteramente en **Js Vanilla** y **CSS** para un Bootcamp y lo adapté usando **REACT** y reemplacé el backend hecho anteriormente en **SQL** con **Firestore** de **Firebase**.

*(Banners, Logo, estética y diseño fue enteramente diseñado por mi. La ropa y modelos son imágenes descargadas de internet)*

Al mismo tiempo aproveche para aprender Tailwind.
Realizando a mano todos los estilos gráficos y funcionalidades.
Como la implementación de la transparencia del Navbar o el botón que permite hacer un scroll to top entre otros.

Para pasar toda la data en **json** de mis productos y categorias, investigué en internet y di con la solución de una serie de scripts que se pueden encontrar en la carpeta *"/Firebase"*.

En el proyecto también se hizo uso de **customHooks** y funciones helpers además del **useContext** para la implementación del carrito de compras.



##### NOTA:
*Al proyecto le falta mejorar el aspecto responsive y la validación del formulario de registro del usuario que quiere realizar la compra.*


### Muchas gracias por leer. 😊

