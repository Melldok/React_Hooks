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

## Crear provider 

El provider (importado de react-redux, necesita del store creado anteriormente)

```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
```

## Slices 

Nos permite crear reducers, nombrarlos y definir las acciones con las que se van a disparar. Es una **funcion que recibe un objeto**. Ese objeto tiene nombre, estado inicial y unos reducers.


```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```


### Utilizar nuestros states y data del store con los hooks useSelector y useDispatch :

```js
  const { counter } = useSelector( state => state.counter)
```

### Thunks

Los thunks son acciones asincronas que disparan otra accion cuando se resuelve la peticion asincrona.


