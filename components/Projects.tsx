import React, { Fragment } from 'react';
import { quizAppImage, discurdProjectImage, movieScrollImage } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectData = [
    {
        name: "Discord - Chat App",
        skills: ["Reactjs", "Firebase", "SCSS", "JavaScript"],
        description: "Implemented various features, including file/photo/audio sharing, authentication, upload profile image, and online/offline status of users. Deployed the project using Firebase for optimal performance and accessibility.",
        highlightTextInDescription: ["authentication,", "online/offline"],
        image: discurdProjectImage,
        githubLink: "https://github.com/puja-sh/chat-app-ps",
        liveLink: "https://chat-web-app-d1d12.web.app/"
    },
    {
        name: "Movie Bi-directional",
        skills: ["Reactjs", "Typescript", "Styled-component", "JavaScript"],
        description: "A moving listing website with bi-directional smooth scrolling. It fetches movies year by year and includes genre filtration. Data is retrieved with pagination, providing a seamless and interactive user experience.",
        highlightTextInDescription: ["bi-directional", "smooth", "scrolling.", "filtration."],
        image: movieScrollImage,
        githubLink: "https://github.com/puja-sh/movie-listing",
        liveLink: "https://movies-bidirectional-scroll.surge.sh/"
    },
    {
        name: "Quiz App",
        skills: ["Reactjs", "React Hooks", "SCSS", "JavaScript"],
        description: "A quiz application featuring instructions and a 3-minute timer. It includes notification sounds based on whether the answer is correct or incorrect. At the end, the application displays score and feedback for the user.",
        highlightTextInDescription: ["3-minute", "timer.", "notification", "sounds", "score"],
        image: quizAppImage,
        githubLink: "https://github.com/puja-sh/quiz-reactjs",
        liveLink: "https://quizapp-ps.netlify.app/"
    },

]


const Projects = () => {

    const renderDescription = (description, highlights) => {
        const parts = description.split(' ');

        return parts.map((part, i) => {
            const isSkill = highlights.includes(part);

            return (
                <Fragment key={ i }>
                    { isSkill ? (
                        <span className="text-textGreen">{ part } </span>
                    ) : (
                        <span>{ part } </span>
                    ) }
                </Fragment>
            );
        });
    };

    return (
        <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Some Things I have Built" titleNo="03"/>
            {/* ============ project One Start here ================ */ }
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                {
                    projectData.map((project, index) => {
                        const {
                            name,
                            skills,
                            description,
                            highlightTextInDescription,
                            image,
                            githubLink,
                            liveLink
                        } = project ?? {};
                        return (
                            <div
                                className={ `flex flex-col ${ index % 2 === 0 ? `xl:flex-row` : `xl:flex-row-reverse` }  gap-6` }>
                                <a
                                    className="w-full xl:w-1/2 h-auto relative group"
                                    href="https://nextamazon.reactbd.com/"
                                    target="_blank"
                                >
                                    <div>
                                        <Image
                                            className="w-full h-full object-contain"
                                            src={ image }
                                            alt="discurd project screenshot"
                                        />
                                        <div
                                            className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                                    </div>
                                </a>
                                <div
                                    className={ `w-full xl:w-1/2 flex flex-col gap-6  items-end text-right  z-10 ${ index % 2 === 0 ? `lgl:justify-between xl:-ml-16` : `justify-between` }` }>
                                    <div>
                                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                            Featured Project
                                        </p>
                                        <h3 className="text-2xl font-bold">{ name }</h3>
                                    </div>
                                    <p className={ `bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ${ index % 2 === 0 ? `` : 'xl:-mr-16' }` }>
                                        { renderDescription(description, highlightTextInDescription) }
                                    </p>
                                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                        { skills.map(skill => <li> { skill } </li>) }
                                    </ul>
                                    <div className="text-2xl flex gap-4">
                                        <a
                                            className="hover:text-textGreen duration-300"
                                            href={ githubLink }
                                            target="_blank"
                                        >
                                            <TbBrandGithub/>
                                        </a>
                                        <a
                                            className="hover:text-textGreen duration-300"
                                            href={ liveLink }
                                            target="_blank"
                                        >
                                            <RxOpenInNewWindow/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Projects;
