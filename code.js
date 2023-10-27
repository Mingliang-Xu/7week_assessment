function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));
//TIME:  this function has time complexity of O(n^2) it has two nested loops, it means that as the size of the input array increases, the time taken by the function grows quadratically.it could lead to significant performance issues.

//Space: Regardless of the size of the input array, the amount of additional space used by the function remains constant. Therefore, the space complexity is O(1).

function uniqueChar(word) {
  let charSet = new Set();
  for (let i = 0; i < word.length; i++) {
    if (charSet.has(word[i])) {
      return false;
    } else {
      charSet.add(word[i]);
    }
  }
  return true;
}

console.log(uniqueChar("Monday"));
console.log(uniqueChar("Moonday"));

// TIME: this function has time complexity of O(n) it has one loops, it means that as the input length of word increases, it only iterates through the characters of the word exactly once and performs constant-time operations for each character lookup.

//Space: in this function the charSet grows linearly with the size of the input word. Therefore, the overall space complexity of the function is O(n).

function checkPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const uniqueLetters = new Set();

  const newSentence = [];

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (
      letter !== " " &&
      alphabet.includes(letter) &&
      !uniqueLetters.has(letter)
    ) {
      uniqueLetters.add(letter);
      newSentence.push(letter);
    }
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (!uniqueLetters.has(alphabet[i])) {
      return false;
    }
  }
  return true;
}

console.log(checkPangram("The quick brown fox jumps over the lazy dog."));
console.log(checkPangram("I like cats, but not mice"));

//TIME:  this function still has time complexity of O(n) although it has two loops, but over all time complexity if simply O(n) since 26 letters in alphabet is constant. This means the time taken by the algorithm grows linearly with the size of the input sentence only.

//Space: The overall space complexity of the checkPangram function is O(1) because the space used by alphabet, uniqueLetters, and newSentence are all limited by constant values which is within 26 letters.

function findLongestWord(arr) {
  let longestWordLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length;
    }
  }
  return longestWordLength;
}

console.log(`-> ${findLongestWord(["hi", "hello"])}`);

//TIME:  this function over all time complexity is simply O(n) This means the time taken by the algorithm grows linearly with the size of the input sentence only.

// Space: O(1), The amount of space used by the function does not depend on the size of the input, making it constant space complexity.
