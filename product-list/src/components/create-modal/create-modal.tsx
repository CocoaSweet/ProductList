import { useEffect, useState } from "react"
import { useProductDataMutate } from "../../hooks/useProductDataMutate"
import { ProductData } from "../../interface/ProductData"
import './style.css'

interface InputProps{
     label: string,
     value: string | number,
     type: string,
     name?: string
     onChange: (value: any)=> void
}

interface ModalProps{
    closeModal() : void
}

const Input = ({label, value, onChange, type, name}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input type={type} value={value} name={name} onChange={content => onChange(content.target.value)}></input>
        </>
    )
}


export function CreateModal({closeModal}: ModalProps){
    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[value, setValue] = useState(0)
    const[available, setAvailable] = useState("")
    const {mutate, isSuccess} = useProductDataMutate()
    
    const submit = () => {
        const productData: ProductData = {
            name,
            description,
            value,
            available
        }
        mutate(productData)
    }
    useEffect(() => {
        if(isSuccess){
            closeModal()}
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                    <h2>Cadastrar novo Produto</h2>
                    <form className="form-field">
                        <Input label="Nome do Produto" type="text" value={name} onChange={setName}/>
                        <Input label="Descrição do Produto" type="text" value={description} onChange={setDescription}/>
                        <Input label="Valor" type="text" value={value} onChange={setValue}/>
                    </form>
                        <p>Disponível para compra</p>
                    <form className="form-field2">
                        <Input label="Sim" name="available" type="radio" value="sim" onChange={setAvailable}/>
                        <Input label="Não" name="available" type="radio" value="nao" onChange={setAvailable}/>
                    </form>
                    <button onClick={submit} className="button-modal">Cadastrar</button>
            </div>
        </div>
    )
}