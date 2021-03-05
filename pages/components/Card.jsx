import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Card = ({ gradient, large, href, children }) => {
  return (
    <Link href={`${href ? href : "/"}`}>
      <motion.div
        key="gwgwg"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={`${gradient ? "gradient" : null} ${
          large ? "w-2/3" : "w-3/12"
        } h-96 bg-gray-700 m-3 min-w-min`}
      >
        {children}
        TEST
      </motion.div>
    </Link>
  );
};
export default Card;
