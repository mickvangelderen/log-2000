export const StringTransformer = property => 
	data => 
		typeof data === 'string' ?
			{ [property]: data } :
			data

export default StringTransformer
