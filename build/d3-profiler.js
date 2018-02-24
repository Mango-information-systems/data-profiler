(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('traverse')) :
  typeof define === 'function' && define.amd ? define(['exports', 'traverse'], factory) :
  (factory((global.d3 = global.d3 || {}),global.traverse));
}(this, function (exports,traverse) { 'use strict';

  traverse = 'default' in traverse ? traverse['default'] : traverse;

  function profiler() {
    return 42;
  };

  function structureStats(data, maxDepth) {
  		
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

  /***************************************
   *
   * @param {object} data array
   * @param {string?} path level at which the reverse pivot is expected to be done
   * @param {string?} keyName - default to 'name'
   * @param {string?} valueName - default to 'value'
   * 
   * 
   **************************************/

  function reversePivot(data, path, keyName, valueName) {
  		
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

  exports.profiler = profiler;
  exports.structureStats = structureStats;
  exports.reversePivot = reversePivot;

  Object.defineProperty(exports, '__esModule', { value: true });

}));