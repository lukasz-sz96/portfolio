import Head from "next/head";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tag from "../components/Tag";
import { useRouter } from "next/router";
import locale from "../locale";

const Projects = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState("en");
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window?.innerWidth < 768 ? true : false);
    setLang(router.query.lang || "en");
  }, []);
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10">
        <Card
          href=""
          size="1/3"
          animateHover
          source="https://github.com/lukasz-sz96/portfolio"
          isMobile={isMobile}
        >
          <h2 className="m-auto text-5xl xl:text-7xl text- p-4">Portfolio</h2>
          <div className="flex flex-col items-right justify-center text-center overflow-hidden">
            <Tag type="Next.js" />
            <Tag type="Tailwind.css" />
          </div>
        </Card>
        <Card
          href=""
          size="1/3"
          animateHover
          demo="https://blog-tau-mauve.vercel.app/"
          source="https://github.com/lukasz-sz96/blog"
          isMobile={isMobile}
        >
          <h2 className="m-auto text-7xl bg-blue-500 p-4 rounded-3xl">blog</h2>
          <div className="flex flex-col items-right justify-center text-center overflow-hidden">
            <Tag type="Next.js" />
            <Tag type="MongoDB" />
          </div>
        </Card>
        <Card href="/" size="1/7" animateHover small red language={lang}>
          <h2 className="m-auto text-7xl p-4">{locale[lang]["return"]}</h2>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
