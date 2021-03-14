import { motion } from "framer-motion";

const TitleCardContent = ({
  cycleTitleCardState,
  titleCardClicked,
  locale,
}) => {
  return (
    <div
      onClick={() => {
        cycleTitleCardState();
      }}
      className="w-full h-full bg-black opacity-50 p-5 md:p-10 overflow-hidden"
    >
      {!titleCardClicked ? (
        <motion.div
          key="first-title-card"
          initial={{ opacity: 0, scale: 0.7, translateY: 50 }}
          animate={{ opacity: 1, scale: 1, scale: 1.1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className="m-4"
        >
          <h2>{locale["title"][0]}</h2>
          <h1 className="text-5xl">{locale["title"][1]}</h1>
          <br />
          <p>{locale["title"][2]}</p>
          <br />
          <p>{locale["title"][3]}</p>
          <img
            className="w-1/4 max-w-full m-auto mt-5 animate-bounce"
            src="../img/tap.svg"
          />
        </motion.div>
      ) : (
        <motion.div
          key="second-title-card"
          initial={{ opacity: 0, scale: 1.2, translateY: 100 }}
          animate={{ opacity: 1, scale: 1.1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs md:text-1/2sm 2xl:text-sm m-2 mt-0 pt-0"
        >
          <p>{locale["titleDescription"][0]}</p>
          <br />
          <p>{locale["titleDescription"][1]}</p>
          <br />
          <p>{locale["titleDescription"][2]}</p>
        </motion.div>
      )}
    </div>
  );
};

export default TitleCardContent;
