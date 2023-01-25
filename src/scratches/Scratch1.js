import React from "react";
//eslint-disable-next-line
import styles from "../index.css"
import {Link} from "react-router-dom";

// Landing Page Scratch
// const Scratch1 = () => {
//     return (
//
//         <div className="container my-24 px-6 mx-auto">
//             <section className="mb-32 text-gray-800">
//
//                 {/*Image Div Start*/}
//                 <div
//                     className={"overflow-hidden bg-no-repeat bg-cover object-fill"}>
//                     <img src={require("../assets/staringcatbanner.jpg")} className={"object-fill"}/>
//                 </div>
//                 {/*Image Div End*/}
//
//
//                 <div className={"container text-gray-800 px-4 md:px-12"}>
//                     <div
//                         className={"block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 -mt-[80px] bg-gray-200 bg-opacity-80 backdrop-blur-xl"}>
//
//                         <div className={"flex flex-wrap justify-center text-center lg:text-left"}>
//                             <div className={"grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6"}>
//                                 <div className={"grid lg:grid-cols-2 gap-x-6 items-center"}>
//
//                                     {/*Donate to charities Text Div*/}
//                                     <div className={"mb-10 lg:mb-0"}>
//                                         <h2 className={"text-3xl font-bold"}>
//                                             Donate to charities, transparently.
//
//
//                                         </h2>
//                                     </div>
//                                     {/*Donate to charities text Div end*/}
//
//
//                                     <div className={"mb-6 md:mb-0 space-x-4 "}>
//                                             <Link to={"/charity"}>
//                                                 <p className={"FancyButton bg-amber-600 inline-block"}>
//                                                     Find Charities
//                                                 </p>
//                                             </Link>
//                                         <Link to={"/dashboard"}>
//                                             <button className={"FancyButton inline-block"}>
//                                                 dashboard
//                                             </button>
//                                         </Link>
//                                     </div>
//
//
//
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//
//             </section>
//         </div>
//     )
// }

const Scratch1 = () => {
    return (
        // Main Div Start
        <div
            className={"flex h-screen w-full items-center " +
                "justify-center bg-gray-100 bg-cover " +
                "bg-no-repeat bg-[url('assets/rosebanner.jpg')]"}>
            {/* --> Frosted Container Start <-- */}
            <div
                className={"rounded-3xl bg-none px-8 py-5 w-2/3 h-2/3 backdrop-blur-sm flex flex-col place-content-between" +
                    "max-sm:px-4 max-sm:w-screen max-sm:h-screen max-sm:backdrop-blur-sm"}
            >
                {/* --> Image and Logo Start <-- */}
                <div className={"flex flex-row items-center justify-center space-x-60 px-8"}>
                    <h1 className={"mb-8 text-6xl font-gogh text-white"}>
                        Donate to charities, with
                        <span className={"font-bold text-[#FFD046] "}> doin8
                            </span>
                    </h1>
                    <img src={require("../assets/white_logo.png")} alt={"doin8"} width={"200"}/>
                </div>
                {/* --> Image and Logo End <-- */}

                {/* --> Buttons Start <-- */}
                <div className={"px-8 flex flex-row items-center justify-center space-x-40 py-16"}>

                    <Link to={"/charity"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Explore Charities
                        </p>
                    </Link>

                    <Link to={"/dashboard"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Dashboard
                        </p>
                    </Link>

                    <Link to={"/register"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Register Charity
                        </p>
                    </Link>

                </div>
                {/* --> Buttons End <-- */}
            </div>
                {/* --> Frosted Container End <-- */}
            </div>

    )
}

export default Scratch1