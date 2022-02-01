import { } from "@heroicons/react/outline"

function Footer() {

    let dataFooter = [
        {
            title: 'Links',
            content: ['Home', 'Services', 'About', 'Tools', 'Contact']
        },
        {
            title: 'About',
            content: ['Partners', 'Carrers', 'Press', 'Community', 'Contact']
        },
        {
            title: 'Our office',
            content: ['Indonesia', ' Jl Petemon Kuburan 74 A, Jawa Timur', 'Jawa Timur 60252']
        }
    ]

    return (
        <div className="bg-btnDark w-full py-14">
            <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
                <div className="mr-0 lg:mr-40">
                    <img className="w-logo" src="/logo.png" alt="logo" />
                    <p className="my-8 leading-relaxed">Manage your files efficiently and easily and it is a simple, fast and small file manager with a single file</p>
                    <div className="flex items-center">
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img  src="/facebook-logo.png" alt="facebook" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img src="/instagram-logo.png" alt="instagram" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img src="/twitter-logo.png" alt="twitter" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img src="/linkedin-logo.png" alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex justify-between">
                    {dataFooter.map(footer => {
                        return (
                            <div className="">
                                <h4 className="font-medium text-white text-base">{footer.title}</h4>
                                {footer.content.map(content => {
                                    return (
                                        <p className="mt-3">{content}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
