/***************************************
 *
 * @param {object} data array
 * @param {string?} path level at which the reverse pivot is expected to be done
 * @param {string?} keyName - default to 'name'
 * @param {string?} valueName - default to 'value'
 * 
 * 
 **************************************/

export default function(data, path, keyName, valueName) {
		
		keyName = keyName || 'name' 
		valueName = valueName || 'value'
		path = path || null
		
		//~ console.log('data', data)
			
		data.forEach(function(record, i) {
		
			let entry = record
				, transposed = {}
			
			if (path) {
			
					path = path.split('.')
					
					path.forEach(function(pathElem) {
						entry = entry[pathElem]
					})
			}
			
			
			if (typeof entry !== 'undefined') {
			
				entry.forEach(function(obj) {
					transposed[obj[keyName]] = obj[valueName]
				})
				//~ console.log('transposed', transposed)
				
				data[i] = transposed
			}
			
		})
		
		return data
		
}
