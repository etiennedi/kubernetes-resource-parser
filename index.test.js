const { cpuParser, memoryParser } = require('./index');

describe('a cpu parser', () => {
  // pattern is [description, input, output]
  const tests = [
    ['parses full numbers', '1', 1],
    ['parses floats (< 1)', '1.5', 1.5],
    ['parses floats (> 1)', '0.5', 0.5],
    ['parses strings with milli (m) unit (whole number)', '1000m', 1],
    ['parses strings with milli (m) unit (decimal number)', '1300m', 1.3],
    ['parses strings with milli (m) unit (< 1)', '300m', 0.3],
  ];

  tests.map(t => (it(`${t[0]} (${t[1]} to ${t[2]})`, () => {
    expect(cpuParser(t[1])).toEqual(t[2]);
  })));
});

describe('a memory parser', () => {
  // pattern is [description, input, output]
  const tests = [
    ['parses full numbers', '1', 1],
    ['parses kilo strings', '1k', 1 * (1000 ** 1)],
    ['parses Mega strings', '2M', 2 * (1000 ** 2)],
    ['parses Giga strings', '3G', 3 * (1000 ** 3)],
    ['parses Tera strings', '4T', 4 * (1000 ** 4)],
    ['parses Peta strings', '5P', 5 * (1000 ** 5)],
    ['parses Exa strings', '6E', 6 * (1000 ** 6)],
    ['parses kibi strings', '1Ki', 1 * (1024 ** 1)],
    ['parses Mebi strings', '2Mi', 2 * (1024 ** 2)],
    ['parses Gibi strings', '3Gi', 3 * (1024 ** 3)],
    ['parses Tebi strings', '4Ti', 4 * (1024 ** 4)],
    ['parses Pebi strings', '5Pi', 5 * (1024 ** 5)],
    ['parses Exbi strings', '6Ei', 6 * (1024 ** 6)],
  ];

  tests.map(t => (it(`${t[0]} (${t[1]} to ${t[2]})`, () => {
    expect(memoryParser(t[1])).toEqual(t[2]);
  })));
});
