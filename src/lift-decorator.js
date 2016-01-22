export const liftDecorator = property => 
	data => {
		if (property in data) {
			const value = data[property]
			delete data[property]
			return { [property]: value }
		}
		return {}
	}

export default liftDecorator
