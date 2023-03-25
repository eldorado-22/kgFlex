import React, {useState} from 'react';
import {LanguageContext} from "./index";

const RootContext = ({children}) => {

    const [language, setLanguage] = useState("en-US")

    return (
        <LanguageContext.Provider value={{
            language, setLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;