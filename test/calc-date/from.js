// 開始
var koyomi = require('../..').create();
var from = koyomi.from.bind(koyomi);
var eq = require('assert').deepEqual;

koyomi.startMonth = 1;
koyomi.startWeek = '月';

eq(from('2015-01-01 00:00:00.000', '年'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-12-31 23:59:59.999', '年'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '月'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-31 23:59:59.999', '月'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-05 00:00:00.000', '週'), new Date(2015,  0,  5,  0,  0,  0, 0));
eq(from('2015-01-11 23:59:59.999', '週'), new Date(2015,  0,  5,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '日'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 23:59:59.999', '日'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '時'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:59:59.999', '時'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '分'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:59.999', '分'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '秒'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.999', '秒'), new Date(2015,  0,  1,  0,  0,  0, 0));

eq(from('2015-02-05 12:34:56.789', '年'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '月'), new Date(2015,  1,  1,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '週'), new Date(2015,  1,  2,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '日'), new Date(2015,  1,  5,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '時'), new Date(2015,  1,  5, 12,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '分'), new Date(2015,  1,  5, 12, 34,  0, 0));
eq(from('2015-02-05 12:34:56.789', '秒'), new Date(2015,  1,  5, 12, 34, 56, 0));

koyomi.startMonth = 4;
koyomi.startWeek = '日';

eq(from('2015-01-01 00:00:00.000', '年'), new Date(2014,  3,  1,  0,  0,  0, 0));
eq(from('2015-12-31 23:59:59.999', '年'), new Date(2015,  3,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '月'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-31 23:59:59.999', '月'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-05 00:00:00.000', '週'), new Date(2015,  0,  4,  0,  0,  0, 0));
eq(from('2015-01-11 23:59:59.999', '週'), new Date(2015,  0, 11,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '日'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 23:59:59.999', '日'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '時'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:59:59.999', '時'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '分'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:59.999', '分'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.000', '秒'), new Date(2015,  0,  1,  0,  0,  0, 0));
eq(from('2015-01-01 00:00:00.999', '秒'), new Date(2015,  0,  1,  0,  0,  0, 0));

eq(from('2015-02-05 12:34:56.789', '年'), new Date(2014,  3,  1,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '月'), new Date(2015,  1,  1,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '週'), new Date(2015,  1,  1,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '日'), new Date(2015,  1,  5,  0,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '時'), new Date(2015,  1,  5, 12,  0,  0, 0));
eq(from('2015-02-05 12:34:56.789', '分'), new Date(2015,  1,  5, 12, 34,  0, 0));
eq(from('2015-02-05 12:34:56.789', '秒'), new Date(2015,  1,  5, 12, 34, 56, 0));

eq(from('2015-01-04 00:00:00.000', '週'), new Date(2015,  0,  4,  0,  0,  0, 0));
eq(from('2015-01-10 23:59:59.999', '週'), new Date(2015,  0,  4,  0,  0,  0, 0));




