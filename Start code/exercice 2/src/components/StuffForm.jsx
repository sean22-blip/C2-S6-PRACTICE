import React, { useState } from "react";

export default function StuffForm({ stuffs, setStuffs }) {
  const [sname, setName] = useState("");
  const [sprice, setPrice] = useState("");

  const addItem = (e) => {
    if (!sname || !sprice) return;

    const newStuff = {
      name: sname,
      price: Number(sprice),
    };
    setStuffs([...stuffs, newStuff]);
    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={addItem}>
      <p>Stuff name</p>
      <input type="text"placeholder="Banana"value={sname}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input type="number" placeholder="15" alue={sprice}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}