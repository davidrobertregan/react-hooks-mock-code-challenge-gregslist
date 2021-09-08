import React from "react";
import Search from "./Search";

function Header( {setSearchFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchFilter={setSearchFilter}/>
    </header>
  );
}

export default Header;
