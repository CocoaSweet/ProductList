import { useState } from 'react'
import './App.css'
import {Product} from './components/product/product'
import { useProductData } from './hooks/useProductData'
import { CreateModal } from './components/create-modal/create-modal'

function App() {
  const { data } = useProductData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(value => !value)
  }

  return (
    <div className='container'>
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {data?.map(productData => <Product value={productData.value} name={productData.name}/>)}
      </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button className="button" onClick={handleOpenModal}>Novo Produto</button>
    </div>
  )
}

export default App
