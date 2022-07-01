import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

export const Card = (props) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard
					params={props}
					setExpanded={() => {
						setExpanded(false);
					}}
				/>
			) : (
				<CompactCard
					param={props}
					setExpanded={() => {
						setExpanded(true);
					}}
				/>
			)}
		</AnimateSharedLayout>
	);
};

//Compact Card
const CompactCard = ({ param, setExpanded }) => {
	const Png = param.png;
	return (
		<div
			className='CompactCard'
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow,
			}}
			onClick={setExpanded}

            layoutId="expandableCard"
		>
			<div className='RadialBar'>
				<CircularProgressbar
					value={param.barValue}
					text={`${param.barValue}%`}
				/>
				<span>{param.title}</span>
			</div>

			<div className='details'>
				<Png />
				<span>{param.value}</span>
				<span>Last 24 hours</span>
			</div>
		</div>
	);
};

// expanded card

const ExpandedCard = ({ params, setExpanded }) => {
	const data = {
		options: {
			chart: {
				type: "area",
				height: "auto",
			},

			dropShadow: {
				enabled: false,
				enebledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				colors: "#000",
				opacity: 0.35,
			},

			fill: {
				colors: ["#fff"],
				type: "gradient",
			},

			dataLabels: {
				enabled: false,
			},

			strole: {
				curve: "smooth",
				colors: ["white"],
			},

			tooltip: {
				x: {
					format: "dd,MM,yy  HH:mm",
				},
			},

			grid: {
				show: true,
			},

			xaxis: {
				type: "datetime",
				categories: [
					"2018-09-19T00:00:00:000Z",
					"2018-09-19T01:30:00:000Z",
					"2018-09-19T02:30:00:000Z",
					"2018-09-19T03:30:00:000Z",
					"2018-09-19T04:30:00:000Z",
					"2018-09-19T05:30:00:000Z",
					"2018-09-19T06:30:00:000Z",
				],
			},
		},
	};
	return (
		<div
			className='expandedCard'
			style={{
				background: params.color.backGround,
				boxShadow: params.color.boxShadow,
			}}
            layoutId="expandableCard"
		>
			<div style={{alignSelf:"flex-end", color:"white", cursor:"pointer"}}>
				<UilTimes onClick={setExpanded} />
			</div>
			<span>{params.title}</span>
			<div className='chart-container'>
				<Chart series={params.series} type='area' options={data.options} />
			</div>
			<span>last 24 hours</span>
		</div>
	);
};
