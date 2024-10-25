import React from "react";
import Button from "../components/Button";
import "../index.css";
import { GoAlert, GoBell, GoDatabase, GoGear } from "react-icons/go";

function ButtonPage() {
  const handleClickSuccess = () => {};
  return (
    <>
      <Button primary rounded>
        <GoBell />
        Importanto
      </Button>
      <Button secondary outline>
        <GoAlert />
        itsokay
      </Button>
      <Button warning>
        <GoDatabase />
        maybe?
      </Button>
      <Button danger>
        <GoGear />
        no no
      </Button>
      <Button success onClick={handleClickSuccess}>
        YES!
      </Button>
    </>
  );
}

export default ButtonPage;
