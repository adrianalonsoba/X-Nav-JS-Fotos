var urls=['http://www.trecebits.com/wp-content/uploads/2014/06/Google-Moves-Into.png',
'http://assets.worldwildlife.org/photos/2325/images/hero_small/mountains-hero.jpg?1345838509',
];

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function change(){
	var index=Math.floor((Math.random() * 2));
	changer('photo','<img src='+urls[index]+'>');
}