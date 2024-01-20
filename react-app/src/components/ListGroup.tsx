import { Fragment } from "react";

function ListGroup() {
  let countries = ["Nigeria", "Togo", "Benin", "Cameroun"];
  countries = [];
  const checklength = countries.length===0? <p>no country found</p> :null

  return (
    <>
    
    {checklength}
      <ul className="list-group">
        {countries.map((countries) => (
          <li key={countries}>{countries}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
