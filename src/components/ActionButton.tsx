import { ReactNode } from 'react';

interface IActionButton { children: ReactNode }

const ActionButton = (props: IActionButton) => {
    const { children } = props
    return (
        <button className="w-full bg-orange border-[1px] border-black py-2 flex justify-between items-center pr-2">
            {children}
        </button>
    )
}

export default ActionButton;
