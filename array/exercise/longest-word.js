// Write a function to find a longest word
// for ... i
// forEach
// reduce
// ['a','ab', 'abc'] --> 'abc'
// str.length

// for ... i
function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];

    if (currentWord.length > longestWord.length) longestWord = currentWord;
  }

  return longestWord;
}

console.log(findLongestWordI(['a', 'b', 'abcddd', 'abcde']));

// forEach
function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) longestWord = currentWord;
  });

  return longestWord;
}

console.log(findLongestWordEach(['a', 'b', 'abcddd', 'abcde']));

// reduce
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  });
}

console.log(findLongestWordReduce(['a', 'b', 'abcddd', 'abcde']));
