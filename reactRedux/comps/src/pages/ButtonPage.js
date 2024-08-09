import Button from "../components/Button";
import "./index.css";
import { GoBell, GoAlert, GoDatabase, GoGear } from "react-icons/go";

function ButtonPage() {
  const handleClickSuccess = () => {
    console.log("click");
  };
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
