import React from "react";

//eslint-disable-next-line
import styles from "../index.css";
import Button from "../components/Button";
import CharityCard from "../components/CharityCard";

const Scratch3 = () => {

    return (
        <div>
            {/* --Main Div Start-- */}

            {/* --Nav Bar Start-- */}
            <nav className={"flex-col"}>

                <h1 className={"text-center text-xl"}>
                    Charity Types
                </h1>

                <div className={"flex flex-grow px-4 gap-8"}>
                    <div className={"px-4 flex-grow text-justify FancyButton justify-center align-middle"}>
                        <button className={"text-justify"}>Poverty</button>
                    </div>
                    <div className={"px-4 flex-grow text-justify FancyButton justify-center align-middle"}>
                        <button className={"text-justify"}>Food Banks</button>
                    </div>
                    <div className={"px-4 flex-grow text-justify FancyButton justify-center align-middle"}>
                        <button className={"text-justify"}>Illness</button>
                    </div>
                    <div className={"px-4 flex-grow text-justify FancyButton justify-center align-middle"}>
                        <button className={"text-justify"}>Education</button>
                    </div>
                </div>
            </nav>
            {/* --Nav Bar End-- */}

            {/* --Tabs Wrapper-- */}
            <div>

                {/* --Tabs Group-- */}
                <div>

                    {/* --Tab One-- */}
                    <div>
                        <CharityCard/>
                    </div>

                </div>
                {/* --Tabs Group End-- */}
                cd
            </div>
            {/* --Tabs End-- */}

            {/* --Main Div End---- */}
        </div>
    )

}

export default Scratch3