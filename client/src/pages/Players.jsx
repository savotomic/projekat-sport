
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import PlayersTableRow from "./PlayersTableRow"
import {Link } from 'react-router-dom'
  
const Players = () => {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8800/players")
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
      <Button className="button-bg">
        <Link className="edit-link text"
          to={"/add-player"}>
          + Add player
          </Link>
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr className="text-in-table">
            <th>Player img</th>
            <th>Player name</th>
            <th>Plata</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default Players;