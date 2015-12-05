// 差
var koyomi = require('../..').create();
var diff = koyomi.diff.bind(koyomi);
var eq = require('assert').equal;

// 日
eq(diff('2015-1-1', '2015-1-1'), 0);
eq(diff('2015-1-1', '2015-1-2'), 1);
eq(diff('2015-1-2', '2015-1-1'), -1);
eq(diff('2015-1-1', '2016-1-1'), 365);


// 分
eq(diff('2015-01-01 00:00:00.000', '2015-01-01 00:10:00.000', '分'), 10);
eq(diff('2015-01-01 00:00:00.000', '2015-01-01 00:00:10.000', '分'), 0);
eq(diff('2015-01-01 00:00:00.000', '2015-01-01 00:00:00.000', '分'), 0);
eq(diff('2015-01-01 00:00:00.999', '2015-01-01 00:00:00.000', '分'), 0);
eq(diff('2015-01-01 00:00:59.000', '2015-01-01 00:00:00.000', '分'), 0);

eq(diff('2015-1-1','2015-1-1', '分'), 0);
eq(diff('2015-1-1','2015-1-2', '分'), 60 * 24);
eq(diff('0:00','1:00', '分'), 60);
eq(diff('6時','7時', '分'), 60);
eq(diff('6時30分','7時30分', '分'), 60);
eq(diff('6時30分5秒','7時30分10秒', '分'), 60);


// 秒
eq(diff('2015-01-01 00:00:00.000', '2015-01-01 00:00:10.000', '秒'), 10);
eq(diff('2015-01-01 00:00:00.000', '2015-01-01 00:00:00.000', '秒'), 0);
eq(diff('2015-01-01 00:00:00.999', '2015-01-01 00:00:00.000', '秒'), 0);

eq(diff('2015-1-1','2015-1-1', '秒'), 0);
eq(diff('2015-1-1','2015-1-2', '秒'), 86400);
eq(diff('0:00','1:00', '秒'), 3600);
eq(diff('6時','7時', '秒'), 3600);
eq(diff('6時30分','7時30分', '秒'), 3600);
eq(diff('6時30分5秒','7時30分10秒', '秒'), 3605);

