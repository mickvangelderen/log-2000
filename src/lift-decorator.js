// Splits a property from the data.

const LiftDecorator = property => 
	data => {
		if (property in data) {
			const value = data[property]
			delete data[property]
			return { [property]: value }
		}
		return {}
	}

export default LiftDecorator
