const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns one line if line is shorter than max length', () => {
    expect(wrap("a", 2)).to.equal("a");
  });

  it('Returns with a line break if the line is longer than max length', () => {
    expect(wrap("a a", 1)).to.contain('\n');
    expect(wrap("a a", 1)).to.equal('a\na');
  })

  it('Will not break mid-word', () => {
    expect(wrap("Hello There", 4)).to.equal('Hello\nThere');
  });


});


//if the line is shorter than the maxLen paramter, then return one line
//if the line is longer than the maxLen parameter, then return with a line break
//it keeps words together even if they are too long for maxLen