angular
	.module("kittehApp")
	.controller("KittiesController", KittiesControllerFunc);

function KittiesControllerFunc(){
	this.test = "This is a test. Kittehhs!!!";

	this.deleteKitty = deleteKitty;
	this.addKitty = addKitty;

	var vm = this;
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

	function deleteKitty(meow){
		vm.kittyList.splice(vm.kittyList.indexOf(meow),1);
	}

	function addKitty(){
		vm.kittyList.push({catName: this.nombre, monthsOld: this.edad, gender: this.gender, image: this.picture, adopted: false});
		this.nombre = null;
		this.edad = null;
		this.gender = null;
		// this.image = null;
		console.log(this.image);
	}
}


