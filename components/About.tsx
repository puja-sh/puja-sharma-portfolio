import { pujaSharmaProfile } from "@/public/assets/";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title="About Me" titleNo="01"/>
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hello! I’m Puja Sharma, a Frontend Software Developer with a background in Electronics and
                        Instrumentation from Heritage Institute of Technology, where I graduated in 2022 <span className="text-primaryColor">(8.3 DGPA)</span>. My journey
                        into web development began in my second year of college, and I’ve been passionate about it ever
                        since. I’ve developed a range of projects, honed my skills in data structures and algorithms,
                        and gained practical experience through internships at various startups.
                    </p>
                    <p>
                        Fast-forward to today, I’m working at SkilloVilla, <span className="text-primaryColor"> an EdTech startup </span>,
                        where I transitioned from a six-month internship to a full-time role. My responsibilities
                        include working on <span className="text-primaryColor">user-facing</span> products and <span
                        className="text-primaryColor">content management systems</span>.
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            JavaScript (ES6+)
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            React.js
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            TypeScript
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            Styled-component
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            Postgres
                        </li>
                        <li className="flex items-center gap-2">
              <span className="text-primaryColor">
                <AiFillThunderbolt/>
              </span>
                            HTML5/CSS
                        </li>

                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-cover"
                                src={ pujaSharmaProfile }
                                alt="profileImg"
                            />
                            <div
                                className="hidden lgl:inline-block absolute w-full h-80 bg-primaryColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div
                        className="hidden lgl:inline-flex w-full h-80 border-2 border-primaryColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
