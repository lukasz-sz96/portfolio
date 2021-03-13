import { motion } from "framer-motion";

const Tag = ({ type }) => {
  const style = {
    main: "m-1 p-1 rounded-l-lg relative border-2 border-r-0 border-white",
    node: "",
    nextjs: "",
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        marginRight: -80,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
      }}
      animate={{
        opacity: 1,
        marginRight: 0,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      }}
      transition={{ duration: 0.7 }}
      className={`${style.main}`}
    >
      {type}
    </motion.div>
  );
};

export default Tag;
