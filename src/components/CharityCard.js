import React from "react";

const CharityCard = (props) => {
    return (
        <div>
            {/* -- Charity Card Start -- */}
            <div className={"FancyCard"}>
                {/* -- Image Div Start -- */}
                <div className={"FancyCardImage object-fill"}>
                    <img src={require("../assets/childrenbegging.jpg")} alt={"Children Begging"}/>
                </div>
                {/* -- Image Div End -- */}

                {/* -- Content Div Start -- */}
                <div className={"FancyCardText"}>
                    <p className={"text-2xl font-medium"}>
                        {props.title}
                    </p>
                    <p className={"text-sm mx-0 mt-1 mb-4 tracking-wider"}>
                        Charity one-liner that can be expanded upoun on clicking the goddamn card.
                    </p>
                </div>


            </div>
            {/* -- Charity Card End -- */}
        </div>
    )
}

export default CharityCard;