import { Fragment, useState } from "react";


function ListGroup() {
  let countries = ["Nigeria", "Togo", "Benin", "Cameroun"];
  

  
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      {countries.length === 0 && <p>no country found</p>}
      <ul className="list-group">
        {countries.map((countries, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={countries}
            onClick={()=>{setSelectedIndex(index)}}
          >
            {countries}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
