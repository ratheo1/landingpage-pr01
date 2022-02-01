import { MenuIcon } from '@heroicons/react/outline'

function Navbar() {
    return (
        <div className="w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto flex justify-between items-center pt-6 lg:pt-10">
            <div className="w-logo">
                <a href="#">
                    <img src="/logo.png" alt="logo fintech" />
                </a>
            </div>
            <div className="list-none text-white hidden xl:flex items-center">
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Home</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Services</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Pricing</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Feature</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Contact</a>
                </li>
            </div>
            <div className="hidden xl:block">
                <button className="bg-btnDark text-white w-44 h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">Get started</button>
            </div>
            <div className="block xl:hidden">
                <button className='pt-1'><MenuIcon className='w-8 text-white'/></button>
            </div>
        </div>
    )
}

export default Navbar
