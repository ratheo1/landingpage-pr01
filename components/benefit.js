import { UsersIcon, ShoppingCartIcon, ClockIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Benefit() {

    let data = [
        {
            id: 1,
            icon: <UsersIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: 'Can be used by more than One Person',
            description: 'Every first purchase You will get a special discount from us of 50% From the original Price'
        },
        {
            id: 2,
            icon: <ShoppingCartIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: '50% Discount On Every Purchase',
            description: 'Every first purchase You will get a special discount from us of 50% From the original Price'
        },
        {
            id: 3,
            icon: <ClockIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: '24 Hours Customer service',
            description: 'Every first purchase You will get a special discount from us of 50% From the original Price'
        }
    ]

    useEffect(()=>{
        AnimScroll(".title",100,".title")
        AnimScroll("#card-0",100,".content")
        AnimScroll("#card-1",150,".content")
        AnimScroll("#card-2",200,".content")
    })

    return (
        <div className="xl:w-container mx-auto my-24 md:my-40 text-white">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">The benefit you get</h2>
                <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">Before you buy our Products you can see what benefits you will get From buying our Financial Software</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content,i) => {
                        return (
                            <div id={"card-"+i} className="group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]">
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">{content.description}</p>
                                <a className='font-medium underline' href="#">Read More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
