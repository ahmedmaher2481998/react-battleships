import React from "react";
import { boat, battlesShip, submarine, ship, carrier } from "../assests";
const Fleet = () => {
	return (
		<>
			<div>
				<div className=' absolute'>
					<div className='relative   left-0 top-0' id='fleet'>
						<div className='flex md:flex-col text-center'>
							<span>
								<img src={boat} alt='boat' className='item' />
								<p>boat(1)</p>
							</span>
							<span>
								<img src={ship} alt='ship' className='item' />
								<p>ship(2)</p>
							</span>
							<span>
								<img
									src={submarine}
									alt='submarine'
									className='item'
								/>
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
