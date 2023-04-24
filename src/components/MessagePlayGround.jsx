import { useSelector } from "react-redux";
import "./styles/MessagePlayGround.css";
import {
	AppBar,
	Button,
	ButtonGroup,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageCompose from "./MessageCompose";

const MessagePlayGround = () => {
	const { displayMsg } = useSelector((state) => state.reducer);
	// const displayMsg = displayData[0];
	console.log("displayMsg", displayMsg);
	return (
		<>
			{displayMsg && (
				<div className="msgplaygrnd">
					<MessageCompose displayMsg={displayMsg} />

					{displayMsg.replies.map((e) => {
						return (
							<>
								<MessageCompose displayMsg={e} />
							</>
						);
					})}

					<div className="sendMsg">
						<TextField
							// autoFocus
							margin="dense"
							id="name"
							label="Subject"
							type="email"
							color="grey"
							fullWidth
							variant="standard"
						/>
						<TextField
							// autoFocus
							margin="dense"
							id="name"
							// label="reply"
							type="email"
							fullWidth
							variant="standard"
						/>
						<ButtonGroup
							style={{
								marginTop: "10px",
								// justifyContent: "space-around",
								// backgroundColor: "#3",
							}}
							className="btngrp">
							<Button color="primary" variant="contained">
								Send
							</Button>
							<Button color="primary" variant="outlined">
								Discard
							</Button>
							<Button color="primary" variant="outlined">
								<AttachFileIcon />
							</Button>
							<Button color="primary" variant="outlined">
								<CollectionsIcon />
							</Button>
							<Button color="primary" variant="outlined">
								<MoreHorizIcon />
							</Button>
						</ButtonGroup>
					</div>
				</div>
			)}
		</>
	);
};

export default MessagePlayGround;
