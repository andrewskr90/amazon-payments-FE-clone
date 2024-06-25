import { Currency } from "../../types";

interface IPriceProps { currency: Currency; amount: number }

const Price = (props: IPriceProps) => {
    const { currency, amount } = props
    return (
        <div className="flex items-center">
            <p className="pr-2">{currency}</p>
            <p className="text-2xl">{amount.toFixed(2)}</p>
        </div>
    )
}

export default Price;
