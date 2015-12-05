var sp = require('../../lib/utils/separate');
var eq = require('assert').deepEqual;
var D  = require('../../date-extra.js');

var r;

// 2015/1/1 .. 2015/12/31
r = sp(D(2015, 1, 1), D(2015, 12, 31), 1);
eq(r, {
  years: [D(2015, 1, 1)],
  months: [],
  days: []
});

// 2015/1/1 .. 2015/1/31
r = sp(D(2015, 1, 1), D(2015, 1, 31), 1);
eq(r, {
  years: [],
  months: [D(2015, 1, 1)],
  days: []
});

// 2015/1/1 .. 2015/2/28
r = sp(D(2015, 1, 1), D(2015, 2, 28), 1);
eq(r, {
  years: [],
  months: [
    D(2015, 1, 1),
    D(2015, 2, 1)
  ],
  days: []
});

// 2015/1/1 .. 2015/1/3
r = sp(D(2015, 1, 1), D(2015, 1, 3), 1);
eq(r, {
  years: [],
  months: [],
  days: [
    D(2015, 1, 1),
    D(2015, 1, 2),
    D(2015, 1, 3)
  ]
});

// 2015/1/29 .. 2015/1/31
r = sp(D(2015, 1, 29), D(2015, 1, 31), 1);
eq(r, {
  years: [],
  months: [],
  days: [
    D(2015, 1, 29),
    D(2015, 1, 30),
    D(2015, 1, 31)
  ]
});

// 2015/1/15 .. 2015/1/17
r = sp(D(2015, 1, 15), D(2015, 1, 17), 1);
eq(r, {
  years: [],
  months: [],
  days: [
    D(2015, 1, 15),
    D(2015, 1, 16),
    D(2015, 1, 17)
  ]
});

// 2015/1/29 .. 2015/2/3
r = sp(D(2015, 1, 29), D(2015, 2, 3), 1);
eq(r, {
  years: [],
  months: [],
  days: [
    D(2015, 1, 29),
    D(2015, 1, 30),
    D(2015, 1, 31),
    D(2015, 2, 1),
    D(2015, 2, 2),
    D(2015, 2, 3)
  ]
});


// 2015/1/1 .. 2015/2/1
r = sp(D(2015, 1, 1), D(2015, 2, 1), 1);
eq(r, {
  years: [],
  months: [D(2015, 1, 1)],
  days: [D(2015, 2, 1)]
});

// 2015/11/29 .. 2017/2/3
r = sp(D(2015, 11, 29), D(2017, 2, 3), 1);
eq(r, {
  years: [
    D(2016, 1, 1)
  ],
  months: [
    D(2015, 12, 1),
    D(2017, 1, 1)
  ],
  days: [
    D(2015, 11, 29),
    D(2015, 11, 30),
    D(2017, 2, 1),
    D(2017, 2, 2),
    D(2017, 2, 3)
  ]
});

// 2015/1/1 .. 2015/12/31   4
r = sp(D(2015, 1, 1), D(2015, 12, 31), 4);
eq(r, {
  years: [],
  months: [
    D(2015, 1, 1),
    D(2015, 2, 1),
    D(2015, 3, 1),
    D(2015, 4, 1),
    D(2015, 5, 1),
    D(2015, 6, 1),
    D(2015, 7, 1),
    D(2015, 8, 1),
    D(2015, 9, 1),
    D(2015, 10, 1),
    D(2015, 11, 1),
    D(2015, 12, 1)
  ],
  days: []
});

// 2015/4/1 .. 2016/3/31   4
r = sp(D(2015, 4, 1), D(2016, 3, 31), 4);
eq(r, {
  years: [D(2015, 4, 1)],
  months: [],
  days: []
});

// 2015/1/29 .. 2017/7/2
r = sp(D(2015, 1, 29), D(2017, 7, 2), 4);
eq(r, {
  years: [
    D(2015, 4, 1),
    D(2016, 4, 1)
  ],
  months: [
    D(2015, 2, 1),
    D(2015, 3, 1),
    D(2017, 4, 1),
    D(2017, 5, 1),
    D(2017, 6, 1)
  ],
  days: [
    D(2015, 1, 29),
    D(2015, 1, 30),
    D(2015, 1, 31),
    D(2017, 7, 1),
    D(2017, 7, 2)
  ]
});

// 2015/1/2 .. 2015/12/31
r = sp(D(2015, 1, 2), D(2015, 12, 31), 1);
eq(r, {
  years: [],
  months: [
    D(2015,  2, 1),
    D(2015,  3, 1),
    D(2015,  4, 1),
    D(2015,  5, 1),
    D(2015,  6, 1),
    D(2015,  7, 1),
    D(2015,  8, 1),
    D(2015,  9, 1),
    D(2015, 10, 1),
    D(2015, 11, 1),
    D(2015, 12, 1)
  ],
  days: [
    D(2015, 1, 2),
    D(2015, 1, 3),
    D(2015, 1, 4),
    D(2015, 1, 5),
    D(2015, 1, 6),
    D(2015, 1, 7),
    D(2015, 1, 8),
    D(2015, 1, 9),
    D(2015, 1, 10),
    D(2015, 1, 11),
    D(2015, 1, 12),
    D(2015, 1, 13),
    D(2015, 1, 14),
    D(2015, 1, 15),
    D(2015, 1, 16),
    D(2015, 1, 17),
    D(2015, 1, 18),
    D(2015, 1, 19),
    D(2015, 1, 20),
    D(2015, 1, 21),
    D(2015, 1, 22),
    D(2015, 1, 23),
    D(2015, 1, 24),
    D(2015, 1, 25),
    D(2015, 1, 26),
    D(2015, 1, 27),
    D(2015, 1, 28),
    D(2015, 1, 29),
    D(2015, 1, 30),
    D(2015, 1, 31)
  ]
});

// 2015/1/1 .. 2015/12/30
r = sp(D(2015, 1, 1), D(2015, 12, 30), 1);
eq(r, {
  years: [],
  months: [
    D(2015,  1, 1),
    D(2015,  2, 1),
    D(2015,  3, 1),
    D(2015,  4, 1),
    D(2015,  5, 1),
    D(2015,  6, 1),
    D(2015,  7, 1),
    D(2015,  8, 1),
    D(2015,  9, 1),
    D(2015, 10, 1),
    D(2015, 11, 1)
  ],
  days: [
    D(2015, 12, 1),
    D(2015, 12, 2),
    D(2015, 12, 3),
    D(2015, 12, 4),
    D(2015, 12, 5),
    D(2015, 12, 6),
    D(2015, 12, 7),
    D(2015, 12, 8),
    D(2015, 12, 9),
    D(2015, 12, 10),
    D(2015, 12, 11),
    D(2015, 12, 12),
    D(2015, 12, 13),
    D(2015, 12, 14),
    D(2015, 12, 15),
    D(2015, 12, 16),
    D(2015, 12, 17),
    D(2015, 12, 18),
    D(2015, 12, 19),
    D(2015, 12, 20),
    D(2015, 12, 21),
    D(2015, 12, 22),
    D(2015, 12, 23),
    D(2015, 12, 24),
    D(2015, 12, 25),
    D(2015, 12, 26),
    D(2015, 12, 27),
    D(2015, 12, 28),
    D(2015, 12, 29),
    D(2015, 12, 30)
  ]
});

