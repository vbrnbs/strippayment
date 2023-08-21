import Modal from './Cart'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Navbar = () => {

  const cart = useContext(CartContext)

  const productCount = cart.items.reduce((sum, product) =>
    sum + product.quantity, 0
  )

  return (
    <div className='flex justify-end p-2'>
      <div >
        
      </div>
        <Modal items={productCount} />
    </div>
  )
}

export default Navbar
