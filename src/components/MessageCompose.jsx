import ReplyIcon from "@mui/icons-material/Reply";
import ShortcutIcon from "@mui/icons-material/Shortcut";
const MessageCompose = ({ displayMsg }) => {
	return (
		<>
			<div className="subject">
				<p style={{ display: "flex", alignItems: "center" }}>
					{displayMsg.isReplied === true ? (
						<ReplyIcon />
					) : (
						<ShortcutIcon />
					)}{" "}
					{displayMsg.types}: {displayMsg.senderName}
				</p>
			</div>
			<div className="actualmsg">
				<div className="msgplimg">
					<img src="images/img4.jpg" alt="" />
				</div>
				<div className="msgplmsg">
					<div className="msgUpperDetails">
						<div className="msgpldetailsfirsthalf">
							<p style={{ color: "#0078D4" }}>
								{displayMsg.senderName}
							</p>
							<p className="msgtime">FRI 7/28/2017 3:10PM</p>
						</div>
						<div className="msgpldetailsecondhalf"></div>
					</div>
					<div className="msgLowerDetails">
						<p>
							hey {displayMsg.content} <br /> Lorem ipsum dolor
							sit amet consectetur, adipisicing elit. Nobis itaque
							tempora magnam ipsa ut temporibus quaerat sequi
							perferendis qui architecto voluptatem sunt nisi modi
							iusto, tempore obcaecati. Quas error tempora
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageCompose;
