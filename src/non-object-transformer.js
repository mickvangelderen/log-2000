export const NonObjectTransformer = property => 
	data => 
		data === null || typeof data !== 'object' ?
			{ [property]: data } :
			data

export default NonObjectTransformer
