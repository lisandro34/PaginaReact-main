import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contactos } from '../Contactos'
import { ItemDetailContainer } from '../Home/ItemDetail'
import { ItemListContainer } from '../Home/ItemList'

import { Ofertas } from '../Ofertas'

export const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/ofertas' element={<Ofertas />} />
      <Route path='/contactos' element={<Contactos />} />
      <Route path='/item/:name' element={<ItemDetailContainer />} />
      <Route path='/inicio' element={<ItemListContainer />} />
      <Route path='/*' element={<ItemListContainer />} />
    </Routes>

  )
}
