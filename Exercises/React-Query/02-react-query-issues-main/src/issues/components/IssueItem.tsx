import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue } from '../interfaces';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { getIssueComments, getIssueInfo } from '../hooks/useIssue';
import { timeSince } from '../../helpers/timeSince';

interface Props {
    issue: Issue
}


export const IssueItem: FC<Props> = ({issue}) => {



    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const prefetchData = () => {
        
        // Prefetch nos sirve para precargar información de una query antes de que el usuario la necesite. Esto es útil si por ejemplo sabemos que el usuario va a necesitar la información de un item en concreto, y queremos que cuando el usuario haga click en el item, la información ya esté cargada, esto se puede lanzar con diferentes eventos, como por ejemplo onMouseEnter.\

        queryClient.prefetchQuery(
            ['issue', issue.number],
            () => getIssueInfo(issue.number),
            
        
        ) 
        queryClient.prefetchQuery(
            ['issue', issue.number, 'comments'],
            () => getIssueComments(issue.number),
            
        
        ) 
    }

    const presetData = () => {
        
        // Preset data actúa de la misma manera que prefetch data, pero solo lo carga una vez
        queryClient.setQueryData(
            ['issue', issue.number],
            issue,
            {
                // Aquí podemos especificar el tiempo que queremos que se mantenga la información en cache
                updatedAt: new Date().getTime() + 10000
            }
            
        
        ) 
    }



    return (
        <div className="card mb-2 issue"
            onClick={() => navigate(`/issues/issue/${issue.number}`)}
            onMouseEnter={presetData}
        >
            <div className="card-body d-flex align-items-center">

                {
                    issue.state === 'open' 
                    ? <FiInfo size={30} color='red' />
                    : <FiCheckCircle size={30} color='green' />
                }
                
                

                <div className="d-flex flex-column flex-fill px-2">
                    <span>{issue.title}</span>
                    <span className="issue-subinfo">#{issue.number} opened {timeSince(issue.created_at)} <span className='fw-bold'>{issue.user.login}</span></span>
                    <div>
                        {
                            issue.labels.map(label => (
                                <span
                                    key={label.id}
                                    className="badge rounded-pill m-1"
                                    style={{ backgroundColor: `#${label.color}`, color : 'black' }}

                                >
                                    {label.name}

                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <img src={issue.user.avatar_url} className="avatar" />
                    <span className='px-2'>{issue.comments}</span>
                    <FiMessageSquare />
                </div>

            </div>
        </div>
    )
}
