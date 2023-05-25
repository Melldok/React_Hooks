import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssuesList } from '../hooks/useIssuesList';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { State } from '../interfaces/issue';
import { useIssuesInfinite } from '../hooks/useIssuesInfinite';


export const ListViewInfiniteScroll = () => {


  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>()

  const { issuesQuery } = useIssuesInfinite({ state, labels : selectedLabels })

  const onLabelChange = ( labelName : string ) => {
    ( selectedLabels.includes(labelName) )
      ? setSelectedLabels( selectedLabels.filter( label => label !== labelName ) )
      : setSelectedLabels( [...selectedLabels, labelName] )



  }

  console.log(issuesQuery.data?.pages.flat())
  return (
    <div className="row mt-5">

      <div className="col-8">
        {
          issuesQuery.isLoading 
          ? (<LoadingIcon />)
          : (
            <IssueList 
              issues={issuesQuery.data?.pages.flat() || []}
              state={ state }
              onStateChanged={ (newState) => setState(newState) }
              />
            )
        }

        <button 
          className='btn btn-outline-primary mt-2'
          disabled={!issuesQuery.hasNextPage}
          onClick={() => issuesQuery.fetchNextPage()}
          >
            Load More...
        </button>
      </div>
      
      <div className="col-4">
        <LabelPicker
          selectedLabels={ selectedLabels }
          onChange={(labelName) => onLabelChange(labelName)}
         />
      </div>
    </div>
        
      
  )
}
