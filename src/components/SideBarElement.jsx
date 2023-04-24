import { useDispatch, useSelector } from "react-redux";
import "./styles/SideBarElement.css";
import { setDisplayData } from "../Redux/Actions";

const SideBarElement = ({ sideBarEle, active }) => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.reducer.selectData);
	console.log("selectData", selector);
	const image = {
		inbox: "images/mail.png",
		spam: "images/spam (1).png",
		trash: "images/delete.png",
		sent: "images/send (1).png",
	};
	return (
		<div
			onClick={() => dispatch(setDisplayData(sideBarEle))}
			className={`sidebarElement ${
				selector === sideBarEle && `actives`
			}`}>
			<img width={20} src={image[sideBarEle]} alt={sideBarEle} />
			<p className="folderType">{sideBarEle}</p>
		</div>
	);
};

export default SideBarElement;
