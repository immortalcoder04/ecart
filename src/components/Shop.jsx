import React from 'react'
import list from '../list'
import Card from './Card'

const Shop = ({handleClick}) => {
  return (
    <div>
    <section>
        {list.map((items)=>{
            return <Card key={items.id} items={items} handleClick={handleClick} />
        })}
    </section>      
    </div>
  )
}

export default Shop
