// フォーマット
var koyomi = require('../..').create();
var format = koyomi.format.bind(koyomi);
var eq = require('assert').equal;

function test(input, GGG, GG, G, gg, g) {
  eq(format(input, 'GGG'), GGG);
  eq(format(input, 'GG'), GG);
  eq(format(input, 'G') , G);
  eq(format(input, 'gg'), gg);
  eq(format(input, 'g') , g);
}

// 年号
// GGG GG G gg g
test('1872-01-01', '2532', '西暦' , '' , '西暦' , '');
test('1872-12-31', '2532', '西暦' , '' , '西暦' , '');
test('1873-01-01', '2533', '明治' , 'M', '明治' , 'M');
test('1911-12-31', '2571', '明治' , 'M', '明治' , 'M');
test('1912-01-01', '2572', '大正' , 'T', '明治' , 'M');
test('1912-07-29', '2572', '大正' , 'T', '明治' , 'M');
test('1912-07-30', '2572', '大正' , 'T', '大正' , 'T');
test('1925-12-31', '2585', '大正' , 'T', '大正' , 'T');
test('1926-01-01', '2586', '昭和' , 'S', '大正' , 'T');
test('1926-12-24', '2586', '昭和' , 'S', '大正' , 'T');
test('1926-12-25', '2586', '昭和' , 'S', '昭和' , 'S');
test('1988-12-31', '2648', '昭和' , 'S', '昭和' , 'S');
test('1989-01-01', '2649', '平成' , 'H', '昭和' , 'S');
test('1989-01-07', '2649', '平成' , 'H', '昭和' , 'S');
test('1989-01-08', '2649', '平成' , 'H', '平成' , 'H');
test('1990-01-01', '2650', '平成' , 'H', '平成' , 'H');
test('2015-04-27', '2675', '平成' , 'H', '平成' , 'H');


eq(format('1872-1-1', 'GG>1'), '西');
eq(format('1873-1-1', 'GG>1'), '明');
eq(format('1912-1-1', 'GG>1'), '大');
eq(format('1926-1-1', 'GG>1'), '昭');
eq(format('1989-1-1', 'GG>1'), '平');

