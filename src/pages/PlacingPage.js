import React from "react";
import { boat, battlesShip, submarine, ship, carrier } from "../assests";
import {} from "../components";
const PlacingPage = () => {
	return (
		<div className='flex flex-col justify-start items-center p-2 bg-mainblue text-bage h-[var(--contentHeight)]'>
			<h1 className='text-2xl text-black font-bold'>Place Your Fleet </h1>
			<div className=' absolute'>
				<div className=' w-screen '>
					<div className='relative  left-8 top-8' id='fleet'>
						<span>
							<img src={boat} alt='boat' className='item' />{" "}
							<p>boat(1)</p>
						</span>
						<span>
							<img src={ship} alt='ship' className='item' />{" "}
							<p>ship(2)</p>
						</span>
						<span>
							<img
								src={submarine}
								alt='submarine'
								className='item'
							/>{" "}
							<p>submarine(3)</p>
						</span>
						<span>
							<img
								src={battlesShip}
								alt='battlesShip'
								className='item'
							/>
							<p>battlesShip(4)</p>
						</span>
						<span>
							<img src={carrier} alt='carrier' className='item' />{" "}
							<p>Carrier(5) </p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlacingPage;
