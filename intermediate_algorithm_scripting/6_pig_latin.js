function translate(str) {
	var suffix = "";
	// Find the index of the first vowel in the word & store it in a variable
	var firstVowel = str.search(/[aeiou]/gi);
	// Case: word starts with a vowel - pig Latin will end in 'way'
	if (firstVowel == 0) {
		suffix = "way";
	} else {
	// Case: word starts with one or more consonants
	// Pig Latin will end in 'consonant(s) + ay'
		suffix = str.substring(0, firstVowel) + "ay";
	}
	// Take everything after (and including) the first vowel
	// Add suffix
	// Do not shake or stir
	return (str.substr(firstVowel) + suffix);
}

translate("consonant");