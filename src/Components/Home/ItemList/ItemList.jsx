import { Link } from "react-router-dom"
import { Item } from "./"

export const ItemList = ({starwars}) => {
  const containerCss = " row row-cols-lg-4 row-cols-md-3 row-cols-1 g-2  "

  return (
    <div
            className={ containerCss }
            style={ { marginTop: '25em' } }
        >
            { starwars.map(item =>
           
                <Link
                    key={item.name}
                    to={ `/item/${item.name}` }
                    className='text-decoration-none'
                >
                    <Item item={ item } />
               
                </Link>)
               
            }
        </div >

  )
}
