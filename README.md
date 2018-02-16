# d3-data-profiler

Analyze JSON data structures

## Installing

If you use NPM, `npm install d3-data-profiler`. Otherwise, download the [latest release](https://github.com/Mango-information-systems/d3-data-profiler/releases/latest).

## API Reference


### Objects structure

<a href="#structureStats" name="structureStats">#</a> <b>structureStats</b>(_data_, _nestingLevel_)

Given an array of objects _data_, returns statistics about the presence of each property. _nestingLevel_ may be used to indicate how deep objects' structure may be explored.

### Property type

<a href="#typeStats" name="typeStats">#</a> <b>typeStats</b>(_data_, _nestingLevel_)

Given an array of objects _data_, returns data type of each property. _nestingLevel_ may be used to indicate how deep objects' structure may be explored.

### Property values statistics

<a href="#detailedStats" name="detailedStats">#</a> <b>detailedStats</b>(_data_, _fields_, _nestingLevel_)

Given an array of objects _data_, returns data data profiling of each property. _fields_ may be used to limit the stats to be computed. _nestingLevel_ may be used to indicate how deep object structure may be explored. Data profile includes type, completeness, minValue, maxValue, averageValue, minLength, maxLength, % unique

### Reverse pivot (transpose) utility function

<a href="#reversePivot" name="reversePivot">#</a> <b>reversePivot</b>(_data_, _keyName_, _valueName_)

Sometimes, your source data set has properties under the form `{name: key, value: val}`, and you want `{key: val}` instead. 
