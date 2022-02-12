import React from "react";
import { clear } from "redux-localstorage-simple";
import { Button } from "@mui/material";
const VillainsPage = () => {
  return (
    <div>
      <h1>Villains Page</h1>
      <Button onClick={() => clear()}>PURGE</Button>
    </div>
  );
};

export default VillainsPage;
