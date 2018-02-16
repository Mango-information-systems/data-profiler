var tape = require("tape"),
    profiler = require("../");

tape("profiler() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(profiler.profiler(), 42);
  test.end();
});
