# React Hooks

## useState :

Todos los componentes de React tienen un estado, que puede cambiar con el tiempo. En el caso del hook Use State, lo manipularemos con desestructuración. 

```js 

const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
```

Como se puede observar, el estado no se cambia directamente, sino con una función. Usamos la desesttructuración para cambiar los estados, declarando una variable y su setter, con useState(). Podemos declarar el valor inicial que queramos dentro de los paréntesis. Podemos utilizar variables declaradas o datos estáticos.

## useState con objetos: 

```js
  export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = counter

  return (
    <>
        <h1>Counter: {counter1}</h1>
        <h1>Counter: {counter2}</h1>
        <h1>Counter: {counter3}</h1>


        <hr />

        <button className="btn" onClick={ () => setCounter({

            ...counter,
            counter1: counter1 +1,

        })}>+1</button>
    </>
  )
}
``` 

Cuando queremos usar useState con un objeto, debemos mandar todos los valores del objeto a actualizar. Si queremos conservar inalteradas las el resto de propiedades del objeto, piodemos usar el operador spread.


## useEffect

Este hook se utiliza principalmente para evitar la repetición de peticiones, es decir, queremos que se dispare un efecto cuando ocurra X cosa.

```js
        useEffect( () => {
        getGifs(category)
    },[])
```

useEffect tiene dos argumentos. Una función (callback) y una lista de dependencias (Las condiciones sobre las que queremos volver a ejecutar nuestra función) Si dejamos esto como un array vacío, la función se disparará solo la primera vez que se construye nuestro componente.

## Custom Hooks

Los custom hoooks se utilizan para ahorrarnos mucha lógica y código en la creación de componentes. Además es reutilizable en otros hooks. Utiliza el principio "Dont repeat yourself". Como convención, se inician desestructurando un objecto y utilizando use. Como con otros hooks. 

**--Un hook no es más que una función que regresa algo--**

**Declaración del custom hook con desestructuración en el componente**

```js
  export const GifGrid = ({ category }) => {  

    const {images, isLoading} = useFetchGifs( category );
  
    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCard 
                            key={image.id}
                            {...image}
                            />
                    ))
                }
            </div>
            
        </>
  )
}


```
**Fabricación del custom hook**

```js
  export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
        }

    useEffect( () => {
        getImages();
    },[])

 return {
    images,
    isLoading
 }
}

```


Tanto las helper functions como los custom hooks son funciones. La diferencia principal entre una helper function y un custom hook es que el custom hook utiliza otros hooks (State, Effect..) para realizar su lógica, y además interviene en el ciclo de vida del componente. A diferencia de las helper functions que sirven para realizar acciones lógicas concretas.



## useRef

Nos permite mantener una referencia, y cuando esa referencia cambia, no re-renderizar nuestro componente. 


## useLocaton 

Permite lcoalizar la ruta activa que estamos utilizando en este momento. Muy útil si queremos cambiar algún elemento del DOM dependiendo de ella.