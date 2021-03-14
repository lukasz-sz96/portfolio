import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const TitleCardContent = ({
  cycleContantCardState,
  contactCardClicked,
  locale,
}) => {
  return (
    <motion.div
      onClick={() => cycleContantCardState()}
      className="w-full h-full flex p-2"
    >
      {!contactCardClicked ? (
        <>
          <AiOutlineMail key="mailIcon" className="text-9xl m-auto" />

          <motion.h2
            key="title"
            initial={{ scale: 0.7, opacity: 0, translateY: 50 }}
            animate={{ scale: 1, opacity: 1, scale: 1.1, translateY: 0 }}
            exit={{ opacity: 0 }}
            className="m-auto text-xl"
          >
            {locale["contactMe"]}
          </motion.h2>
        </>
      ) : (
        <motion.h2
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, scale: 1.1, translateY: 0 }}
          className="m-auto text-2xl"
        >
          {locale["mail"]}
        </motion.h2>
      )}
    </motion.div>
  );
};

export default TitleCardContent;
