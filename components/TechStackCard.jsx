import Image from "next/image";

const TechStackCard = ({ locale }) => {
  const spanClasses = "block text-center border-b m-3 text-xl";
  return (
    <div className="flex flex-col flex-wrap w-full p-6 relative">
      <h2 className="text-center text-5xl">{locale["imUsing"]}</h2>
      <br />
      <div>
        <span className={spanClasses}>Node.js</span>
        <span className={spanClasses}>React.js</span>

        <span className={spanClasses}>Next.js</span>

        <span className={spanClasses}>Express.js</span>
        <span className={spanClasses}>MySQL</span>
        <span className={spanClasses}>MongoDB</span>
      </div>
    </div>
  );
};

export default TechStackCard;
