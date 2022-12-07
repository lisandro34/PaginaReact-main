import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  
  const name = useParams();
  const {starwars:item} = useFetch(undefined,name)
//console.log(item[2])


return (

  
    <ItemDetail item={item}/>
 
  )
}
