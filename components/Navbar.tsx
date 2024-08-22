import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };

    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-backgroundColor px-4">
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
                <Link href="/">
                    <motion.div
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        transition={ { duration: 0.1 } }
                    >
                        {/*<Image className="w-14" src={logo} alt="logo" />*/ }
                        <div className="square text-primaryColor flex items-center justify-center">
                            <p className="text-primaryColor">P</p>
                        </div>
                    </motion.div>
                </Link>
                <div className="hidden mdl:inline-flex items-center gap-7">
                    <ul className="flex text-[13px] gap-7">
                        <Link
                            className="flex items-center gap-1 font-medium text-textDark hover:text-primaryColor cursor-pointer duration-300 nav-link"
                            href="#home"
                            onClick={ handleScroll }
                        >
                            <motion.li
                                initial={ { y: -10, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.1 } }
                            >
                                Home
                            </motion.li>
                        </Link>

                        <Link
                            className="flex items-center gap-1 font-medium text-textDark hover:text-primaryColor cursor-pointer duration-300 nav-link"
                            href="#about"
                            onClick={ handleScroll }
                        >
                            <motion.li
                                initial={ { y: -10, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.1, delay: 0.1 } }
                            >
                                <span className="text-primaryColor">01.</span>
                                About
                            </motion.li>
                        </Link>
                        <Link
                            className="flex items-center gap-1 font-medium text-textDark hover:text-primaryColor cursor-pointer duration-300 nav-link"
                            href="#experience"
                            onClick={ handleScroll }
                        >
                            <motion.li
                                initial={ { y: -10, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.1, delay: 0.2 } }
                            >
                                <span className="text-primaryColor">02.</span>
                                Experience
                            </motion.li>
                        </Link>
                        <Link
                            className="flex items-center gap-1 font-medium text-textDark hover:text-primaryColor cursor-pointer duration-300 nav-link"
                            href="#project"
                            onClick={ handleScroll }
                        >
                            <motion.li
                                initial={ { y: -10, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.1, delay: 0.3 } }
                            >
                                <span className="text-primaryColor">03.</span>
                                Project
                            </motion.li>
                        </Link>
                        <Link
                            className="flex items-center gap-1 font-medium text-textDark hover:text-primaryColor cursor-pointer duration-300 nav-link"
                            href="#contact"
                            onClick={ handleScroll }
                        >
                            <motion.li
                                initial={ { y: -10, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.1, delay: 0.4 } }
                            >
                                <span className="text-primaryColor">04.</span>
                                Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="/assets/puja_sharma_resume.pdf" target="_blank">
                        <motion.button
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            transition={ { delay: 0.5 } }
                            className="px-4 py-2 rounded-md text-primaryColor text-[13px] border border-primaryColor hover:bg-hoverColor duration-300"
                        >
                            <span className='pr-1'>✽</span> Resume <span className='pl-1'>✽</span>
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
