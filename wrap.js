const wrap = (line, maxLen) => {
  if (line.length > maxLen) {
    const newLine = line.split(' ').join('\n');
    return newLine
  }
  return line;
};


module.exports = wrap;

