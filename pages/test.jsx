import Head from "next/head";
import Card from "../components/Card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Test = () => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    // setVisible(false)
  }, 5000);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10">
          <Card href="/" size="2/4" gradient key="card-4" />
          <Card href="/" size="1/3" key="card-5" />
      </div>
    </div>
  );
};

export default Test;
