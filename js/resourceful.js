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
 *   uuid: Author's 'unique username id'
 *   }
 */

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
	}

]