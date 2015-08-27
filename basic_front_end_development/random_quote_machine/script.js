var engQuotes = [
["Humans need fantasy to be human. To be the place where the falling angel meets the rising ape.", "Terry Pratchett, Hogfather"],
["Yeah, science!", "Jesse Pinkman"],
["Run. If you can't run, walk. If you can't walk, crawl. But by all means, keep on moving.", "Martin Luther King"],
["Test", "Reneald"],
["What’s the difference between a hippo and a Zippo? One is really heavy, the other is a little lighter.", "Masai Graham"],
["It is easier for man to destroy the light inside himself, than to defeat the darkness around him.", "Terry Pratchett"],
["If good things lasted forever, would be appreciate how precious they are?", "Hobbes"],
["Time flies like an arrow, fruit flies like a banana.", "unknown"],
["Not all questions are answered, but fortunately some answers are questioned", "Terry Pratchett"],
["If you don't know where you are going, any road will get you there.", "Lewis Carroll"],
["Contrariwise, if it was so, it might be; and if it were so, it would be; but as it isn't, it ain't. That's logic.", "Lewis Carroll"],
[]
]

var dutchQuotes = [
["Wie van zichzelf houdt geeft pas echt iets kostbaars als hij Ik hou van jou tegen een ander zegt", "Harry Jekkers"],
["Geef mij een lach, geef mij wat zonneschijn", "Chirojeugd Vlaanderen"],
[]
]

$(document).ready(function() {
	$("#quote").append(function() {
		var i = Math.floor(Math.random()*engQuotes.length-1);
		return (engQuotes[i][0] + ", " + engQuotes[i][1]);
	});
	$("#quote-english").click(function() {
		$("#quote").empty().append(function() {
			var j = Math.floor(Math.random()*(engQuotes.length-1));
			return (engQuotes[j][0] + " " + engQuotes[j][1]);
		});
	});

	$("#quote-dutch").click(function() {
		$("#quote").empty().append(function() {
			var k = Math.floor(Math.random()*(dutchQuotes.length-1));
			return (dutchQuotes[k][0] + " " + dutchQuotes[k][1]);
		});
	})
});

