import { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = (props) =>{
    const [showContactModal, setShowContactModal] = useState(false);
    return(
        <MyContext.Provider value={{showContactModal, setShowContactModal}}>
            {props.children}
        </MyContext.Provider>
    )
}


export default MyContext;