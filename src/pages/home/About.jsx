import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";







const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        const incrementTime = 50; // every 50ms
        const totalSteps = duration / incrementTime;
        const step = end / totalSteps;

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}+</span>;
};

const BusinessAdvisorsSection = () => {
    return (
        <div className="px-6 py-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    
                <motion.div className="relative cursor-pointer w-fit">
                    {/* Border Box */}
                    <motion.div
                        initial={{ x: -20, y: 20 }}
                        whileHover={{ x: -8, y: 8 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute w-full h-full border-[25px] border-orange-500 rounded-xl z-0"
                    ></motion.div>

                    {/* Image */}
                    <motion.img
                        src="./src/assets/doctor.jpg"
                        alt="Team Discussion"
                        className="rounded-xl relative z-10 max-w-full w-[500px]"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                </motion.div>

                {/* Right Side - Content */}
                <div className="flex-1">
                    <h2 className="text-2xl text-orange-600 font-bold mb-2">About Us</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Your Trusted Advisors In <br /> Business Success.
                    </h2>
                    <p className="text-black mb-4">
                        <h6 className="text-3xl md:text-lg font-bold text-gray-900 mb-4">
                            ●Our Vision:
                        </h6>

                        We strive to be a guiding force in every student's medical journey, breaking barriers and making
                        medical education accessible to all, regardless of background or financial status.
                    </p>
                    <p className="text-black mb-6">
                        <h6 className="text-3xl md:text-lg font-bold text-gray-900 mb-4">
                            ● Our Mission:
                        </h6>

                        Our mission is to revolutionize NEET coaching by integrating cutting-edge technology,
                        interactive learning, and expert faculty support. We strive to equip students with the knowledge,
                        skills, and confidence needed to secure top ranks in NEET and excel in the medical field.
                    </p>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full mb-6">
                        READ MORE
                    </button>

                    

                    <div className="grid grid-cols-3 gap-6 border-t pt-6">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                <Counter target="500" />
                            </p>
                            <p className="text-sm text-gray-500">Satisfied Customers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                <Counter target="10" />
                            </p>
                            <p className="text-sm text-gray-500">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                <Counter target="40" />
                            </p>
                            <p className="text-sm text-gray-500">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessAdvisorsSection;
