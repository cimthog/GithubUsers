import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, searchUsers, setAlert, clearUsers }) => {
  const [text, setText] = useState(" ");
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text !== " ") {
      searchUsers(text);
      setText(" ");
    } else {
      setAlert("Invalid search entry", "light");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
