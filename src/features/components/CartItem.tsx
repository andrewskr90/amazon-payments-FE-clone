import Price from "./Price";
import { Item, ShopConfig } from "../../types";
import Quantity from "./Quantity";

interface ICartItemProps { item: Item; shopConfig: ShopConfig; handleChangeQuantity: (productId: number, quantity: number) => void }

const CartItem = (props: ICartItemProps) => {
    const { item, shopConfig, handleChangeQuantity } = props

    return (
        <div className="flex bg-white">
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
                    <Price currency={shopConfig.currency} amount={item.retail}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
