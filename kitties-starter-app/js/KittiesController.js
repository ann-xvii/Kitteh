angular
	.module("kittehApp")
	.controller("KittiesController", KittiesControllerFunc);

function KittiesControllerFunc(){
	this.test = "This is a test. Kittehhs!!!";

	this.kittyList = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	];

	this.toggleStatus = toggleStatus;

	function toggleStatus(){
		if (this.adopted == true){
			this.adopted = false;
		} else if (this.adopted == false){
			this.adopted = true;
		}
	}
}


