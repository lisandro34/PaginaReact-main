import { ItemList } from "./ItemList"
import { useFetch } from '../../hooks/useFetch';

export const ItemListContainer = () => {

const {starwars}= useFetch()

  return (
 <ItemList starwars={starwars}/>

  )
}
