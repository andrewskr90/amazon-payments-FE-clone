import { ReactNode } from "react"
import { Item } from "./types";

interface IQuantityProps { item: Item; handleChangeQuantity: (productId: number, quantity: number) => void }
interface ICircleProps { children: ReactNode }

const Quantity = (props: IQuantityProps) => {
    const { item, handleChangeQuantity } = props
    const { id: productId, quantity } = item
    const Circle = ({ children }: ICircleProps) => {
        return <div 
            className="size-6 md:size-6 rounded-full border-black border-2 flex items-center justify-center font-bold text-3xl pb-2"
        >
            {children}
        </div>
    }
    return (
        <div className="flex">
            <button onClick={() => handleChangeQuantity(productId, quantity-1)}>
                <Circle>-</Circle>
            </button>
            <input className="mx-2 w-16 text-center border-2 border-black" value={quantity} onChange={(e) => handleChangeQuantity(productId, parseInt(e.target.value))} name="quantity" type="number" />
            <button onClick={() => handleChangeQuantity(productId, quantity+1)}>
                <Circle>+</Circle>
            </button>
        </div>
    )
}

export default Quantity;
