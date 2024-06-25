import { ReactNode } from 'react';
import { Item, ShopConfig } from '../types';


interface ILayoutProps { children: ReactNode, shopConfig: ShopConfig, items: Item[] }

const Layout = (props: ILayoutProps) => {
    const { children, shopConfig, items } = props
    const BackButton = () => {
        return <button className='md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
    }
    const CartButton = () => {
        return <button className="relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {items.length > 0 && <p className="absolute text-xs pt-2">{items.length}</p>}
        </button>
    }
    return (
        <div className="bg-cream h-screen w-full">
            <div className="bg-darkBlue text-white flex justify-between items-center py-2 px-2 md:px-8">
                <BackButton />
                <h1 className='text-2xl md:text-3xl'>{shopConfig.formattedName}</h1>
                <nav className='hidden text-sm w-1/3 uppercase md:flex justify-between text'>
                    <a>All Products</a>
                    <a>About</a>
                    <a>Blog</a>
                </nav>
                <CartButton />
            </div>
            {children}
        </div>
    )
}

export default Layout;
