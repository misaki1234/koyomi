// 営業日数
var koyomi = require('../..').create();
var count = koyomi.biz.bind(koyomi);
var test = require('assert').equal;

test(count('2015-1-1', '2015-1-1'), 0);
test(count('2015-1-1', '2015-1-31'), 19);
test(count('2015-5-1', '2015-5-31'), 18);
test(count('2015-1-1', '2015-12-31'), 242);





