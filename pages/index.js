import Head from "next/head";
import Card from "./components/Card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const App = () => {
  const [visible, setVisible] = useState(true);

  const wrapperStyle =
    "flex flex-col md:flex-row flex-wrap md:pl-32 md:pr-32 md:pt-10";
  const titleCardStyle =
    "w-min border-r-4 border-blue h-full bg-black opacity-50 text-center p-5 md:p-10";
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
            <h1 className="text-5xl">Łukasz</h1>
            <br />
            <p>
              I'm a FrontEnd Developer aspiring to become a Full Stack
              Developer.
            </p>
            <br />
            <p>Feel free to look around to get to know me better.</p>
          </div>
          <div className="w-3/5 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            ullamcorper velit sed ullamcorper morbi tincidunt. Condimentum
            lacinia quis vel eros donec ac. Consectetur purus ut faucibus
            pulvinar elementum. Quis risus sed vulputate odio ut. Leo vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim.
            Faucibus pulvinar elementum integer enim neque volutpat. Nibh ipsum
            consequat nisl vel pretium lectus quam. Risus feugiat in ante metus
            dictum at.
          </div>
        </Card>
        <Card size="1/3" key="card-2">
          Tech stack (todo)
        </Card>
        <Card href="/projects" size="1/4" key="card-3">
            <AiOutlineMail className="text-9xl m-auto" /><br /><br /><br />
            <h2 className="m-auto text-xl">Contact me</h2>
        </Card>
        <Card href="/projects" size="2/5">
          <h2 className="m-auto text-3xl underline">Check out my projects</h2>
        </Card>
      </div>
    </div>
  );
};

export default App;
