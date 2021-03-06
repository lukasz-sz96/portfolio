import { motion, AnimatePresence } from "framer-motion";

const Tag = ({ type }) => {
  const style = { main: "m-1 p-1 rounded-l-lg", node: "bg-green-600", nextjs: "bg-black" };
  return (
    <motion.div
      initial={{
        opacity: 0,
        left: -50,
        marginRight: 50,
      }}
      animate={{
        opacity: 1,
        left: 50,
        marginRight: 0,
      }}
      transition={{ duration: 1 }}
      className={`${style.main} ${style.[type]}`}
    >
      {type}
    </motion.div>
  );
};

export default Tag;
