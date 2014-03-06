module.exports = function(words, separator) {
  separator = separator || ' ';
  return words.split(separator);
}
