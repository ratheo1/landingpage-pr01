import { CheckIcon } from "@heroicons/react/solid"
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Pricing() {

    let dataPrice = [
        {
            title: 'Beginner',
            price: '$35',
            description: 'Make your Plans easy by subscribing for free. Get it now',
            include: ['Active monitoring', 'Manage Money', 'Unlimited Customer Service']
        },
        {
            title: 'Popular',
            price: '$50',
            description: 'This is the most popular Package here that is often purchase',
            include: ['Archieve chat', 'Manage Service', 'Chat support', 'Premium Subription', 'Unlock all features']
        },
        {
            title: 'Special',
            price: '$65',
            description: 'Make your Plans easy by subscribing for free. Get it now',
            include: ['Active monitoring', 'Manage Money', 'Unlimited Customer Service', 'Premium Future Unlock']
        }
    ]

    useEffect(()=>{
        AnimScroll(".title3",100,".title3")
        AnimScroll("#price-0",200,".content2")
        AnimScroll("#price-1",300,".content2")
        AnimScroll("#price-2",400,".content2")
    })


    return (
        <div className="mt-28 lg:mt-52 w-full xl:w-container mx-auto px-10 xl:px-0">
            <div className="title3 w-full lg:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white">More power and easy our pricing</h2>
                <p className="mt-5 w-3/4 mx-auto text-slate-400 text-base">Before you buy our Products you can see what benefits you will get From buying our Financial Software</p>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap justify-center gap-10 mt-16">
                {dataPrice.map((data,i) => {
                    return (
                        <div id={"price-"+i} className="group hover:bg-midBlue text-white border hover:border-midBlue rounded-xl p-10 flex flex-col justify-between h-card">
                            <div className="">
                                <h3 className="text-3xl font-medium">{data.title}</h3>
                                <p className="text-3xl mt-8 font-medium">{data.price} <span className="text-base font-light">/Month</span></p>
                                <p className="content2 mt-5 text-base">{data.description}</p>
                                {data.include.map(inc => {
                                    return (
                                        <div className='flex items-start gap-5 mt-7 text-base'>
                                            <CheckIcon className='w-5 bg-white text-midBlue rounded-full p-1' />
                                            <p className="">{inc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="">
                                <button className="bg-midBlue group-hover:bg-white text-white group-hover:text-blue w-full h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">Get started</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pricing
