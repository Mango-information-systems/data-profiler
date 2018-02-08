const debug = require('debug')('structure')

module.exports = {
	
	stats: function(data, depth) {
		
		let counters = {}
			, stats = []
		console.log('data', data)
		
		data.forEach(function(record) {
		
			console.log('record', record)
		
			Object.keys(record).forEach(function(property) {
				
				// count occurence
				counters[property] = ++counters[property] || 1
				
				// compute min and max length
				//~ if (['$'].indexOf(property) === -1)
					//~ computeLength(api.name, property, product)
					
					
				
				
			})


		})
		
		
		
		
		// compute occurence percentage
		Object.keys(counters).forEach(function(property) {
			stats.push([property, counters[property] / data.length])
		})
		
		
		console.log('counters', stats)
		
		
		return [stats]
		
	}
	
}
