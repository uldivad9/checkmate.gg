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
	url: "google.com",
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

	{id: 1337421,
	name: "Aggression in the Opening",
	tags: ["opening","offense","aggro"],
	description: "A quick analysis of how to play the opening in a way that puts pressure on the opponent.",
	fullDescription: "Facehunter deck with 30 leper gnomes.",
	score: 10,
	vote: 1,
	rating: [1400,1400],
	url: "google.com",
	favorite: true,
	reviews:
	[

	]
	},

	{id: 1337422,
	name: "Rook-King Endgames",
	tags: ["endgame","historical"],
	description: "A thorough discussion of historical Rook-King endgames, and how to quickly analyze and play your own configurations.",
	fullDescription: "Challenjour Vayne guide for chess",
	score: -10,
	vote: -1,
	rating: [1900,2000],
	url: "google.com",
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
	url: "google.com",
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
	url: "google.com",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347423,
	name: "Fundamental Chess Strategies for Beginners",
	tags: ["beginner","improvement","strategies"],
	description: "A comprehensive list of useful strategies for those getting started",
	fullDescription: "A comprehensive list of useful strategies for those getting started",
	score: +60,
	vote: +1,
	rating: [300,800],
	url: "google.com",
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
	url: "google.com",
	favorite: false,
	reviews:
	[
	
	]
	},

	{id: 1347425,
	name: "The Power of Positional Chess, Pt 1 - Manuvering",
	tags: ["positional","manuvering"],
	description: "Tips on playing positional chess",
	fullDescription: "Tips on playing positional chess with a focus on manuvering.  Includes various illustrated example games",
	score: +100,
	vote: +1,
	rating: [1800,2100],
	url: "google.com",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347426,
	name: "The Art of Heroic Defense",
	tags: ["defense","heroic"],
	description: "Contains a list of defense strategies",
	fullDescription: "Covers various defense strategies as well as various types of analyses",
	score: +30,
	vote: +1,
	rating: [1800,2100],
	url: "google.com",
	favorite: true,
	reviews:
	[
	
	]
	},

	{id: 1347427,
	name: "Lines and Focal Points: The Heart and Soul of a Combination",
	tags: ["lines","focal", "combination"],
	description: "A description and illustration of the Alekhine-Chatard attack",
	fullDescription: "A description and illustration of the Alekhine-Chatard attack",
	score: +20,
	vote: -1,
	rating: [1900,2200],
	url: "google.com",
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
	url: "google.com",
	favorite: false,
	reviews:
	[
	
	]
	},

]