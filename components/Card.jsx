import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Card = ({ gradient, size, href, children }) => {
  return (
    <Link href={`${href ? href : "/"}`}>
      <motion.div
        key="gwgwg"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={`${gradient ? "gradient" : null} md:w-${size} w-full h-96 bg-gray-700 mb-3 md:m-3 min-w-min text-left text-white flex flex-row`}
      >
        {children}
      </motion.div>
    </Link>
  );
};
export default Card;
