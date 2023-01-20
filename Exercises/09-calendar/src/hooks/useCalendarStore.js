// Todas las interacciones con el store del calendar

import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"


export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const {events, activeEvent} = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

   



    //Thunks
    const startSavingEvent = async(calendarEvent) => {
      // TODO : Llegar al backend

      //Todo bien
      if(calendarEvent._id){
        //Actualizando
        dispatch(onUpdateEvent({...calendarEvent}))
      }else{
        //Creando
        dispatch(onAddNewEvent(({...calendarEvent, _id: new Date().getTime() })))
      }
    } 

    const startDeletingEvent = () => {
      //Todo: Llegar al backend
      dispatch(onDeleteEvent())
    }



  return{
    //Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent, //Si es null, regresa falso, si tiene un objeto, retorna true.


    //Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent

  }
}
