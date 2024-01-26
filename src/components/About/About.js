import React from "react";
import Image from "next/image";
import team from "../../../public/images/teamimg.svg";
import chart from "../../../public/images/chartsimg.svg";
import data from "../../../public/images/datasharing.svg";
import research from "../../../public/images/researchimg.svg";
import additional from "../../../public/images/additional.svg";

export default function About() {
    return(
        <div className="min-h-screen w-full bg-white text-black flex flex-col font-roboto">
            <div className="flex justify-between px-16 py-5 pt-16">
                <div className="w-[60%]">
                    <div className="flex flex-col gap-7 px-20 py-32">
                        <h1 className="font-outfit font-bold text-2xl">OUR TEAM</h1>
                        <div>
                            <h2 className="text-[#49D546] text-xl">Principal Investigator:</h2>
                            <p className="text-base underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Andrew D. Richardson, Northern Arizona University</p>
                        </div>
                        <div>
                            <h2 className="text-[#49D546] text-xl">Data Managers:</h2>
                            <p className="text-base">Tom Milliman, University of New Hampshire Keith Ballou, Northern Arizona University Alison Post, Northern Arizona University Zakary Vladich, Northern Arizona University</p>
                        </div>
                    </div>
                </div>

                <div className="w-30% m-auto">
                    <Image className="bg-cover" src={team} alt="teamimg" />
                </div>
            </div>

            <div className="w-full px-20 py-16 text-center bg-[#E4FEE3]">
                <h1 className="font-outfit font-bold text-2xl mb-8">MOTIVATION</h1>
                <p className="text-base">Reducing uncertainties about the role of terrestrial ecosystems in the global carbon [C] cycle requires better understanding of the spatial and temporal variation in biologically-mediated sources and sinks of C. Particularly in temperate and boreal forest ecosystems, phenological events such as spring leaf emergence and autumn senescence exert strong control on primary productivity and are therefore critical to ecosystem C cycling. Phenology also influences hydrologic processes, as leaf-out is accompanied by an increase in evapotranspiration; nutrient cycling processes, as senescence results in fresh litter (nutrient) inputs to the forest floor; and feedbacks to the climate system, as the amount and condition of foliage present affects surface energy balance, albedo, and surface roughness. Phenology also influences ecological interactions among individuals (e.g., competition) and across trophic levels (e.g., herbivory).
                    <br/><br/>
                    Phenology has been shown to be a robust integrator of the effects of year-to-year climate variability and longer-term climate change on natural systems (e.g., recent warming trends). Experimental studies have shown how other global change factors (e.g., elevated CO2 and N deposition) can also influence phenology. There is a need to better document biological responses to a changing world, and improved phenological monitoring at scales from individual organisms to ecosystems, regions and continents will contribute to achieving this goal.</p>
            </div>

            <div className="w-full px-24 py-16 text-left">
                <h1 className="font-outfit font-bold text-2xl mb-8 text-center mx-auto">The PhenoCam Network</h1>
                <div className="w-full flex justify-between gap-6">
                    <p className="text-base">We initiated the <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">PhenoCam Network</a> in order to provide automated, near-surface remote sensing of canopy phenology across the northeastern United States and adjacent Canada. This work was funded by two grants (2007-2009, 2009-2011) from the <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Northeastern States Research Cooperative</a>.
                        <br /><br />
                        Following pilot work at <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Bartlett Experimental Forest</a>, we installed high-resolution digital cameras ("webcams") at more than a dozen established research sites distributed throughout this region. Images from these cameras are uploaded to the PhenoCam server every half hour, and we then use simple analysis techniques to extract quantitative color information from each picture.
                        <br /><br />
                        Canopy greenness indices thus provide information about the amount of foliage present, and its color. In this way, image analysis of archived digital camera images provides an objective means by which canopy phenology can be monitored and quantified, at relatively low cost and with minimal personnel expenses, without the need for a human observer.
                    </p>
                    <Image className="h-auto" src={chart} alt="" />
                </div>
                <p className="text-base mt-3">At many of the PhenoCam network sites, cooperating researchers are conducting ongoing measurements of surface-atmosphere exchange of carbon and water using the eddy covariance method, and these flux data are being used to evaluate the implications of seasonal changes in canopy state for ecosystem function. We are actively seeking to establish new collaborations with existing <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">AmeriFlux</a> sites.
                    <br /><br />
                    Unlike conventional remote sensing, near-surface remote sensing provides imagery that is continuous in time, free of contamination by clouds, and not requiring correction for atmospheric effects. A key problem with satellite remote sensing (e.g. MODIS imagery) is the coarse spatial resolution; digital camera imagery, on the other hand, offers the opportunity to either integrate the phenological signal across the whole canopy, or to identify individual tree crowns and conduct separate analyses for different species. At the same time, the PhenoCam network provides information needed to link what is actually happening on the ground and what is observed by airborne and satellite sensors. Thus data from this project will contribute to efforts in which remote sensing is used to scale from intensively monitored sites to more extensive spatial domains.
                    <br /><br />
                    Funding from the National Science Foundation’s <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Macrosystems Biology Program</a> (award EF-1065074 and EF-1702697) has enabled the expansion of the network, a focus on broader science questions, and improvements to our online data visualization and delivery tools. Our goal is to function as a continental-scale phenological observatory, spanning as wide a range of biogeoclimatic zones and vegetation types as possible (Figure 1). The network now includes cameras located across North America, from Alaska to Florida and from Hawaii to Maine. More than 400 cameras, most of which have been deployed following our standardized protocol, are currently uploading half-hourly imagery to the PhenoCam server. Imagery and data products are available for each site by following links from the <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Gallery</a> page.</p>

            </div>

            <div className="flex justify-between px-32 py-12">
                <div className="w-[60%] flex flex-col align-middle my-auto">
                    <div className=" ">
                        <h1 className="font-outfit font-bold text-2xl mb-8">RESEARCH QUESTIONS</h1>
                        <p className="text-base">The primary objective of the PhenoCam project is to use automated, near-surface remote sensing to provide continuous, real-time monitoring of vegetation phenology across a range of ecosystems and climate zones.</p>
                        <div className="pl-6">
                            <ol className="list-decimal">
                                <li>How do photoperiod, temperature, and precipitation govern phenological transitions in different vegetation types?</li>
                                <li>How will phenology respond to climate change, and what are the associated uncertainties?</li>
                                <li>How will these phenological shifts impact ecosystem processes, and climate system feedbacks, related to carbon and water?</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="w-30%">
                    <Image className="bg-cover" src={research} alt="researchimg" />
                </div>
            </div>

            <div className="flex justify-between px-32 py-16">
                <div className="w-30%">
                    <Image className="bg-cover" src={data} alt="dataimg" />
                </div>

                <div className="w-[55%] flex flex-col align-middle my-auto">
                    <div className=" ">
                        <h1 className="font-outfit font-bold text-2xl mb-8">DATA SHARING</h1>
                        <p className="text-base">We make all of our imagery freely available for <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">download</a> by the community; all that is required is that you register for a user account. You will also need to create a user account to view the thumbnails of each day’s images, and the images themselves, using the browse feature. We had to implement this login to prevent web crawlers from consuming too much of our available server bandwidth. Derived data products can be viewed in near-real-time on ROI page for each site. These can also be downloaded by registered users, but please note that all data sets are considered preliminary until they are formally released and posted to the ORNL DAAC with an associate DOI.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-32 py-16">
                <div className="w-[60%] flex flex-col align-middle my-auto">
                    <div className=" ">
                        <h1 className="font-outfit font-bold text-2xl mb-8">ADDITIONAL INFORMATION</h1>
                        <p className="text-base">Questions?
                            <br />Check out our <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">FAQ</a> page.Interested in reading our field protocol?
                            <br />Find it <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">here</a>. Want to know more about camera configuration?
                            <br />Look <a className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">here</a>. For image processing code, including the stand-alone PhenoCam GUI program, visit our Tools page.
                            <br />or general questions about the PhenoCam Network, contact PI Andrew Richardson For questions related to the data archive, contact the PhenoCam support team For questions related to camera configuration and deployment, contact Alison Post .
                        </p>
                    </div>
                </div>

                <div className="w-30%">
                    <Image className="bg-cover" src={additional} alt="additionalimg" />
                </div>
            </div>


        </div>
    );
}