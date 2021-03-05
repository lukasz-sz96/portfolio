import Head from "next/head";
import Card from "./components/Card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
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
      <div className="flex flex-row flex-wrap pl-32 pr-32 pt-10">
        <Card href="/test" large gradient key="card-1" />
        <Card key="card-2" />
        <Card key="card-3" />
        <Card large gradient />)
      </div>
    </div>
  );
};

export default App;
