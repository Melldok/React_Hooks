# Redux

## Redux es un contenedor prededcible del estado de nuestra aplicacion. Es una estructura independiente a React. Se puede utilizar en angular, react, vue, etc. 

### Store -- Fuente unica de la verdad

Es donde se encuentra la informacion que mis componentes consumen, podemos verlo literalmente como un supermercado. Nosotros necesitamos productos, vamos al supermercado y lo traemos, en casa lo consumimos. 

Nuestros componentes acuden al store, cogen la informacion que necesitan. Si necesitan cual es el usuario activo, cuantas notificaciones tiene el usuario, cuantas notificaciones mostrar en pantalla. EN resumen, acudimos al store cuando necesitamos **informacion** 

Esto se utiliza mediante el **Reducer**. (Funcion pura que maneja un estado) El estado le da la informacion a la pagina para que muestre la informacion, la vista no modifica el estado directamente, solo lo lee. En el caso de que se necesite modificar el estado, se genera una **accion** , esa accion se envia al reducer y este sabra lo que hacer. Despues de ejecutar esta accion, el reducer genera un **nuevo estado** y se lo notifica a la vista. 

En redux, el estado lo provee el **store**, que se lo sirve a la **vista** , cuando se necesita modificar, se genera una **accion** , esta accion le envia la informacion al **dispatcher** y se lo mandara a un **reducer "central"** que es la combinacion de todos los reducers de nuestra aplicacion, ese reducer generara un nuevo **estado** , que se notificara a la **vista** todo esto es un proceso sincrono. En el momento en el que el view necesite una peticion asincrona, se necesitan los **middlewares** , que utilizan a la **API** para mandar la info al dispatcher. 

https://dev.to/oahehc/redux-data-flow-and-react-component-life-cycle-11n -- Diagrama de flujo

<br />

# Redux Toolkit 

Es un set de herramientas que hacen el desarrollo con redux mas rapido y eficiente.

## Crear Redux Store (Fuente de la verdad)

Aqui es donde estaran centralizados nuestros estados,los cuales podremos servir a todos los componentes de nuestra app. En react, para proveer esa store, necesitaremos el Provider que ofrece react-redux. 


```js
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
    reducer: {},
    })
```