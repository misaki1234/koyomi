// 期間
var koyomi = require('../..').create();
var get = koyomi.getRange.bind(koyomi);
var eq = require('assert').deepEqual;

var D = require('../../date-extra.js');

koyomi.startMonth = 4;
koyomi.startWeek = '月';


eq(get(2000)         , {from: D(2000, 4, 1), to : D(2001, 3, 31, 23, 59, 59, 999)});
eq(get('2000年')     , {from: D(2000, 4, 1), to : D(2001, 3, 31, 23, 59, 59, 999)});
eq(get('2000年', 'y'), {from: D(2000, 4, 1), to : D(2001, 3, 31, 23, 59, 59, 999)});

eq(get(200010)           , {from: D(2000, 10, 1), to : D(2000, 10, 31, 23, 59, 59, 999)});
eq(get('2000-10')        , {from: D(2000, 10, 1), to : D(2000, 10, 31, 23, 59, 59, 999)});
eq(get('2000-10', 'm')   , {from: D(2000, 10, 1), to : D(2000, 10, 31, 23, 59, 59, 999)});
eq(get('2000年10月')     , {from: D(2000, 10, 1), to : D(2000, 10, 31, 23, 59, 59, 999)});
eq(get('2000年10月', 'm'), {from: D(2000, 10, 1), to : D(2000, 10, 31, 23, 59, 59, 999)});

eq(get('2015-10-1', 'w'), {from: D(2015, 9, 28), to : D(2015, 10, 4, 23, 59, 59, 999)});
eq(get('2015-10-1', 'd'), {from: D(2015, 10, 1), to : D(2015, 10, 1, 23, 59, 59, 999)});

eq(get('2015-10-1 12:34:56.789', 'h') , {from: D(2015, 10, 1, 12,  0,  0,   0), to : D(2015, 10, 1, 12, 59, 59, 999)});
eq(get('2015-10-1 12:34:56.789', 'i') , {from: D(2015, 10, 1, 12, 34,  0,   0), to : D(2015, 10, 1, 12, 34, 59, 999)});
eq(get('2015-10-1 12:34:56.789', 's') , {from: D(2015, 10, 1, 12, 34, 56,   0), to : D(2015, 10, 1, 12, 34, 56, 999)});
eq(get('2015-10-1 12:34:56.789', 'ms'), {from: D(2015, 10, 1, 12, 34, 56, 789), to : D(2015, 10, 1, 12, 34, 56, 789)});

