import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      home
      <Link to="/search">Search</Link>
    </div>
  );
}

export default HomePage;
