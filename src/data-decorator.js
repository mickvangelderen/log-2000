export const dataDecorator = data => {
	let hasProperties = false
	for (const _ in data) {
		hasProperties = true
		break
	}
	return hasProperties ? { data } : {}
}

export default dataDecorator
