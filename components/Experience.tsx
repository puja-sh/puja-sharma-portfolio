import { useState } from "react";
import SectionTitle from "./SectionTitle";
import CompanyDetails from "@/components/CompanyDetails";

const experienceData = [
    {
        companyName: 'SkilloVilla',
        role: 'Software Developer',
        duration: 'Jul 2022 - Present',
        points: [
            "Developed an interactive Online Test Taking Platform supporting multiple types of questions (FIB, MCQ, SCQ, etc.) using Next.js, React Query, and styled-components, benefiting over 7000+ students and elevating the overall learning experience.",
            "Built end-to-end responsive dynamic web pages using Strapi Headless CMS and server-side rendering for content management, leading to a 10% increase in sales by enabling seamless website modifications and reducing dependency on developers.",
            "Created a Programming Learning Platform supporting multiple coding languages, incorporating polling for all test cases evaluation, to facilitate interactive coding practice and enhance learning outcomes.",
            "Developed an Assignment Evaluation Dashboard 2.0 using Appsmith, JavaScript, Hasura APIs, PostgreSQL and MongoDB, enhancing the efficiency of subject experts in evaluating student assignments and contributing to better placement results.",
            "Improved overall website performance by 3% through utilising Imgix for image optimization, dynamic import techniques, lazy loading, and optimizing SEO with structured schema leading to enhanced page speed and significant improvements in core web vitals.",
            "Integrated new Sign In/Sign Up REST APIs that includes segregated OTP generation for SMS & Whatsapp, resulting in a streamlined user experience and reduced OTP delivery errors.",
            "Conducted comprehensive debugging, thorough code review, end-to-end Testing/QA, and adherence to Agile methodologies to ensure high-quality software development practices and deliverables."
        ]
    },
    {
        companyName: 'SkilloVilla (Intern)',
        role: 'Software Developer',
        duration: 'Dec 2021 - Jun 2022',
        points: [
            "Created a streamlined Discord Onboarding Flow for students, utilizing the Discord OAuth API and Next.js to seamlessly integrate them into their designated Discord batch channels",
            "Built a Batch Management System with Appsmith, JavaScript and SQL to streamline batch assignments and student tracking",
            "Developed a suite of dynamic and responsive web pages with React.js and styled-component, contributing to an elevated level of user interactivity.",
            "Worked on Tinymce integration with Wiris Formula and Prism.js, ensuring effective handling of mathematical expressions and syntax highlighting for an enriched content creation experience.",
        ]
    },
    {
        companyName: 'Recreate AI',
        role: 'Software Developer',
        duration: 'Jan 2021 - Mar 2021',
        points: [
            "Implemented new features for image manipulation, including applying filters and removing backgrounds, using jQuery, HTML Canvas, and open-source libraries like FabricJS and GreenSockJS.",
            "Developed a dashboard page for managing users' own projects, enhancing user experience and project organisation.",
            "Utilized various open-source tools and libraries to enhance the functionality and interactivity of the image manipulation features."
        ]
    }
]
const Experience = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section
            id="experience"
            className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title="Where I have Worked" titleNo="02"/>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    {
                        experienceData.map((item, index) => {
                            const { companyName } = item;
                            return (
                                <li
                                    onClick={ () => setActiveIndex(index) }
                                    className={ `${
                                        activeIndex === index
                                            ? "border-l-textGreen text-textGreen"
                                            : "border-l-hoverColor text-textDark"
                                    } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium` }
                                >
                                    { companyName }
                                </li>
                            )
                        })
                    }
                </ul>

                {
                    experienceData.map((item, index) => {
                        const { companyName, role, duration, points } = item

                        if (activeIndex !== index) return null;
                        return (
                            <CompanyDetails companyName={ companyName } points={ points } role={ role }
                                            duration={ duration }/>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Experience;
