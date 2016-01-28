export const PropertyDecorator = property =>
	data => 
		Object.keys(data).length > 0 ?
			{ [property]: data } :
			{}

export default PropertyDecorator
