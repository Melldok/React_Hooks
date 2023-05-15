import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubApi"
import { Label } from "../interfaces/label"
import { aumentarTiempoDeRespuesta } from "../../helpers/sleep"


const getLabels = async():Promise<Label[]> => {


    await aumentarTiempoDeRespuesta(2);

    const { data } = await githubApi.get<Label[]>('/labels')
    return data
  
  }


export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
          // Esta propiedad impide que se haga prefetch de los datos cuando el usuario clicka fuera de la ventana y vuelve a clickar en ella. Tenerl oactivo sirve por ejemplo siqueremos que nuestro usuario tenga siempre la última versión de los datos, si va a otra ventana y vuelve a la nuestra.
          refetchOnWindowFocus: false,
          // Esta propiedad determina un tiempo de vida de los datos en caché. En este caso, los datos se refrescarán cada 5 minutos. Muy útil para reducir el número de llamadas a una API.
          staleTime: 1000 * 60 * 5 //
        }
      );
    
    return labelsQuery;

}   