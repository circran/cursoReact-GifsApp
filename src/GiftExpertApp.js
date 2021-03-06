import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

  return (
      <>
          <h2>Gifs Expert App</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/>
          <ol>
              { categories.map(category => 
                    <GifGrid 
                    key={category}
                    category={category}/>
                )
              }
          </ol>
      </>

  )
}
