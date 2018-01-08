const { cpuParser } = require('./index');

describe('a cpu parser', () => {
  // pattern is [description, input, output]
  const tests = [
    ['parses full numbers', '1', 1],
    ['parses floats', '1.5', 1.5],
    ['parses strings with milli (m) unit (whole number)', '1000m', 1],
    ['parses strings with milli (m) unit (decimal number)', '1300m', 1.3],
    ['parses strings with milli (m) unit (< 1)', '300m', 0.3],
  ];

  tests.map(t => (it(`${t[0]} (${t[1]} to ${t[2]})`, () => {
    expect(cpuParser(t[1])).toEqual(t[2]);
  })));
});
