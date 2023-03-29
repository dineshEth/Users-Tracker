import { useContext, createContext, Children } from "react";


const StateContext = createContext();


export const StateContextProvider = ({Children}) =>{


    return(
        <StateContext.Provider>
            {Children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);