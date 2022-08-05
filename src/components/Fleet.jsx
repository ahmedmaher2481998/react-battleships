import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	placeShip,
	getSelectedShip,
	getPlacingStatus,
	ChangeHeadMessage,
	changePlacingPosition,
} from "../store";
import { boat, battlesShip, submarine, ship, carrier } from "../assets";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const FleetShip = ({ img, name, selected, cells, isPlaced }) => {
	return (
		<>
			<span
				onClick={() => {
					selected({ name });
				}}
				className={isPlaced({ name })}
			>
				<img src={img} alt={name} className='item' />
				<p>{`${name} (${cells})`}</p>
			</span>
		</>
	);
};
const Fleet = () => {
	const [fleet, setFleet] = useState([]);
	const dispatch = useDispatch();
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
	const [placingPosition, setPlacingPosition] = useState("v");
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
				// dispatch(endPlacing());
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
								id='placingPosition'
								name='placingPosition'
								value={placingPosition}
								onChange={(e) => {
									setPlacingPosition(() => e.target.value);
									console.log(placingPosition);
									dispatch(changePlacingPosition(placingPosition));
									toast.success(`Ship position now Is  ${placingPosition}`);
								}}
								class='mt-1 block w-full py-2 px-3 border text-3xl  text-white border-gray-300 bg-mainmeduimblue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							>
								<option value='v'>Vertical</option>
								<option value='h'>Horizontal</option>
							</select>
						</div>
						<div className='flex md:flex-col text-center'>
							<FleetShip
								cells={1}
								img={boat}
								isPlaced={isPlaced}
								selected={selected}
								name={"boat"}
							/>
							<FleetShip
								cells={2}
								img={ship}
								isPlaced={isPlaced}
								selected={selected}
								name={"ship"}
							/>
							<FleetShip
								cells={3}
								img={submarine}
								isPlaced={isPlaced}
								selected={selected}
								name={"submarine"}
							/>
							<FleetShip
								cells={4}
								img={battlesShip}
								isPlaced={isPlaced}
								selected={selected}
								name={"battlesShip"}
							/>
							<FleetShip
								cells={4}
								img={carrier}
								isPlaced={isPlaced}
								selected={selected}
								name={"carrier"}
							/>
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
