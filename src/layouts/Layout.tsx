import { ReactNode, useEffect } from 'react';
import { Item, ShopConfig } from '../types';
import ChevronLeft from '../components/ChevronLeft';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';


interface ILayoutProps { children: ReactNode, shopConfig: ShopConfig, items: Item[] }

const Layout = (props: ILayoutProps) => {
    const { children, shopConfig, items } = props
    const location = useLocation();
    const navigate = useNavigate();

    const BackButton = () => {
        return <button className='md:hidden'>
            <ChevronLeft />
        </button>
    }
    const CartButton = () => {
        return <button onClick={() => navigate('/cart')} className={twMerge("relative flex items-center justify-center h-full py-2", location.pathname.includes('cart') ? 'border-b-4 border-white' : '')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={location.pathname.includes('cart') ? 1.5 : 1} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {items.length > 0 && <p className="absolute text-xs pt-2">{items.length}</p>}
        </button>
    }
    return (
        <div className="bg-cream h-screen w-full justify-center">
            <div className="bg-darkBlue h-14 text-white flex justify-between items-center px-2 md:px-8">
                <BackButton />
                <h1 className='text-2xl md:text-3xl'>{shopConfig.formattedName}</h1>
                <nav className='hidden text-sm h-full w-1/3 uppercase md:flex justify-between'>
                    <button onClick={() => navigate('/products')} className={location.pathname.includes('products') ? "border-b-4 border-white" : "font-light"}>All Products</button>
                    <button onClick={() => navigate('/about')} className={location.pathname.includes('about') ? "border-b-4 border-white" : "font-light"}>About</button>
                    <button onClick={() => navigate('/blog')} className={location.pathname.includes('blog') ? "border-b-4 border-white" : "font-light"}>Blog</button>
                </nav>
                <CartButton />
            </div>
            <div className="max-w-[768px] mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Layout;
