import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issue } from "../interfaces";
import { aumentarTiempoDeRespuesta } from "../../helpers/sleep";
import { State } from "../interfaces/issue";
import { useEffect, useState } from "react";

interface Props {
    state? : State;
    labels: string[];
    page?: number;
}




const getIssues = async({ labels, state, page = 1 } : Props):Promise<Issue[]> => {
    
    
   

    await aumentarTiempoDeRespuesta(2)

    const params = new URLSearchParams();

    if( state ) params.append('state', state);
    
    // Si hay labels, las añadimos al parámetro labels, separadas por comas.
    if (labels.length > 0){
        const labelString = labels.join(',');
        params.append('labels', labelString);
    }
    
    params.append('page', page.toString());
    params.append('per_page', '5');

    const { data } = await githubApi.get<Issue[]>('/issues', {params})
    return data
}

export const useIssuesList = ({ state, labels } : Props) => {



    const [page, setPage] = useState(1)

    useEffect(() => {
      setPage(1)
    
      
    }, [state,labels])
    


    const issuesQuery = useQuery(
        // Utilizamos un objeto para poder pasarle más de un parámetro y que cubra la posibilidad de que los elementos dentro de ese cache cambien, ya que estaríamos pasando un objeto nuevo y creando un nuevo cache cada vez. Es muy recomendable para cuando no nos importa el orden de los factores interiores. 
        ['issues', {state, labels, page}],
        () =>  getIssues({labels, state}),
    )


    const nextPage = () => {
        // Si viene vacío, no hacemos nada, ya que no hay data.
        if(issuesQuery.data?.length === 0) return

        setPage( page + 1 );
    }


    const prevPage = () => {
        if(page > 1) setPage( page - 1 );
    }

    return{
        //Properties
        issuesQuery,

        //Getter
        page: issuesQuery.isFetching ? 'loading' : page,

        // Methods
        nextPage,
        prevPage
    };

}
