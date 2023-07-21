import React from 'react';
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, PRIVATE_ROUTE1} from "../utils/consts";
import Header from "../component/Header";

import VideoPanel from "../component/VideoPanel";
import TrustedBy from "../component/TrustedBy";
import Panel from "../component/Panel";
import Functions from "../component/Functions";
import Instructions from "../component/Instructions";
import PanelReverse from "../component/PanelReverse";
import Wps from "../component/Wps";
import Footer from "../component/Footer";
import Faq from "../component/Faq";



const Home = () => {
    return (
        <>
            <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-auto sm:w-full md:w-full">
                {/*<Header className="bg-white-A700 flex flex-col gap-5 items-center justify-center px-7 md:px-8 py-7 w-full" />*/}
                <VideoPanel className="flex flex-col items-center justify-center sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] pt-16 sm:px-5 w-full" />
                <TrustedBy className="flex flex-col gap-8 items-center justify-start pb-16 pt-32 sm:px-5 md:px-5 w-full" />
                <Panel
                    className="bg-gray-50 flex flex-col items-center justify-center sm:p-[] pb-32 pt-16 sm:px-5 md:px-5 rounded-tl-[128px] sm:rounded-tl-[64px] rounded-tr-[128px] sm:rounded-tr-[64px] w-full"
                    id="Product"
                />
                <Functions
                    className="bg-gray-50 flex flex-col gap-8 items-center justify-start sm:p-[] pb-32 sm:px-5 md:px-5 w-full"
                    id="Functions"
                />
                <Instructions
                    className="bg-gray-50 flex flex-col gap-8 items-center justify-center sm:p-[] pb-16 sm:px-5 md:px-5 rounded-bl-[128px] rounded-br-[128px] sm:rounded-bl-[64px] sm:rounded-br-[64px] w-full"
                    id="Instructions"
                />
                <PanelReverse className="flex flex-col gap-[120px] items-center justify-center sm:p-[] pb-32 pt-[65px] sm:px-5 md:px-5 w-full" />
                <Faq
                    className="flex flex-col gap-8 items-center justify-center sm:p-[] pb-32 sm:px-5 md:px-5 w-full"
                    id="Faq"
                />
                <Wps className="flex flex-col gap-8 items-center justify-center sm:p-[] pb-32 sm:px-5 md:px-5 w-full" />
                <Footer className="flex gap-10 items-center justify-center md:px-5 py-[60px] w-full" />
            </div>
        </>
    );
};

export default Home;
