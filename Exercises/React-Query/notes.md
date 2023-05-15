# Para qué utilizar React Query #

React Query es una herramienta útil que nos permite crear código más eficiente cuando manejamos estados asíncronos y peticiones HTTP, promesas, etc. También es útil con mutaciones y otro tipo de peticiones.



## Ejemplos ##

React query funciona como cualquier custom hook, tiene muchas funciones built in que nos permiten ahorrar código, escribir de manera más eficiente pero sobre todo de forma más legible. 

### Llamadas a API más eficientes y limpias, con funciones incorporadas ###


```tsx

    export const PreQuery = () => {

  const getRandomNumberFromApi = async():Promise<number> => {
    
    const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const numberString = await resp.text();

    // throw new Error('Error en la llamada a la API')
    return +numberString

    }
  
    const [number, setNumber] = useState<number>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>()
    const [key, forceRefetch] = useReducer((x) => + 1, 0)

    useEffect(() => {
      setIsLoading(true);
      getRandomNumberFromApi()
      .then(setNumber)
      .catch(error => setError(error.message))
    }, [key]);

    useEffect(() => {
      if(number) {
        setIsLoading(false)
      }
    }, [number])

    useEffect(() => {
      if(error) {
        setIsLoading(false)
      }
    }, [error])

  return (
    <>
      <div className='App App-header'>
        
        {isLoading ? 
          <h2>Cargando...</h2> : 
          !error && (<h2>Número aleatorio : {number}</h2>)
        }

        {
          !isLoading && error && (<h3>{error}</h3>)
        }

        <button onClick={forceRefetch} disabled={isLoading}>
        {
            isLoading ? '...' : 'Nuevo Número'
        }
        </button>
         

      </div>
    </>
  )
}

```


A medida que el proyecto crece y tengamos más peticiones a APIs, cobra cada vez más sentido utilizar React query. 


```tsx

const getRandomNumberFromApi = async():Promise<number> => {
    
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await resp.text();

  // throw new Error('Error en la llamada a la API')
  return +numberString

  }

export const App = () => {
  
    const query = useQuery(
      // El primer array indica a useQuery cómo queremos que maneje nuestro caché 
      ['randomNumber'],
      // La función que voy a usar para cargar esta información. (Técnicamente siempre va a ser asíncrona)
      getRandomNumberFromApi
    );
  
    return (
      <>
        <div className='App App-header'>
          
          {query.isFetching ? 
            <h2>Cargando...</h2> : 
            <h2>Número aleatorio : {query.data}</h2>
          }
  
          {
            !query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
          }

          {/* Utilizamos isFetching porque isLoading es true cuando se está cargando por primera vez. isFetching es true cuando se está refrescando la información. */}
          
          <button onClick={() => query.refetch()} disabled={query.isFetching}>
            {
                query.isFetching ? '...' : 'Nuevo Número'
            }
          </button>
           
  
        </div>
      </>
    )
  }
    

```

Con sus funciones incorporadas, podemos escribir código más claro, más reutilizable y más potente.


## Botones de estado ##

React Query dispone de varios botones de estado que nos indican en qué punto se encuentra nuestra posición. 

    Fresh -- La data se acaba de obtener
    Fetching -- La data se está obteniendo
    Paused -- La data se está obteniendo pero se ha pausado
    Stale -- La data está desactualizada (Es muy útil para tener una mejor experiencia de usuario ya que se estará mostrando algún tipo de dato o para hacer refetch en un tiempo determinado que consideremos prudente, para no bombardear la API con peticiones innecesarias)
    Inactive -- La data no se está obteniendo ni está desactualizada 


## Especificaciones de comportamiento ##

```typescript
    const labelsQuery = useQuery(
          // Array que determina el caché
        ['labels'],
          // Función que se ejecuta para obtener los datos
        getLabels,
        {
          // Esta propiedad impide que se haga prefetch de los datos cuando el usuario clicka fuera de la ventana y vuelve a clickar en ella. Tenerl oactivo sirve por ejemplo siqueremos que nuestro usuario tenga siempre la última versión de los datos, si va a otra ventana y vuelve a la nuestra.
          refetchOnWindowFocus: false,
          // Esta propiedad determina un tiempo de vida de los datos en caché. En este caso, los datos se refrescarán cada 5 minutos. Muy útil para reducir el número de llamadas a una API.
          staleTime: 1000 * 60 * 5, 
          // Nos sirve para mostrar una información antes de que se resuelva la promesa.
          placeholderData: [
            {
              id: 69105383,
              node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
              url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
              name: "Browser: IE",
              color: "c7def8",
              default: false
            },
            {
              id: 2192194047,
              node_id: "MDU6TGFiZWwyMTkyMTk0MDQ3",
              url: "https://api.github.com/repos/facebook/react/labels/Component:%20Flight",
              name: "Component: Flight",
              color: "c4523e",
              default: false
              
            }
          ],
         // Esta propiedad le dice a React Query que confíe en estos datos, que los muestre como frescos y no los vuelva a buscar.
          initialData: [
            {
              id: 69105383,
              node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
              url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
              name: "Browser: IE",
              color: "c7def8",
              default: false
            },
            {
              id: 2192194047,
              node_id: "MDU6TGFiZWwyMTkyMTk0MDQ3",
              url: "https://api.github.com/repos/facebook/react/labels/Component:%20Flight",
              name: "Component: Flight",
              color: "c4523e",
              default: false
              
            }
              
          ],
        }
      );
```


## Funciones incorporadas interesantes ##
    
    query.isLoading -- Se refiere a los datos que tiene el propio componente físicamente. Si el componente no ha cargado nada del fetch y tampoco tiene nada en caché, está cargando, pero una vez ha cargado la información por primera vez, isLoading será false.
    query.isFetching -- Se dispara siempre que estemos haciendo una petición a la API, ya sea l a primera vez o refrescando info. 
    query.initialData -- 
    query.isError --
    query.refetch --
    query.data --
    query.error --
    query.isStale --
    query.isIdle --
    query.isFetchingError --
    query.isFetchingMore --
    query.isPlaceHolderData --
    query.isPreviousData --
    query.isRefetchError --

## Mejoras de experiencia de Usuario ##
    

## Consideraciones ##

Es más conveniente trabajar nuestras queries a modo de custom hooks en vez de directamente en los componentes, ya que estaríamos implantando barreras de seguridad por si React-Query cambiase. 


