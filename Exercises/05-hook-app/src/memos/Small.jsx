import { memo } from "react"

export const Small = memo(({value}) => {

  //Solamente cuando las props de Value cambien, se volvera a ejecutar el console log. Para eso sirve memo.
    console.log(' I generated again ')

  return (
    <small>{value}</small>
  )
})
