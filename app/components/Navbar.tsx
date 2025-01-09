"use client"

import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-6'>
            {/*MOBILE*/}
            <link href="/">LAMA</link>
            <Menu/>
        </div>
    )
}

export default Navbar