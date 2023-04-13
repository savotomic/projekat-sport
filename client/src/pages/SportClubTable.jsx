
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import ClubTableRow from "./ClubTableRow";
import ClubForm from "./ClubForm.jsx";
import { Link } from "react-router-dom";

  
const SportClubTable = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/clubs")
      .then(({ data }) => {
        setClubs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return clubs.map((res, i) => {
      return <ClubTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Button className="button-bg">
      <Link className="edit-link text"
      to={"/add-club"}>
      + Add club
		</Link>
    </Button>
      <Table striped bordered hover>
        <thead>
          <tr className="text-in-table">
            <th>Club name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default SportClubTable;