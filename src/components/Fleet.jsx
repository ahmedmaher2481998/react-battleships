import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeShip, getSelectedShip } from "../store";
import { boat, battlesShip, submarine, ship, carrier } from "../assests";
const Fleet = () => {
	const dispatch = useDispatch();
	const selectedShip = useSelector(getSelectedShip());
	const selected = (nameOfShip) => {
		dispatch(placeShip(nameOfShip));
	};

	return (
		<>
			<div>
				<div className=' absolute'>
					<div className='relative   left-0 top-0' id='fleet'>
						<div className='flex md:flex-col text-center'>
							<span
								className={`${
									selectedShip === "boat" ? "hidden" : ""
								}`}
								onClick={() => {
									selected("boat");
								}}
							>
								<img src={boat} alt='boat' className='item' />
								<p>boat(1)</p>
							</span>
							<span
								className={`${
									selectedShip === "ship" ? "hidden" : ""
								}`}
								onClick={() => {
									selected("ship");
								}}
							>
								<img src={ship} alt='ship' className='item' />
								<p>ship(2)</p>
							</span>
							<span
								className={`${
									selectedShip === "submarine" ? "hidden" : ""
								}`}
								onClick={() => {
									selected("submarine");
								}}
							>
								<img
									src={submarine}
									alt='submarine'
									className='item'
								/>
								<p>submarine(3)</p>
							</span>
							<span
								className={`${
									selectedShip === "battlesShip"
										? "hidden"
										: ""
								}`}
								onClick={() => {
									selected("battlesShip");
								}}
							>
								<img
									src={battlesShip}
									alt='battlesShip'
									className='item'
								/>
								<p>battlesShip(4)</p>
							</span>
							<span
								className={`${
									selectedShip === "carrier" ? "hidden" : ""
								}`}
								onClick={() => {
									selected("carrier");
								}}
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
		</>
	);
};

export default Fleet;
