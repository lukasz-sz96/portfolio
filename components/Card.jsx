import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Card = ({
  gradient,
  animateHover,
  size,
  href,
  children,
  demo,
  source,
  small,
  red,
  scroll,
  isMobile,
  language
}) => {
  // const {locale, lang} = language[0]
  console.log(language)
  const [isHovering, setIsHovering] = useState(false);

  const handleMouse = (e) => {
    setIsHovering(!isMobile ? !isHovering : false);
  };

  const Options = () => {
    return (
      <>
        {demo && (
          <motion.a
            id="demo"
            target="_blank"
            href={demo}
            rel="noopener noreferrer"
            whileHover={{
              backgroundColor: "rgba(255,255,255,1)",
              color: "rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.2 }}
            className="w-full flex border-white border-2 p-4 lg:m-6"
          >
            Demo
          </motion.a>
        )}

        <Link replace href={source} scroll={false}>
          <motion.a
            id="source"
            target="_blank"
            href={source}
            rel="noopener noreferrer"
            whileHover={{
              backgroundColor: "rgba(255,255,255,1)",
              color: "rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.2 }}
            className="w-full flex border-white border-2 p-4 lg:m-6"
          >
            Source code
          </motion.a>
        </Link>
      </>
    );
  };

  return (
    <motion.div
      onMouseEnter={() => {
        handleMouse();
      }}
      onMouseLeave={() => {
        handleMouse();
      }}
      key={`card-${href}`}
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.85 }}
      whileHover={animateHover && { scale: 1.03 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className={`${gradient && "gradient"} md:w-${size} h-${
        small ? "36" : "96"
      } ${
        red ? "bg-red-700" : "bg-gray-700"
      } mb-4 md:m-3 text-left text-white flex flex-row flex-wrap`}
    >
      <Link href={{pathname: `${href ? href : ""}`, query: { lang: language ? language : "en"}}} scroll={scroll}>
        <div
          className={`flex flex-row w-full transition-all ${
            gradient ? "h-full" : "h-auto"
          } ${isHovering && source && "filter lg:filter-blur-10"}`}
        >
          {children}
        </div>
      </Link>
      {!isMobile
        ? isHovering && (
          source && (
            <div className="flex flex-col flex-wrap lg:flex-row w-2/3 lg:w-1/2 relative lg:absolute top-1/3 lg:top-1/2 right-1/2 transform translate-x-full lg:translate-x-1/2 -translate-y-1/2 z-50">
              <Options />
            </div>
          )
          )
        : source && (
            <div className="flex flex-col flex-wrap lg:flex-row w-2/3 lg:w-1/2 relative lg:absolute top-1/3 lg:top-1/2 right-1/2 transform translate-x-full lg:translate-x-1/2 -translate-y-1/2 z-50">
              <Options />
            </div>
          )}
    </motion.div>
  );
};

export default Card;
