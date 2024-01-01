import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Section1 from "../Components/pages/Home-Page/Section1";
import Section2 from "../Components/pages/Home-Page/Section2";
import Section3 from "../Components/pages/Home-Page/Section3";
import Section4 from "../Components/pages/Home-Page/Section4";
import Section5 from "../Components/pages/Home-Page/Section5";
import Section6 from "../Components/pages/Home-Page/Section6";
import Section7 from "../Components/pages/Home-Page/Section7";
import { axiosClient } from "../utils/axiosClient";

const Home = () => {
    const [categoriesDropDown, setCategoriesDropdown] = useState(false);

    async function handleClick() {
        try {
            const res = await axiosClient.get("api/test");

            console.log("res from test", res.data);
            return res;
        } catch (error) {
            return console.error("Error in handleClick:", error);
        }
    }

    const handleDropDown = () => {
        setCategoriesDropdown(!categoriesDropDown);
    };

    const [text] = useTypewriter({
        words: ["Technology", "Spirituality", "Health And Fitness", "Business"],
        loop: {},
    });

    return (
        <div>
            <div className="bg-gradient-to-r from-[#eaf3fd] via-[#fdfdfd] to-[#ffebdc]">
                <div className="flex flex-col items-center px-3 xxs:px-5 py-10 md:px-16 md:py-[6.25rem] gap-16">
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-[2.8rem] md:text-3xl xxs:text-base text-[18px] mb-3">
                            Enrich <span className="font-bold text-[#8800ff]">Curiosity</span> With
                        </h1>
                        <div className="md:text-[4rem] text-[2rem] font-bold tracking-tighter text-center leading-9 md:leading-[3.5rem] md:mt-5 lg:min-h-fit md:min-h-[188px] sm:min-h-fit xs:min-h-[92px] xxs:min-h-[128px] ">
                            {/* <div className="mb-5">Staying consistent and motivated</div> */}
                            {/* calling the typing effect */}
                            <div className="mb-5">
                                <h1>
                                    Mentorship For&nbsp;
                                    <span className="text-[#8800ff]">{text}</span>
                                    <Cursor />
                                </h1>
                            </div>
                        </div>
                        <p className="mt-2 text-[#808084] text-sm md:text-xl text-center">
                            Get started by booking a{" "}
                            <span className="md:border-[1px] md:mx-1 rounded-[48px] md:text-sm lg:hover:bg-[#8800ff] lg:hover:border-[#8800ff] lg:hover:text-white font-bold text-[#8800ff] md:px-4 py-2 tracking-[1px] md:bg-gradient-to-r from-[#2563FF33]/5 text-xs">
                                {" "}
                                FREE TRIAL SESSION{" "}
                            </span>
                            with the mentor of your choice{" "}
                        </p>
                    </div>
                    <div className="max-w-[865px] flex flex-col items-center gap-6 w-full">
                        {/* <input className = 'border-sky-300' placeholder='input' /> */}

                        {/* Start - search and filer feature by NAndan G N */}
                        <form className="w-full">
                            <div className="flex relative">
                                <label
                                    htmlFor="search-dropdown"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                                >
                                    Your Email
                                </label>
                                <button
                                    onClick={handleDropDown}
                                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                    type="button"
                                >
                                    All categories{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`${
                                        categoriesDropDown ? "" : "hidden"
                                    } absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button"
                                    >
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Technoloy
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Spirituality
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Health And Fitness
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Business{" "}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Search Mockups, Logos, Design Templates..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* End - search and filer feature by NAndan G N */}

                        <div className="flex sm:justify-center w-full gap-2 md:gap-4 overflow-auto no-scrollbar">
                            <span className="text-[#808084] py-2 text-base md:inline hidden">
                                Find top mentors in :{" "}
                            </span>
                            <a
                                onClick={handleClick}
                                className="border whitespace-nowrap hover:bg-[#8800ff] hover:border-[#8800ff] font-medium text-xs md:text-sm hover:text-white duration-200 border-[#808084] text-[#808084] px-4 py-2 rounded-full h-fit"
                            >
                                Technology
                            </a>
                            <a className="border whitespace-nowrap hover:bg-[#8800ff] hover:border-[#8800ff] font-medium text-xs md:text-sm hover:text-white duration-200 border-[#808084] text-[#808084] px-4 py-2 rounded-full h-fit">
                                Spirutiality
                            </a>
                            <a className="border whitespace-nowrap hover:bg-[#8800ff] hover:border-[#8800ff] font-medium text-xs md:text-sm hover:text-white duration-200 border-[#808084] text-[#808084] px-4 py-2 rounded-full h-fit">
                                Business Management
                            </a>
                            <a className="border whitespace-nowrap hover:bg-[#8800ff] hover:border-[#8800ff] font-medium text-xs md:text-sm hover:text-white duration-200 border-[#808084] text-[#808084] px-4 py-2 rounded-full h-fit">
                                Health And Fitness
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Section4/>
    <Section5/>
    <Section6 />
    <Section7 /> */}
        </div>
    );
};

export default Home;
