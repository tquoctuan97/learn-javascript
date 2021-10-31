/* Create a function truncate(text, maxlength)
that checks the length of the text and
if it exceeds maxlength - replace the end of str with
the ellipsis character '…' 
UTF-16 '\u2026'
to make its length equal to maxlength

length
length <= maxlength -> show full
length > maxlength -> truncate
*/

function truncate(text, maxlength) {
  if (!text.trim() || maxlength <= 0) return '';

  if (text.length <= maxlength) return text;

  return `${text.slice(0, maxlength - 1)}\u2026`;
}

console.log(truncate('Easy', 4));
console.log(truncate('Easy Frontend', 4));
