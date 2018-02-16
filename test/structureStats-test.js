var tape = require("tape")
	, profiler = require("../")

tape("structureStats() returns the dataset's data structure statistics.", function(test) {
	var dataset = [
		{
			col1: true
			, col2: 1
			, col3: 'whatever'
		}
		, {
			col1: 'abc'
			, col3: {
				nested: true
			}
			, col4: 2
		}
	]
	
	test.deepEqual(profiler.structureStats(dataset), [
		['col1', 1]
		, ['col2', .5]
		, ['col3', 1]
		, ['col3.nested', .5]
		, ['col4', .5]
	])
	
	test.end()
})
