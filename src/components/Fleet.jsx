import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FleetShip from "./FleetShip";
import {
	// placeShip,
	// getSelectedShip,
	getPlacingStatus,
	// ChangeHeadMessage,
	changePlacingPosition,
	// changePlacingStatus,
} from "../store";
import { boat, battlesShip, submarine, ship, carrier } from "../assets";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Fleet = () => {
	const dispatch = useDispatch();
	// const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
	const [placingPosition, setPlacingPosition] = useState("v");
	const [fleet, setFleet] = useState([]);
	// useEffect(() => {
	// 	if (selectedShip !== "") {
	// 		setFleet([...fleet, selectedShip]);
	// 		if (fleet.length === 4) {
	// 			// dispatch(endPlacing());
	// 		}
	// 	}
	// }, [selectedShip]);

	return (
		<>
			<div className={placingStatus === "end" ? "hidden" : null}>
				<div className=' absolute   '>
					<div className='relative   left-0 top-0' id='fleet'>
						<div className='-mt-8 mb-2 sm:max-w-[8rem]  max-w-[4rem] '>
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
								className='mt-1 block w-full py-2 px-3 border text-3xl  text-white border-black-300 bg-mainmeduimblue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm'
							>
								<option value='v'>Vertical</option>
								<option value='h'>Horizontal</option>
							</select>
						</div>
						<div className='flex md:flex-col text-center'>
							<FleetShip
								setFleet={setFleet}
								fleet={fleet}
								cells={1}
								img={boat}
								name={"boat"}
							/>
							<FleetShip
								setFleet={setFleet}
								fleet={fleet}
								cells={2}
								img={ship}
								name={"ship"}
							/>
							<FleetShip
								setFleet={setFleet}
								fleet={fleet}
								cells={3}
								img={submarine}
								name={"submarine"}
							/>
							<FleetShip
								setFleet={setFleet}
								fleet={fleet}
								cells={4}
								img={battlesShip}
								name={"battlesShip"}
							/>
							<FleetShip
								setFleet={setFleet}
								fleet={fleet}
								cells={4}
								img={carrier}
								name={"carrier"}
							/>
						</div>
					</div>
				</div>
			</div>
			{placingStatus === "end" ? (
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
