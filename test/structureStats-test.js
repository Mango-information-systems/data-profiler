var tape = require("tape")
	, profiler = require("../")

tape("structureStats() returns the dataset's data structure statistics.", function(test) {
	var dataset = [
		{
			col1: true
			, col2: 1
		}
		, {
			col1: 'abc'
			, col3: 2
		}
	]
	
	test.deepEqual(profiler.structureStats(dataset), [
		['col1', 1]
		, ['col2', .5]
		, ['col3', .5]
	])
	
	test.end()
})
