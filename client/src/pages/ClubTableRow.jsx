import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ClubTableRow = (props) => {
const { id, name} = props.obj;

const deleteClub = () => {
	axios.delete("http://localhost:8800/clubs/delete/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Club successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td><Link className="text-in-table" to={"/club-players/"+id}>{name}</Link></td>
	<td>
		<Link className="edit-link text-in-table" to={"/edit-club/" + id}>
		Edit
		</Link>
		<Button className="button-bg text delete-btn" onClick={deleteClub}
		size="sm">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ClubTableRow;
