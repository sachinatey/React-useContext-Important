import { createContext, useState } from "react";

const storeContext = createContext();

const AppProvider = ({ children }) => {
  // ==== Object Section ================

  const list = {
    car: "verna",
    variant: "diesel",
    mileage: "25kmpl",
    cost: "13.30 lakhs",
    desc: "Directly fetching car data from object which is in productcontext.js"
  };

  // ====== State Section ========================

  const [data, setData] = useState({
    name: "Sachin,",
    id: " 1991,",
    desc: "   Click on submit1 and change data to new one"
  });

  const [game, setGame] = useState();

  // =========Function section==============

  const myFunc = () => {
    setData({
      name: "Sachin Best,",
      id: " 2022,",
      desc: "   Data is changed after you clicked on submit1"
    });
  };

  const myFunc2 = () => {
    setGame(
      "myFunc2 is triggered and state is set using setGame. before click on submit2 state was empty"
    );
  };

  return (
    <storeContext.Provider value={{ data, myFunc, game, myFunc2, list }}>
      {children}
    </storeContext.Provider>
  );
};

export { AppProvider, storeContext };
