export const createMany = (size, component) => {
	let arrayOfComponents = [];
	for (let i = 0; i < size; i++) {
		arrayOfComponents.push(component);
	}
	return arrayOfComponents;
};
