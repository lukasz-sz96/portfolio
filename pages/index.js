import Head from "next/head";
import Card from "./components/Card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [visible, setVisible] = useState(true);

  const wrapperStyle = "flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10"
  const titleCardStyle = "w-min border-r-4 border-blue h-full bg-black opacity-50 text-center p-5 md:p-10"
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={wrapperStyle}>
        <Card href="/test" size="2/4" gradient key="card-1">
          <div className={titleCardStyle}>
            <h2>Hi! I'm</h2>
            <h1 className="text-5xl">Łukasz</h1><br />
            <p>I'm a FrontEnd Developer aspiring to become a Full Stack Developer.</p><br />
            <p>Feel free to look around to get to know me better.</p>
          </div>
          <div className="w-3/5">Test test test</div>
        </Card>
        <Card size="1/3" key="card-2" />
        <Card size="1/4" key="card-3" />
        <Card size="2/4" gradient />
      </div>
    </div>
  );
};

export default App;
