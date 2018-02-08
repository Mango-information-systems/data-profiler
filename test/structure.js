const structure = require('../lib/structure')

let structureStats

describe('Data structure', function(){
	
	before(function() {
		structureStats = structure.stats([
			{
				col1: true
				, col2: 1
			}
			, {
				col1: 'abc'
				, col3: 2
			}
			
		])
	})
	
	describe('some test', function(){
		it('should compute object structure', function (done) {
			
			structureStats[0].should.deepEqual([
				['col1', 1]
				, ['col2', .5]
				, ['col3', .5]
			])
			
			done()
		})
	})

})
