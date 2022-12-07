# React Hooks

## UseState :

Todos los componentes de React tienen un estado, que puede cambiar con el tiempo. En el caso del hook Use State, lo manipularemos con desestructuración. 

```js 

const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
```

Como se puede observar, el estado no se cambia directamente, sino con una función. Usamos la desesttructuración para cambiar los estados, declarando una variable y su setter, con useState(). Podemos declarar el valor inicial que queramos dentro de los paréntesis. Podemos utilizar variables declaradas o datos estáticos.

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
