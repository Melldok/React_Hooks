import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubApi"
import { Label } from "../interfaces/label"
import { aumentarTiempoDeRespuesta } from "../../helpers/sleep"


const getLabels = async():Promise<Label[]> => {


    await aumentarTiempoDeRespuesta(2);

    const { data } = await githubApi.get<Label[]>('/labels?per_page=100')
    
    return data
  
  }


export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
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
    
    return labelsQuery;

}   