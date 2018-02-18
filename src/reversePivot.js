/***************************************
 *
 * @param {object} data array
 * @param {string?} keyName - default to 'name'
 * @param {string?} valueName - default to 'value'
 * @param {string?} path level at which the reverse pivot is expected to be done
 * 
 * 
 **************************************/

export default function(data, keyName, valueName, path) {
		
		keyName = keyName || 'name' 
		valueName = valueName || 'value'
		path = path || null
		
		//~ console.log('data', data)
			
		data.forEach(function(record, i) {
		
			let entry = path ? record[path] : record
				, transposed = {}
			
			entry.forEach(function(obj) {
				transposed[obj[keyName]] = obj[valueName]
			})
			console.log('transposed', transposed)
			
			data[i] = transposed
			
		})
		
		return data
		
}
