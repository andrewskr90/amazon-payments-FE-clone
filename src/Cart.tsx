import Quantity from "./Quantity";
import { Item, ShopConfig } from "./types";

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
                return <div className="flex bg-white">
                    <div className="hidden md:flex w-1/5 justify-center items-center py-4">
                        <img src={item.img.src} alt={item.img.alt} />
                        {/* <div className="bg-cream h-32 w-20"/> */}
                    </div>
                    <div className="flex flex-col items-center justify-between w-full md:w-4/5">
                        <div className="flex w-full items-center p-4 pl-6">
                            <div className="w-2/5 flex justify-end items-center md:hidden">
                                <img src={item.img.src} alt={item.img.alt} />
                                {/* <div className="bg-cream h-32 w-20"/> */}
                            </div>
                            <div className="w-3/5 pl-6 md:pl-0">
                                <h3 className="text-lg">{item.name}</h3>
                                <p className="text-sm">{`By ${shopConfig.name}`}</p>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center p-4 pl-6 border-t-2 border-cream">
                            <Quantity item={item} handleChangeQuantity={handleChangeQuantity} />
                            <div className="flex items-center">
                                <p className="pr-2">{shopConfig.currency}</p>
                                <p className="text-2xl">{item.retail.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cart;
