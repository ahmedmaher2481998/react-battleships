import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	placeShip,
	getSelectedShip,
	endPlacing,
	getPlacingStatus,
} from "../store";
import { boat, battlesShip, submarine, ship, carrier } from "../assests";
import { Link } from "react-router-dom";

const Fleet = () => {
	const [fleet, setFleet] = useState([]);
	const dispatch = useDispatch();
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
	const selected = (nameOfShip) => {
		dispatch(placeShip(nameOfShip));
	};
	const isPlaced = (shipName) => {
		if (fleet.includes(shipName)) {
			return "hidden";
		} else return null;
	};
	console.log(selectedShip);
	console.log(fleet);
	useEffect(() => {
		if (selectedShip !== "") {
			setFleet([...fleet, selectedShip]);
			console.log(fleet.length);
			if (fleet.length === 4) {
				console.log("done");
				dispatch(endPlacing());
			}
		}
	}, [selectedShip]);
	return (
		<>
			<div className={placingStatus ? "hidden" : null}>
				<div className=' absolute'>
					<div className='relative   left-0 top-0' id='fleet'>
						<div className='flex md:flex-col text-center'>
							<span
								onClick={() => {
									selected("boat");
								}}
								className={isPlaced("boat")}
							>
								<img src={boat} alt='boat' className='item' />
								<p>boat(1)</p>
							</span>
							<span
								onClick={() => {
									selected("ship");
								}}
								className={isPlaced("ship")}
							>
								<img src={ship} alt='ship' className='item' />
								<p>ship(2)</p>
							</span>
							<span
								onClick={() => {
									selected("submarine");
								}}
								className={isPlaced("submarine")}
							>
								<img
									src={submarine}
									alt='submarine'
									className='item'
								/>
								<p>submarine(3)</p>
							</span>
							<span
								onClick={() => {
									selected("battlesShip");
								}}
								className={isPlaced("battlesShip")}
							>
								<img
									src={battlesShip}
									alt='battlesShip'
									className='item'
								/>
								<p>battlesShip(4)</p>
							</span>
							<span
								onClick={() => {
									selected("carrier");
								}}
								className={isPlaced("carrier")}
							>
								<img
									src={carrier}
									alt='carrier'
									className='item'
								/>
								<p>Carrier(5) </p>
							</span>
						</div>
					</div>
				</div>
			</div>
			{placingStatus ? (
				<>
					<div></div>
					<button className='btn w-[100%]'>
						<Link to='battle'>Start Battle</Link>
					</button>{" "}
				</>
			) : null}
		</>
	);
};

export default Fleet;
