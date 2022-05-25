import { ROW_SIZE } from "../constants";
import { createComponentArray } from "../helpers";
import Cell from "./Cell";

const Row = ({ size }) => {
	let row = createComponentArray(ROW_SIZE, <Cell></Cell>);
	return (
		<>
			<div className=' flex h-max w-full rounded-lg justify-between '>
				{row}
			</div>
		</>
	);
};

export default Row;
