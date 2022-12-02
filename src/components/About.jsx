import React, { useContext } from "react";
import { storeContext } from "../context/productcontext";

const About = () => {
  const join = useContext(storeContext);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column my-5">
        <h2>This is About {join.data.name}</h2>
        <button type="submit" onClick={join.myFunc}>
          Submit1
        </button>
        <br />
        <br />
        <button type="submit" onClick={join.myFunc2}>
          Submit2
        </button>
        <br />
        <br />
        {join.data.name}
        {join.data.id}
        {join.data.desc}
        <br />
        <br />
        {join.game}
        <br />
        <br />
        {join.list.car}
        <br />
        {join.list.variant}
        <br />
        {join.list.mileage}
        <br />
        {join.list.cost}
        <br />
        {join.list.desc}
      </div>
    </>
  );
};

export default About;
