import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	placeShip,
	getSelectedShip,
	endPlacing,
	getPlacingStatus,
	ChangeHeadMessage,
	changeGameState,
	changePlacingPostion,
	changePlacingType,
} from "../store";
import { ToastContainer, toast } from "react-toastify";
import { boat, battlesShip, submarine, ship, carrier } from "../assests";
import { Link } from "react-router-dom";

const Fleet = () => {
	const [fleet, setFleet] = useState([]);
	const dispatch = useDispatch();
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
	const [holdPosition, setHoldPosition] = useState("start");
	const selected = (nameOfShip) => {
		dispatch(placeShip(nameOfShip));
	};

	const isPlaced = (shipName) => {
		if (fleet.includes(shipName)) {
			dispatch(ChangeHeadMessage("Now Placing " + shipName));
			return "hidden";
		} else return null;
	};

	useEffect(() => {
		if (selectedShip !== "") {
			setFleet([...fleet, selectedShip]);
			if (fleet.length === 4) {
				dispatch(endPlacing());
			}
		}
	}, [selectedShip]);

	return (
		<>
			<div className={placingStatus ? "hidden" : null}>
				<div className=' absolute   '>
					<div className='relative   left-0 top-0' id='fleet'>
						<div className='-mt-16 max-w-[8rem]  sm:max-w-none '>
							<select
								id='holdingPosition'
								name='holdingPosition'
								value={holdPosition}
								onChange={(e) => {
									setHoldPosition(() => e.target.value);
									console.log(holdPosition);
									dispatch(changePlacingPostion(holdPosition));
									toast.success(`Ship position now Is  ${holdPosition}`);
								}}
								class='mt-1 block w-full py-2 px-3 border text-3xl  text-white border-gray-300 bg-mainmeduimblue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							>
								<option value='start'>Start</option>
								<option value='center'>Center</option>
								<option value='end'>End</option>
							</select>
						</div>
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
								<img src={submarine} alt='submarine' className='item' />
								<p>submarine(3)</p>
							</span>
							<span
								onClick={() => {
									selected("battlesShip");
								}}
								className={isPlaced("battlesShip")}
							>
								<img src={battlesShip} alt='battlesShip' className='item' />
								<p>battlesShip(4)</p>
							</span>
							<span
								onClick={() => {
									selected("carrier");
								}}
								className={isPlaced("carrier")}
							>
								<img src={carrier} alt='carrier' className='item' />
								<p>Carrier(5) </p>
							</span>
						</div>
					</div>
				</div>
			</div>
			{placingStatus ? (
				<>
					<div className=' absolute'>
						<button className=' relative top-10 md:top-40 md:left-10 left-40 btn w-[100%] mx-auto my-auto'>
							<Link to={"/battle"}>Start Battle</Link>
						</button>
					</div>
				</>
			) : null}
		</>
	);
};

export default Fleet;
