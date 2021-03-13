import Head from "next/head";
import Card from "../components/Card";
import TechStackCard from "../components/TechStackCard";
import LangSwitch from "../components/LangSwitch";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/router";
import locale from "../locale";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [contactCardClicked, setContactCardClicked] = useState(false);
  const [titleCardClicked, setTitleCardClicked] = useState(false);

  const router = useRouter();
  const [lang, setLang] = useState(router.query.lang || "en");

  useEffect(() => {
    setLang(router.query.lang || "en");
  }, []);

  const cycleLanguage = () => {
    setLang(lang === "pl" ? "en" : "pl");
  };

  const wrapperStyle =
    "flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10 max-h-full";
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={wrapperStyle}>
        <Card href="" size={titleCardClicked ? '2/4' : '1/4'} gradient scroll={false} key="card-1">
          <div
            onClick={() => {
              setTitleCardClicked(!titleCardClicked);
            }}
            className="w-full h-full bg-black opacity-50 p-5 md:p-10"
          >
            {!titleCardClicked ? (
              <motion.div
                initial={{ scale: 0.7, opacity: 0, translateY: 50 }}
                animate={{ scale: 1, opacity: 1, scale: 1.1, translateY: 0 }}
                className="m-4"
              >
                <h2>{locale[lang]["title"][0]}</h2>
                <h1 className="text-5xl">{locale[lang]["title"][1]}</h1>
                <br />
                <p>{locale[lang]["title"][2]}</p>
                <br />
                <p>{locale[lang]["title"][3]}</p>
                <img className="w-1/4 m-auto mt-5 animate-bounce" src="../img/tap.svg" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ scale: 1, opacity: 1, scale: 1.1 }}
                className="text-sm m-2 mt-0 pt-0"
              >
                <p>{locale[lang]["titleDescription"][0]}</p>
                <br />
                <p>{locale[lang]["titleDescription"][1]}</p>
                <br />
                <p>{locale[lang]["titleDescription"][2]}</p>
              </motion.div>
            )}
          </div>
        </Card>

        <Card size="1/3" key="card-2" scroll={false}>
          <TechStackCard title={locale[lang]["imUsing"]} />
        </Card>
        
        <Card animateHover size="4/12" key="card-3" scroll={false} small>
          <motion.div
            onClick={() => setContactCardClicked(!contactCardClicked)}
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
                  {locale[lang]["contactMe"]}
                </motion.h2>
              </>
            ) : (
              <motion.h2
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, scale: 1.1, translateY: 0 }}
                className="m-auto text-2xl"
              >
                {locale[lang]["mail"]}
              </motion.h2>
            )}
          </motion.div>
        </Card>
        <Card animateHover href="/projects" size="2/5" language={lang}>
          <h2 className="m-auto text-3xl underline">
            {locale[lang]["myProjects"]}
          </h2>
        </Card>
      </div>
      <LangSwitch cycleLanguage={cycleLanguage} language={lang} />
    </div>
  );
};

export default App;
