import { SKILLS_UPGRADE_2025 } from "../constants";
import { motion } from "framer-motion";

const SkillsUpgrade = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">{SKILLS_UPGRADE_2025.title}</motion.h2>
            
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
            >
                <h3 className="mb-4 text-2xl font-semibold text-purple-400">{SKILLS_UPGRADE_2025.subtitle}</h3>
                <p className="mx-auto max-w-3xl text-neutral-400">{SKILLS_UPGRADE_2025.introduction}</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
                {SKILLS_UPGRADE_2025.categories.map((category, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-lg"
                    >
                        <h4 className="mb-4 text-xl font-semibold text-purple-300">{category.category}</h4>
                        <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start text-neutral-400">
                                    <span className="mr-2 text-purple-500">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsUpgrade;

