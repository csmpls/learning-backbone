'use strict'

function getRandomEmbedResponse() {
	var responses = [

	{
	 "provider_url": "http://tumblr.com", 
	 "url": "http://33.media.tumblr.com/bd78cc98178edcc60f30dca7595eda69/tumblr_nhj9w8I8hs1u5d40bo1_1280.gif", 
	 "height": 540, 
	 "width": 540, 
	 "version": "1.0", 
	 "provider_name": "Tumblr", 
	 "type": "photo"
	},



	 {
	     "provider_url": "http://www.youtube.com/", 
	     "description": "From: 'Mothercave', on Giegling (Giegling LP 03) Released: December 2013, Germany Release Details: http://www.discogs.com/Traumprinz-Mothercave/release/5129411 Track: B1 Label: http://giegling.net/", 
	     "title": "Traumprinz - Believe", 
	     "url": "http://www.youtube.com/watch?v=TQKV_CG_4Ns", 
	     "type": "video", 
	     "author_name": "hvijayan", 
	     "height": 281, 
	     "width": 500, 
	     "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FTQKV_CG_4Ns%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTQKV_CG_4Ns&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FTQKV_CG_4Ns%2Fhqdefault.jpg&key=internal&type=text%2Fhtml&schema=youtube\" width=\"500\" height=\"281\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>", 
	     "thumbnail_width": 480, 
	    "version": "1.0", 
	     "provider_name": "YouTube", 
	     "thumbnail_url": "http://i.ytimg.com/vi/TQKV_CG_4Ns/hqdefault.jpg", 
	     "thumbnail_height": 360, 
	     "author_url": "http://www.youtube.com/user/hvijayan"
	 },



	 {
	     "provider_url": "http://soundcloud.com", 
	     "description": "ITUNES: http://smarturl.it/EmergeFromSmoke ~ NEW SINGLE VIA TRUEPANTHER X WEDIDIT ~ PRE-ORDER 7\" VINYL W/ EXCLUSIVE B-SIDE http://smarturl.it/EmergeFromSmoke_7", 
	     "title": "EMERGE FROM SMOKE by shlohmo", 
	     "type": "rich", 
	     "thumbnail_width": 500, 
	     "height": 500, 
	     "width": 500, 
	     "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fw.soundcloud.com%2Fplayer%2F%3Fvisual%3Dtrue%26url%3Dhttp%253A%252F%252Fapi.soundcloud.com%252Ftracks%252F180583843%26show_artwork%3Dtrue&url=https%3A%2F%2Fsoundcloud.com%2Fshlohmo%2Femerge-from-smoke&image=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000099618772-64aq86-t500x500.jpg&key=internal&type=text%2Fhtml&schema=soundcloud\" width=\"500\" height=\"500\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>", 
	     "author_name": "shlohmo", 
	     "version": "1.0", 
	     "provider_name": "SoundCloud", 
	     "thumbnail_url": "http://i1.sndcdn.com/artworks-000099618772-64aq86-t500x500.jpg", 
	     "thumbnail_height": 500, 
	     "author_url": "http://soundcloud.com/shlohmo"
	},




	{
	     "provider_url": "https://dontcreepon.me", 
	     "title": "Don't Creep On Me! - Join the room Nice", 
	     "url": "https://dontcreepon.me/nice", 
	     "version": "1.0", 
	     "provider_name": "dontcreeponme", 
	     "type": "link"
	},
	{
	    "provider_url": "http://sockpuppet.org", 
	    "description": "All secure crypto on the Internet assumes that the DNS lookup from names to IP addresses are insecure. Securing those DNS lookups therefore enables no meaningful security. DNSSEC does make some attacks against insecure sites harder. But it doesn't make those attacks infeasible, so sites still need to adopt secure transports like TLS.", 
	    "title": "Against DNSSEC", 
	    "url": "http://sockpuppet.org/blog/2015/01/15/against-dnssec/", 
	    "version": "1.0", 
	    "provider_name": "Sockpuppet", 
	    "type": "link"
	},

	{
	    "provider_url": "http://www.bbc.com", 
	    "description": "Google is ending its experimental Google Glass programme, the BBC has learned. The company insists it is still committed to launching the smart glasses as a consumer product, but will stop producing Glass in its present form. Instead it will focus on \"future versions of Glass\".", 
	    "title": "Google calls end to Glass experiment", 
	    "url": "http://www.bbc.com/news/technology-30831128", 
	    "thumbnail_width": 464, 
	    "thumbnail_url": "http://news.bbcimg.co.uk/media/images/80296000/png/_80296759_googleglass6.png", 
	    "version": "1.0", 
	    "provider_name": "Bbc", 
	    "type": "link", 
	    "thumbnail_height": 261
	},

	{
	    "provider_url": "http://motherboard.vice.com", 
	    "description": "\u200b Mark Karpeles. Photo: Mark Karpeles/Twitter The defense team for Ross \u200bUlbricht, the 30-year-old man accused of running the online black market Silk Road under the pseudonym Dread Pirate Roberts, just dropped an unexpected new theory: Mark Karpeles, the CEO of failed Bitcoin company Mt. Gox, is the real Dread Pirate Roberts.", 
	    "title": "Defense in Silk Road Trial Says Mt. Gox CEO Was the Real Dread Pirate Roberts", 
	    "url": "http://motherboard.vice.com/read/defense-in-silk-road-trial-says-mt-gox-ceo-was-the-real-dread-pirate-roberts", 
	    "thumbnail_width": 500, 
	    "thumbnail_url": "http://motherboard-images.vice.com/content-images/article/no-id/1421353218257395.jpeg?crop=1xw:1xh;*,*&resize=500:*&output-format=jpeg&output-quality=90", 
	    "author_name": "Kari Paul", 
	    "version": "1.0", 
	    "provider_name": "Vice", 
	    "type": "link", 
	    "thumbnail_height": 500, 
	    "author_url": "http://motherboard.vice.com/author/KariPaul"
	},


	{   
	    "type": "404"
	}
] 
	return responses[Math.floor(Math.random() * responses.length)]
}