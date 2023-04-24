import { combineReducers } from "redux";
const prepopulatedData = {
	inbox: [
		{
			mId: "guid-1",
			types: "inbox",
			unread: true,
			senderName: "Aditya ||  1",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "Pre Approved Loan",
			isReplied: false,
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
			replies: [
				{
					mId: "guid-9",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
		{
			mId: "guid-2",
			types: "inbox",
			unread: true,
			senderName: " Aditya ||  2",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "You won a lottery!",
			isReplied: false,
			content:
				"You have just won the New York official lottery. Please send us your",
			replies: [
				{
					mId: "guid-10",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
	],
	sent: [
		{
			mId: "guid-3",
			types: "sent",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "Pre Approved Loan",
			isReplied: false,
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
			replies: [
				{
					mId: "guid-11",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
		{
			mId: "guid-4",
			types: "sent",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "nishantrajaug09@gmail.com",
			reciverEmail: "arshEonix@gmail.com",
			subject: "You won a lottery!",
			isReplied: false,
			content:
				"You have just won the New York official lottery. Please send us your",
			replies: [
				{
					mId: "guid-12",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
	],
	trash: [
		{
			mId: "guid-5",
			types: "trash",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "Pre Approved Loan",
			isReplied: false,
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
			replies: [
				{
					mId: "guid-13",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
		{
			mId: "guid-6",
			types: "trash",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "You won a lottery!",
			isReplied: false,
			content:
				"You have just won the New York official lottery. Please send us your",
			replies: [
				{
					mId: "guid-14",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
	],
	spam: [
		{
			mId: "guid-7",
			types: "spam",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "Pre Approved Loan",
			isReplied: false,
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
			replies: [
				{
					mId: "guid-15",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
		{
			mId: "guid-8",
			types: "spam",
			unread: true,
			senderName: " Aditya || ",
			profile: "",
			senderEmail: "arshEonix@gmail.com",
			reciverEmail: "nishantrajaug09@gmail.com",
			subject: "You won a lottery!",
			isReplied: false,
			content:
				"You have just won the New York official lottery. Please send us your",
			replies: [
				{
					mId: "guid-16",
					isReplied: true,
					types: "inbox",
					unread: true,
					senderName: "replies: Aditya ||  1",
					profile: "",
					senderEmail: "arshEonix@gmail.com",
					reciverEmail: "nishantrajaug09@gmail.com",
					subject: "Pre Approved Loan",
					content: "Thanks for letting me know !!",
				},
			],
		},
	],
};
const displayData = [...prepopulatedData.inbox];

const displayMsg = displayData[0];
const initialData = {
	allData: prepopulatedData,
	displayData: displayData,
	displayMsg: displayMsg,
	selectData: "inbox",
};
const reducer = (state = initialData, action) => {
	switch (action.type) {
		case "GET_DATA": {
			return state;
		}
		case "DISPLAY_DATA": {
			return {
				...state,
				displayData: [...state.allData[action.payload]],
				selectData: action.payload,
			};
		}
		case "DISPLAY_MSG": {
			return {
				...state,
				displayMsg: state.displayData.find(
					(e) => e.mId === action.payload
				),
			};
		}
		case "SEND_EMAIL": {
			// let obj = {
			// 	mId: "",
			// 	types: "",
			// 	unread: true,
			// 	profile: "",
			// 	senderEmail: "",
			// 	reciverEmail: "",
			// 	subject: "",
			// 	replies: [],
			// 	content: "",
			// 	d: {
			// 		senderName: "",
			// 		subject: "",
			// 		content: "",
			// 	},
			// };
			let emailData = {
				mId: new Date().getMilliseconds(),
				types: "sent",
				senderEmail: localStorage.getItem("email") || null,
				reciverEmail: action.payload.senderName,
				replies: [],
				unread: false,
				...action.payload,
			};
			console.log("email generated", emailData);
			return {
				...state,
				allData: {
					...state.allData,
					sent: [...state.allData.sent, emailData],
				},
				displayData: [...state.allData["sent"], emailData],
			};
		}
		case "DEL_FROM_DISPLAY_DATA": {
			const { types, id } = action.payload;
			const newInbox = [
				...state.allData[types].filter((e) => e.mId !== id),
			];
			const trashMsg = state.allData[types].find((e) => e.mId !== id);
			// const newDisplayData = [...state.allData[types]];
			console.log("newInbox", action.payload, newInbox);
			// return state;
			return {
				...state,
				allData: {
					...state.allData,
					[types]: newInbox,
					trash:
						types === "inbox"
							? [
									...state.allData.trash,
									{ ...trashMsg, types: "trash" },
							  ]
							: [
									...state.allData.trash.filter(
										(e) => e.mId !== id
									),
							  ],
				},
				displayData: newInbox,
				displayMsg: {
					mId: "",
					types: "",
					unread: true,
					senderName: "",
					profile: "",
					senderEmail: "",
					reciverEmail: "",
					subject: "",
					replies: [],
				},
			};
		}
		default:
			return state;
	}
};
export default reducer;
export const allReducers = combineReducers({ reducer });
