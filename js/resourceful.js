/**
 * 'results' should be sorted by display order, with results[0] displayed first.
 * Each result item will be of the form:
 * {
 * id: 'Resource id'
 * name: pls
 * tags: tags
 * description: Short description to be shown under the title
 * fullDescription: Long description of the resource
 * score: Upvote/downvote score
 * vote: User's vote (-1, 0, or 1)
 * rating: Approximate rating of target audience. An array of two integers.
 * url: External url
 * favorite: Boolean, true if this result is favorited by the logged-in user 
 * reviews: An object containing information about reviews.
 *   {
 *   rid: 'Review id'
 *   text: Review text
 *   author: Author's username
 *   date: Date of post (string)
 *   uuid: Author's 'unique username id'
 *   }
 */

var NEXT_RID = 1;

var GLOBAL_RESOURCES = [

	{id: 1337420,
	name: "A Primer to Caro-Kann",
	tags: ["openings","caro-kann","intermediate"],
	description: "This is an intermediate-level introduction to the Caro-Kann Defense.",
	fullDescription: "This is an intermediate-level introduction to the Caro-Kann Defense, "+
	"which begins with 1e4 c6. Players can use this reference to develop a stronger pawn "+
	"structure following the opening move.",
	score: 0,
	vote: 0,
	rating: [1200,1400],
	url: "https://www.google.com/webhp?hl=en#hl=en&q=primer+caro+kann",
	favorite: false,
	reviews:
	[
		{
		rid: 0,
		text: "A top quality introduction to a less common but powerful opening. Great for intermediates.",
		author: "infinitestory",
		date: "1/1/11",
		uuid: 0
		}
	]
	},

	{id: 2337420,
	name: "Caro-Kann: Move by Move",
	tags: ["openings","caro-kann","book","IAP","whale"],
	description: "A book to help chess players master the Caro-Kann opening.",
	fullDescription: "Long-hailed as one of Black's most reliable defensive openings, the Caro-Kann"+
	" defense is an opening style worth exploring move-by-move. In this book, international master Cyrus"+
	" Lakdawala guides players through the finer points of the Caro-Kann openings with meticulously chosen"+
	" problems and solutions.",
	score: 21,
	vote: 0,
	rating: [1500,1800],
	url: "http://www.amazon.com/Caro-Kann-Move-Cyrus-Lakdawala/dp/1857446879",
	favorite: true,
	reviews:
	[
		{
		rid: 0,
		text: "Oh. My. Lakdawala is the best teacher of the Caro-Kann defense, and Caro-Kann: Move by Move proves it.",
		author: "george_takei",
		date: "2/2/15",
		uuid: 0
		}
	]
	},

	{id: 1337421,
	name: "Aggression in the Opening",
	tags: ["opening","offense","aggro"],
	description: "A quick analysis of how to play the opening in a way that puts pressure on the opponent.",
	fullDescription: "It's like playing a Facehunter deck with 30 leper gnomes.",
	score: 10,
	vote: 1,
	rating: [1400,1400],
	url: "https://www.google.com/webhp?hl=en#hl=en&q=aggression+in+the+opening",
	favorite: true,
	reviews:
	[

	]
	},

	{id: 1337422,
	name: "Rook-King Endgames",
	tags: ["endgame","beginner","video"],
	description: "Video discussing Rook-King endgames, and how to quickly analyze and play your own configurations.",
	fullDescription: "A decently thorough video discussing endgames in which only a King and a Rook remain: a configuration"+
	" which every beginner needs to master. The video teaches how such a configuration can be analyzed to achieve a win over a stalemate.",
	score: -10,
	vote: -1,
	rating: [1900,2000],
	url: "https://www.youtube.com/watch?v=jtGVYnv91ps",
	favorite: true,
	reviews:
	[

	]
	},

	{id: 1337423,
	name: "muh openings",
	tags: ["muh","opening","420"],
	description: "DEMS MUH OPENINGS",
	fullDescription: "DEMS MUH OPENINGS",
	score: -86,
	vote: +1,
	rating: [0,2400],
	url: "http://www.artofproblemsolving.com/community/c1466h1085189_muh_openings",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1337424,
	name: "Analogies Between Chess and League of Legends",
	tags: ["chess","lol","opening","midgame","endgame"],
	description: "Despite hailing from distant eras and being played on vastly different platforms, "+
	"chess and League of Legends share a number of similarities.",
	fullDescription: "Despite hailing from distant eras and being played on vastly different platforms, "+
	"chess and League of Legends share a number of similarities. These similarities, once understood, "+
	"can help a player excel at both. This article takes a deeper look at these two popular games, "+
	"and examines the ways in which their openings, midgames, endgames, and transitions are similar.",
	score: 50,
	vote: 0,
	rating: [2000,2000],
	url: "https://www.google.com/webhp?hl=en#hl=en&q=analogies+between+chess+and+league+of+legends",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 2337424,
	name: "A Beginner's Guide to Visual Read in League and Chess",
	tags: ["chess","lol","beginner","positional"],
	description: "A novice-friendly guide to visual read, a critical aspect of two popular competitive games.",
	fullDescription: "A novice-friendly guide from the Summoner School Subreddit (r/summonerschool) about"+
	" visual read, a critical aspect of two popular competitive games: Chess, and League of Legends. Examples from"+
	" top-level plays in both games are presented and fleshed-out in detail.",
	score: 51,
	vote: 0,
	rating: [2000,2000],
	url: "http://www.reddit.com/r/summonerschool/comments/2a53kr/a_beginners_guide_to_visual_read_in_league_and/",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347423,
	name: "Fundamental Chess Strategies for Beginners",
	tags: ["beginner","strategy"],
	description: "A comprehensive list of useful strategies for those getting started",
	fullDescription: "For beginners there are a lot of ways to win at chess. These tactics"+
	" have 3 common denominators: protecting the king, capturing enemy pieces, and capturing the enemy king."+
	" These are the basic goals of the game. Here is a comprehensive list of useful strategies to help beginners reach these goals.",
	score: +60,
	vote: +1,
	rating: [500,1200],
	url: "http://www.chesspursuit.com/",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 1347424,
	name: "List of Chess Resources from Grandmasters",
	tags: ["expert","recommendations"],
	description: "A list of useful resources recommended by the top players in the world",
	fullDescription: "A list of useful resources recommended by the top players in the world",
	score: +6,
	vote: -1,
	rating: [2300,2900],
	url: "https://www.google.com/webhp?hl=en#hl=en&q=grandmasters+chess+resources",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 1347425,
	name: "The Power of Positional Chess, Pt. 1 - Maneuvering",
	tags: ["positional","maneuvering"],
	description: "Tips on playing positional chess",
	fullDescription: "Tips on playing positional chess with a focus on manuvering.  Includes various illustrated example games.",
	score: +100,
	vote: +1,
	rating: [1800,2100],
	url: "http://www.chess.com/article/view/the-power-of-positional-chess-pt-1---maneuvering",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 2347425,
	name: "The Power of Positional Chess, Pt. 2",
	tags: ["positional"],
	description: "Tips on playing positional chess (continued)",
	fullDescription: "Continuation of 'The Power of Positional Chess, Pt. 1 - Maneuvering,' with more example games. ",
	score: -100,
	vote: +15,
	rating: [1800,2100],
	url: "http://www.chess.com/article/view/the-power-of-positional-chess-part-2",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347426,
	name: "The Art of Heroic Defense",
	tags: ["defense","intermediate"],
	description: "Contains a list of defense strategies",
	fullDescription: "George Zeigler covers various defense strategies and analyses their strengths and weaknesses.",
	score: +49,
	vote: +1,
	rating: [1800,2100],
	url: "https://www.sparkchess.com/the-art-of-heroic-defense.html",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347427,
	name: "Lines and Focal Points: The Heart and Soul of a Combination",
	tags: ["lines","offense","midgame","intermediate"],
	description: "A description and illustration of the Alekhine-Chatard attack",
	fullDescription: "george Zeigler presents a description and illustration of the Alekhine-Chatard attack",
	score: +20,
	vote: -1,
	rating: [1800,2100],
	url: "https://www.sparkchess.com/lines-and-focal-points-the-heart-and-soul-of-a-combination.html",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 1347428,
	name: "Scotch Opening: Blumenfeld Variation",
	tags: ["scotch","opening", "blumenfeld"],
	description: "A game illustrating the power of mastering openings",
	fullDescription: "A narration of a games, where skillful openings claimed victories",
	score: +10,
	vote: -1,
	rating: [1500,2300],
	url: "https://www.sparkchess.com/scotch-opening-blumenfeld-variation.html",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 1347429,
	name: "How to Play Chess: Overworked Pieces",
	tags: ["intermediate","opening","midgame","sicilian","tempo"],
	description: "How overreliance on few pieces can lead to sudden loss of tempo.",
	fullDescription: "A post on the blog Kindred Kaleidoscope explaining how overworking a few pieces can"+
	" give the opponent a window of opportunity to regain tempo. Gives a poignant example involving the Sicilian defense.",
	score: +33,
	vote: 0,
	rating: [1900,2100],
	url: "https://kindredspiritks.wordpress.com/2007/11/23/how-to-play-chess-overused-pieces",
	favorite: true,
	reviews:
	[
	
	]
	}
]