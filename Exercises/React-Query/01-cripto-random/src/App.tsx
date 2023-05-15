import './App.css'
import { useQuery } from '@tanstack/react-query'
import { useRandom } from './hooks/useRandom'



export const App = () => {
  
    // Mejor tener la lógica de useQuery separada en custom hooks, el código será más mantenible, ya que si hay algún cambio en la lógica de la llamada a la API, solo tendremos que cambiar el custom hook.
    const query = useRandom();
  
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
    
    
  
        

 


