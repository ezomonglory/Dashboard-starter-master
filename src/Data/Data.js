import {
	UilEstate,
	UilClipboardAlt,
	UilUsersAlt,
	UilPackage,
	UilChart,
	UilSignOutAlt,
	UilMoneyWithdrawal,
	UilUsdSquare,
} from "@iconscout/react-unicons";

import img1 from"../imgs/img1.png"
import img2 from"../imgs/img2.png"
import img3 from"../imgs/img3.png"

// Sidebar Data

export const SidebarData = [
	{
		icon: UilEstate,
		header: "Dashboard",
	},

	{
		icon: UilClipboardAlt,
		header: "Orders",
	},

	{
		icon: UilUsersAlt,
		header: "Customers",
	},

	{
		icon: UilPackage,
		header: "Products",
	},

	{
		icon: UilChart,
		header: "Analytics",
	},
];

export function Sign() {
	return <UilSignOutAlt />;
}

export const CardsData = [
	{
		title: "Sales",
		color: {
			backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 70,
		value: "$27,270",
		png: UilUsdSquare,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

	{
		title: "Revenue",
		color: {
			backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
			boxShadow: "0px 10px 20px 0px #FDC0C7",
		},
		barValue: 80,
		value: "$14,270",
		png: UilMoneyWithdrawal,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

	{
		title: "Expenses",
		color: {
			backGround:
				"linear-gradient(rgb(248, 212, 154)-146.42%, rgb(255 202 113)-46.42%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 60,
		value: "$4,270",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 20, 15, 30, 12, 15, 20],
			},
		],
	},
];

export const UpdatesData = [
	{
		img: img1,
		name: "David Gee",
		noti: "has received an iphone11 promax",
      time: "25 seconds ago"

	},

	{
		img: img2,
		name: "Osazee Collins",
		noti: "has recieved a macbook ",
      time: "45 minuite ago"
	},

	{
		img: img3,
		name: "Osazee Vivian",
		noti: "just received a smartwatch",
      time: "1 hour ago"
	},
];
