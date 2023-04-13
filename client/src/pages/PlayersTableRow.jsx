import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PlayersTableRow = (props) => {
const { playerId, playerName, playerImg, skillsId, plata, clubId} = props.obj;

const deletePlayer = () => {
	axios.delete("http://localhost:8800/players/delete/" + playerId)
	.then((res) => {
		if (res.status === 200) {
		alert("Player successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td className="text-in-table">{playerImg}</td>
	<td><Link className="text-in-table" to={"/players-profile/"+playerId}>{playerName}</Link></td>
	<td className="text-in-table">{plata}</td>
	<td className="text-in-table">{clubId}</td>
	<td>
		<Link className="edit-link text-in-table"
		to={"/edit-player/" + playerId}>
		Edit
		</Link>
		<Button  className="button-bg text delete-btn" onClick={deletePlayer}
		size="sm">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default PlayersTableRow;
