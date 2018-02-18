var tape = require("tape")
	, profiler = require("../")

tape("reversePivot() should work with implicit key / value labels", function(test) {
	var dataset =[[
		{
			name: 'one'
			, value: 1
		}
		, {
			name: 'two'
			, value: 'whatever'
		}
	]]
	
	test.deepEqual(profiler.reversePivot(dataset), [
		{
			'one': 1
			, 'two': 'whatever'
				
		}
	])
	
	test.end()
})

tape("reversePivot() should work on sub-properties via path option", function(test) {
	var dataset =[{body: 'whatever'
		, headers: [
			{
				name: 'one'
				, value: 1
			}
			, {
				name: 'two'
				, value: 'whatever'
			}
		]
	}]
	
	test.deepEqual(profiler.reversePivot(dataset, 'headers'), [
		{
			'one': 1
			, 'two': 'whatever'
				
		}
	])
	test.end()
})

tape("reversePivot() should support optional keyName and valueName parameters", function(test) {
	// todo
	test.end()
})

tape("reversePivot() should ignore extra properties", function(test) {
	// todo
	test.end()
})
