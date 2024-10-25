import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Link to="/accordion">accordion</Link>
      <Link to="/dropdown">dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage></AccordionPage>
        </Route>
        <Route path="/dropdown">
          <DropdownPage></DropdownPage>
        </Route>
      </div>
    </div>
  );
}

export default App;
