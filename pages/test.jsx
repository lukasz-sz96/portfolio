import Head from "next/head";
import Card from "./components/Card";
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
      <div className="flex flex-row flex-wrap p-32">
          <Card href="/" large gradient key="card-3" />
      </div>
    </div>
  );
};

export default Test;
