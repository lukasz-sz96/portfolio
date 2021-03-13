const LangSwitch = ({language, cycleLanguage}) => {
    const nextLanguageHint = () => {
        if (language === "en") {
            return "Polish"
        } else {
            return "English"
        }
    }
    return(
        <button onClick={() => cycleLanguage()} className="fixed bottom-4 right-4 rounded-md gradient p-2 text-white">Switch to {nextLanguageHint()}</button>
    )
}

export default LangSwitch