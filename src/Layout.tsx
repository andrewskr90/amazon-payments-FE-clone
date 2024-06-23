import { ReactNode } from 'react';

interface ILayoutProps { children: ReactNode }

const Layout = (props: ILayoutProps) => {
    const { children } = props
    const shopConfig = { name: 'KitchenSmart' }
    return (
        <div className="bg-cream h-screen w-full">
            <div className="bg-darkBlue text-white flex justify-between items-center py-2 px-2 md:px-8">
                <p className="md:hidden">back</p>
                <h1 className='text-2xl md:text-3xl'>{shopConfig.name}</h1>
                <nav className='hidden text-sm w-1/3 uppercase md:flex justify-between text'>
                    <a>All Products</a>
                    <a>About</a>
                    <a>Blog</a>
                </nav>
                <p>cart</p>
            </div>
            {children}
        </div>
    )
}

export default Layout;
