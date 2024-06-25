import { Item, ShopConfig } from "../types";
import CartItem from "./components/CartItem";
import CartTotal from "./components/CartTotal";

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
        <div className='w-full p-4'>
            <h2 className="hidden md:block text-lg text-gray-500 mb-4">Cart Overview</h2>
            {items.map(item => {
                return <CartItem item={item} shopConfig={shopConfig} handleChangeQuantity={handleChangeQuantity} />
            })}
            <CartTotal items={items} shopConfig={shopConfig} />
        </div>
    )
}

export default Cart;
