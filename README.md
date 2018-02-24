# d3-data-profiler

Analyze the structure of javascript objects. Useful to explore data structures

## Installing

If you use NPM, `npm install d3-data-profiler`. Otherwise, download the [latest release](https://github.com/Mango-information-systems/d3-data-profiler/releases/latest).

## API Reference


### Data profiling

<a href="#structureStats" name="structureStats">#</a> <b>structureStats</b>(_data_, _maxDepth_)

Given an array of objects _data_, returns statistics about the presence of each property. _maxDepth_ may be used to indicate how deep objects' structure may be explored.

<a href="#typeStats" name="typeStats">#</a> <b>typeStats</b>(_data_, _maxDepth_)

Given an array of objects _data_, returns data type of each property. _maxDepth_ may be used to indicate how deep objects' structure may be explored.

<a href="#detailedStats" name="detailedStats">#</a> <b>detailedStats</b>(_data_, _fields_, _maxDepth_)

Given an array of objects _data_, returns data data profiling of each property. _fields_ may be used to limit the stats to be computed. _maxDepth_ may be used to indicate how deep object structure may be explored. Data profile includes type, completeness, minValue, maxValue, averageValue, minLength, maxLength, % unique

### Utility functions

<a href="#reversePivot" name="reversePivot">#</a> <b>reversePivot</b>(_data_, path_, _keyName_, _valueName_) aka transpose

Sometimes, your source data set has properties under the form `{name: key, value: val}`, and you want `{key: val}` instead. 

Example: 

````javascript

let data = [
	body: {
		// [...]
	}
	, headers: [
		{
			name: 'location'
			, value: 'https://example.com'
		}
		, {
			name: 'content-type'
			, value: 'text/html; charset=UTF-8'
		}
		, {
			name: 'date'
			, value: 'Fri, 1 Jan 2018 10:00:00 GMT'
		}
	]
]


reversePivot(data, 'headers')
// returns
// [
// 	body: {
// 		// [...]
// 	}
// 	, headers: {
//		location: 'https://example.com'
// 	    , 'content-type': 'text/html; charset=UTF-8'
// 	    , date: 'Fri, 1 Jan 2018 10:00:00 GMT'
// 	}
// ]

````


<a href="#toHierarchy" name="toHierarchy">#</a> <b>toHierarchy</b>(statistics_)

Convert a data profiling statistics array into `d3-hierarchy` compatible structure.



Example: 

````javascript

let stats = structureStats(data)

let formatted = toHierarchy(stats) 
// returns 
// {
//   [...]  // to be completed
// }

let root = d3.hierarchy(formatted)

// build your dataviz


````
