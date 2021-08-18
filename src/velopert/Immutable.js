import React from "react";
import PhoneForm from "./Compoenents/PhoneForm";

const Immutable = () => {
  const handleCreate = (data) => {
    console.log(data);
  };

  return (
    <>
      <PhoneForm onCreate={handleCreate} />
    </>
  );
};

export default Immutable;
