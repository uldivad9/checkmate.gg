/**
 * 'results' should be sorted by display order, with results[0] displayed first.
 * Each result item will be of the form:
 * {
 * id: 'Resource id'
 * name: pls
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

GLOBAL_RESOURCES = [
	{id: 1337420,
	name: "A Primer to Caro-Kann",
	description: "This is an intermediate-level introduction to the Caro-Kann Defense.",
	fullDescription: "This is an intermediate-level introduction to the Caro-Kann Defense,
	which begins with 1e4 c6. Players can use this reference to develop a stronger pawn
	structure following the opening move."
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
	description: "A quick analysis of how to play the opening in a way that puts pressure on the opponent.",
	fullDescription: "Facehunter deck with 30 leper gnomes."
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

]