import Price from "./Price";
import { Item, ShopConfig } from "../../types";

interface ICartTotalProps { items: Item[], shopConfig: ShopConfig }

const CartTotal = (props: ICartTotalProps) => {
    const { items, shopConfig } = props
    const amount = parseFloat(items.reduce((prev, cur) => {
        return prev + (cur.retail * cur.quantity)
    }, 0).toFixed(2))
    return (
        <>
            <p className="text-2xl mr-24 mb:mr-16 mb-2">=</p>
            <div className="flex justify-end items-center bg-white py-2 px-4 w-full md:w-[75%]">
                <p className="text-2xl mr-[33%] md:mr-[10%]">Total</p>
                <Price currency={shopConfig.currency} amount={amount} />
            </div>
        </>
    )
}

export default CartTotal;
