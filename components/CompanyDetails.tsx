import React from 'react';
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

type IProps = {
    companyName: string;
    points: string[];
    role: string;
    duration: string;
}

const CompanyDetails = ({ companyName, points, role, duration }: IProps) => {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 0.1 } }
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                { role }
                <span className="text-primaryColor tracking-wide">@{ companyName }</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                { duration }
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                {
                    points.map((item) => (
                        <li className="text-base flex gap-2 text-textDark">
                              <span className="text-primaryColor mt-1">
                                <TiArrowForward/>
                              </span>
                            { item }
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    );
};

export default CompanyDetails;