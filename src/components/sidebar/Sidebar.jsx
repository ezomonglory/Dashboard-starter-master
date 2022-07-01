import React from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData, Sign } from "../../Data/Data";
import { useState } from "react";
import {UilBars} from "@iconscout/react-unicons";
import {motion} from "framer-motion"

export const Sidebar = () => {
	const [isActive, setIsActive] =useState(0)
	const [expanded, setExpanded] = useState(true)
	
	const sidebarVariants = {
		true:{
			left:"0"
		},
		false:{
			left: "-60%"
		}
	}
	return (
	<>
	<div className="bars" style={expanded?{left:"60%"}: {left:"5%"}} onClick={(()=>setExpanded(!expanded))}>
		<UilBars/>
	</div>
		<motion.div className='sidebar'
			variants={sidebarVariants}
			animate={window.innerWidth <=768 ? `${expanded}` : ""}
		>
			{/* logo */}
			<div className='logo'>
				<img src={Logo} alt='' />
				<span>
					Sh<span>o</span>ps
				</span>
			</div>

			{/* menu */}

			<div className='menu'>
				{SidebarData.map((items, index) => {
					return (
						<div className={isActive === index ? "active menuItem" : "menuItem"}
						key={index}
						onClick={()=>{setIsActive(index)}}
						>
							<items.icon />
							<span>{items.header}</span>
						</div>
					);
				})}

				<div className='menuItem'>
					<Sign />
				</div>
			</div>
		</motion.div>
		
	</>
	);
};
