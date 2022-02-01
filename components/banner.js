import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Banner() {

    useEffect(() => {
        AnimScroll(".anim-1", 150,".anim-1")
        AnimScroll(".anim-2", 200,".anim-1")
        AnimScroll(".anim-3", 250,".anim-1")
    }, [])

    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    Help your life to make it easier to manage finances
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                    By using Our software, Your life Will be easier because Now you can Manage your fincance easier than before and you can get A 50% Discount if you buy this software
                </p>
                <div className="anim-2 mt-7">
                    <button className="bg-btnDark text-white w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Get started</button>
                    <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Watch a video</button>
                </div>
            </div>
            <img className="anim-3 mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl" src="/dashboard.png" alt="software dashboard" />
        </div>
    )
}

export default Banner
