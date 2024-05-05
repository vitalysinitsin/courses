import "./SearchBar.css";
import { useEffect, useState } from "react";

function SearchBar({ onSubmit }) {
  const [userQuery, setUserQuery] = useState("");

  /**
   * handleFormSubmit fires up the api request only
   * after user is done entering a query and pressed ENTER
   */
  const handleFormSubmit = (event) => {
    /**
     * prevents the default request being sent using
     * input values within the form and name props as
     * keys like so: url.com?searchQueryForImages=<inputValue>
     */
    event?.preventDefault();

    if (!!userQuery) {
      onSubmit(userQuery);
    }
  };

  /**
   * testing out interactive effect handling with useEffect
   * to test it out uncomment the lines 29-31
   */
  useEffect(() => {
    const requestOnTimeout = setTimeout(() => {
      //if (!!userQuery) {
      //   onSubmit(userQuery);
      //}
    }, 2000);

    /**
     * cleans up the side effects either after componentDidUnmount
     * OR after the effect started over again. This way the timeout
     * only ends if the user stops firing events or 2000ms pass.
     */
    return () => clearInterval(requestOnTimeout);
  }, [userQuery, onSubmit]);

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="What do you want to see"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          name="searchQueryForImages"
        />
      </form>
    </div>
  );
}

export default SearchBar;
