import Head from "next/head";
import Card from "../components/Card";
import TechStackCard from "../components/TechStackCard";
import LangSwitch from "../components/LangSwitch";
import TitleCardContent from '../components/TitleCardContent'
import ContactCardContent from '../components/ContactCardContent'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const cycleTitleCardState = () => {
    setTitleCardClicked(!titleCardClicked)
  }
  const cycleContactCardState = () => {
    setContactCardClicked(!contactCardClicked)
  }

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10 max-h-full">
        <Card href="" size={titleCardClicked ? '2/4' : '1/4'} gradient scroll={false} key="card-1">
          <TitleCardContent titleCardClicked={titleCardClicked} cycleTitleCardState={cycleTitleCardState} locale={locale[lang]} />
        </Card>

        <Card size="1/3" key="card-2" scroll={false}>
          <TechStackCard locale={locale[lang]} />
        </Card>
        
        <Card animateHover size="4/12" key="card-3" scroll={false} small>
          <ContactCardContent contactCardClicked={contactCardClicked} cycleContactCardState={cycleContactCardState} locale={locale[lang]} />
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
