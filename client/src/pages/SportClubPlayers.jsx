
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PlayersTableRow from "./PlayersTableRow"
  
const SportClubPlayers = () => {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8800/clubs/players")
      .then(({ data }) => {
        setPlayers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return players.map((res, i) => {
      return <PlayersTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr className="text-in-table">
            <th>Player name</th>
            <th>Player img</th>
            <th>Skills</th>
            <th>Plata</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default SportClubPlayers;