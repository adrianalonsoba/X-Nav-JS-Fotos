var urls=['http://www.trecebits.com/wp-content/uploads/2014/06/Google-Moves-Into.png',
'http://assets.worldwildlife.org/photos/2325/images/hero_small/mountains-hero.jpg?1345838509',
'http://media-cdn.tripadvisor.com/media/photo-s/03/d0/66/5c/playa-bacocho.jpg',
'http://vignette2.wikia.nocookie.net/kailiaukisland/images/8/8a/Jungle1.jpeg/revision/latest?cb=20100608024535',
'http://gambargadget.info/wp-content/uploads/2014/06/galaxy-tumblr-photography.jpg',
'http://asusta2.com.ar/wp-content/uploads/2008/07/03-piramide-de-keops.jpg'
];

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function change(){
	var index=Math.floor((Math.random() * urls.length));
	changer('photo','<img src='+urls[index]+'>');
}