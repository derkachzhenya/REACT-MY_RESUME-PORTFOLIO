import { TECHNOLOGIES } from "../constants";
import { motion } from "framer-motion";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                {TECHNOLOGIES.map((techGroup, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-md lg:w-auto"
                    >
                        <h3 className="mb-4 text-xl font-semibold text-purple-400">{techGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {techGroup.items.map((item, itemIndex) => (
                                <span
                                    key={itemIndex}
                                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;