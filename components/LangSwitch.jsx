import { motion } from "framer-motion";

const LangSwitch = ({ language, cycleLanguage }) => {
  const nextLanguageHint = () => {
    if (language === "en") {
      return "Polish";
    } else {
      return "English";
    }
  };
  return (
    
      <motion.button
        onClick={() => cycleLanguage()}
        className="fixed bottom-4 right-4 rounded-md gradient p-2 text-white"
        initial={{right: -100, opacity: 0}}
        animate={{right: 16, opacity: 1}}
        transition={{ duration: 0.2 }}
        exit={{right: -200, opacity:0}}
      >
        Switch to {nextLanguageHint()}
      </motion.button>
  );
};

export default LangSwitch;
