export const stringTransformer = property => 
	data => {
		if (typeof data === 'string') {
			return { [property]: data }
		}
		return data
	}

export default stringTransformer
