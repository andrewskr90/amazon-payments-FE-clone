import ActionButton from "../components/ActionButton";
import { Item, ShopConfig } from "../types";
import CartItem from "./components/CartItem";
import CartTotal from "./components/CartTotal";
import DoubleChevronRight from "../components/DoubleChevronRight";

interface ICartProps { 
    items: Item[];
    setItems: (items: Item[]) => void;
    shopConfig: ShopConfig;
}
const Cart = (props: ICartProps) => {
    const { items, setItems, shopConfig } = props
    const handleChangeQuantity = (productId: number, quantity: number) => {
        const updatedCartProducts = items.map(product => {
            if (product.id !== productId) return product
            if (!quantity) return { ...product, quantity: 1 }
            return { ...product, quantity }
        })
        setItems(updatedCartProducts)
    }
    return (
        <div className=' flex flex-col items-end w-full p-4'>
            <h2 className="hidden md:block text-lg text-gray-500 mb-4">Cart Overview</h2>
            {items.map(item => {
                return <CartItem item={item} shopConfig={shopConfig} handleChangeQuantity={handleChangeQuantity} />
            })}
            <CartTotal items={items} shopConfig={shopConfig} />
            <div className="w-1/2 md:w-1/4 pt-4 md:pt-8 flex flex-col items-center">
                <ActionButton>
                    <div className="w-6"></div>
                    <p>Amazon Pay</p>
                    <DoubleChevronRight />                       
                </ActionButton>
                <p className="text-justify text-[10px] font-extrabold uppercase">Use Your Amazon Account</p>
                <span className="w-full"></span>
            </div>
        </div>  
    )
}

export default Cart;
