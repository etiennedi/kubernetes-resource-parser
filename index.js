function cpuParser(input) {
  const milliMatch = input.match(/^([0-9]+)m$/);
  if (milliMatch) {
    return milliMatch[1] / 1000;
  }

  return parseFloat(input);
}

module.exports = {
  cpuParser,
};
