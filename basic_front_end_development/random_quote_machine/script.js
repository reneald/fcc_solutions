var engQuotes = [
["Humans need fantasy to be human. To be the place where the falling angel meets the rising ape.", "Terry Pratchett, Hogfather"],
["Evil is whatever distracts.", "Franz Kafka"],
["Yeah, science!", "Jesse Pinkman"],
["Run. If you can't run, walk. If you can't walk, crawl. But by all means, keep on moving.", "Martin Luther King"],
["What’s the difference between a hippo and a Zippo? One is really heavy, the other is a little lighter.", "Masai Graham"],
["It is easier for man to destroy the light inside himself than to defeat the darkness around him.", "Terry Pratchett"],
["If good things lasted forever, would we appreciate how precious they are?", "Hobbes"],
["Time flies like an arrow, fruit flies like a banana.", "Anonymous"],
["Not all questions are answered, but fortunately some answers are questioned", "Terry Pratchett"],
["If you don't know where you are going, any road will get you there.", "Lewis Carroll"],
["Contrariwise, if it was so, it might be; and if it were so, it would be; but as it isn't, it ain't. That's logic.", "Lewis Carroll"]
]

var dutchQuotes = [
["Wie van zichzelf houdt geeft pas echt iets kostbaars als hij Ik hou van jou tegen een ander zegt.", "Harry Jekkers"],
["Geef mij een lach, geef mij wat zonneschijn.", "Chirojeugd Vlaanderen"],
["De oever waar we niet zijn noemen we de overkant.", "Drs. P"],
["Wat je vandaag moet doen, moet je doen zoals je morgen denkt dat je het had moeten doen.", "Toon Hermans"],
["De geheelonthouders hebben gelijk, maar alleen de drinkers weten waarom.", "Simon Carmiggelt"]
]



$(document).ready(function() {
  var i = Math.floor(Math.random()*(engQuotes.length));
	$("#quote").append(function() {
    return (engQuotes[i][0]);
    
	});
  $("#author").append(function() {
    return (engQuotes[i][1]);
    
	});
  fillTwitter();
 
  $("#quote-english").click(function() {
  	var j = Math.floor(Math.random()*(engQuotes.length));
	$("#quote").empty().append(function() {
		return (engQuotes[j][0]);
    });
    $("#author").empty().append(function() {
		return (engQuotes[j][1]);
	});
    fillTwitter();
  });

  $("#quote-dutch").click(function() {
    var k = Math.floor(Math.random()*(dutchQuotes.length));
		$("#quote").empty().append(function() {
			return (dutchQuotes[k][0]);
		});
    $("#author").empty().append(function() {
			return (dutchQuotes[k][1]);
		});
  });
})

function fillTwitter(){
	var twitLink = "https://twitter.com/intent/tweet?text=";
	$('a.twitter-share-button').attr("href", twitLink + encodeURIComponent($("#quote").text()));
}