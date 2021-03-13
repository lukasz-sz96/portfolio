import Head from "next/head";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "../components/Tag";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 ? true : false);
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10">
        <Card href="" size="1/3" animateHover source="https://google.com" isMobile={isMobile}>
          <h2 className="m-auto text-7xl p-4">Portfolio</h2>
          <div className="flex flex-col items-right justify-center text-center overflow-hidden">
            <Tag type="Next.js" />
            <Tag type="Tailwind.css" />
          </div>
        </Card>
        <Card href="" size="1/3" animateHover demo="https://google.com/" source="https://google.com/" isMobile={isMobile}>
          <h2 className="m-auto text-7xl bg-blue-500 p-4 rounded-3xl">blog</h2>
          <div className="flex flex-col items-right justify-center text-center overflow-hidden">
            <Tag type="Next.js" />
            <Tag type="MongoDB" />
          </div>
        </Card>
        <Card href="/" size="1/7" animateHover small red>
          <h2 className="m-auto text-7xl p-4">Return</h2>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
