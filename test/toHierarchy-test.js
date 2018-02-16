var tape = require("tape")
	, profiler = require("../")

tape("toHierarchy() formats flat structure.", function(test) {
	var dataset = [
		['col1', 1]
		, ['col2', .5]
		, ['col3', 1]
		, ['col4', .5]
	]
	
	test.deepEqual(profiler.toHierarchy(dataset), {
		name: 'root'
		, children: [
			{
				name: 'col1'
				, value: 1
			}
			, {
				name: 'col2'
				, value: .5
			}
			, {
				name: 'col3'
				, value: 1
			}
			, {
				name: 'col4'
				, value: .5
			}
		]
		
	})
	
	test.end()
})
tape("toHierarchy() formats nested structure", function(test) {
	var dataset = [
		['col1', 1]
		, ['col2', .5]
		, ['col3', 1]
		, ['col3.nested', .5]
		, ['col4', .5]
	]
	
	test.deepEqual(profiler.toHierarchy(dataset), {
		name: 'root'
		, children: [
			{
				name: 'col1'
				, value: 1
			}
			, {
				name: 'col2'
				, value: .5
			}
			, {
				name: 'col3'
				, value: 1
				, children: [
					{
						name: 'nested'
						, value: .5
					}
				]
			}
			, {
				name: 'col4'
				, value: .5
			}
		]
		
	})
	
	test.end()
})
