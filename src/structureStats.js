import traverse from 'traverse'

export default function(data, maxDepth) {
		
		let counters = {}
			, stats = []
			
		maxDepth = maxDepth || +Infinity
			
		//~ console.log('data', data)
			
		data.forEach(function(record) {
		
			// traverse each property node of the record
			traverse(record).map(function() {
				
				if (this.level !== 0 && this.level <= maxDepth) { // do not compute stats for the root element
					
					let property = this.path.join('.')

					// count occurence
					counters[property] = ++counters[property] || 1
					
					// compute min and max length
					//~ if (['$'].indexOf(property) === -1)
						//~ computeLength(api.name, property, product)
					
				}
			})


		})
		
		
		
		
		// compute occurence percentage
		Object.keys(counters).forEach(function(property) {
			stats.push([property, counters[property] / data.length])
		})
		
		
		//~ console.log('counters', stats)
		
		
		return stats
		
}
