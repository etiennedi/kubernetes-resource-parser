function cpuParser(input) {
  const milliMatch = input.match(/^([0-9]+)m$/);
  if (milliMatch) {
    return milliMatch[1] / 1000;
  }

  return parseFloat(input);
}

const memoryMultipliers = {
  k: 1000,
  M: 1000 ** 2,
  G: 1000 ** 3,
  T: 1000 ** 4,
  P: 1000 ** 5,
  E: 1000 ** 6,
};

function memoryParser(input) {
  const unitMatch = input.match(/^([0-9]+)([A-Za-z]{1,2})$/);
  if (unitMatch) {
    return parseInt(unitMatch[1], 10) * memoryMultipliers[unitMatch[2]];
  }

  return parseInt(input, 10);
}

module.exports = {
  cpuParser,
  memoryParser,
};
