import './style.css'

interface ProductProps{
    value: number,
    name: string
}

export function Product({name, value}: ProductProps){
    return(
        <div className="product">
            <p>{name}</p>
            <p>Valor: {value}</p>
        </div>
    )
}