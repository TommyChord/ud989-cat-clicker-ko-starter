var initialCats =  [
		{
			name : "Monty",
			imgSrc : "img/434164568_fea0ad4013_z.jpg",
			clickCount : 0,
			nicknames: ['Bungle','Jerry','Hippo','Dumbo']
		},{
			name : "Python",
			imgSrc : "img/22252709_010df3379e_z.jpg",
			clickCount : 0,
			nicknames: ['Jungle','Berry','Dippo','Humbo']
		},{
			name : "Jelly",
			imgSrc : "img/1413379559_412a540d29_z.jpg",
			clickCount : 0,
			nicknames: ['Bungle','Jerry','Hippo','Dumbo']
		},{
			name : "Bean",
			imgSrc : "img/4154543904_6e2428c421_z.jpg",
			clickCount : 0,
			nicknames: ['Jungle','Berry','Dippo','Humbo']
		},{
			name : "Meat",
			imgSrc : "img/9648464288_2516b35537_z.jpg",
			clickCount : 0,
			nicknames: ['Bungle','Jerry','Hippo','Dumbo']
		}];

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);	
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount;
		if (clicks < 10){
			title = 'Newborn';
		} else if (clicks < 50){
			title = 'Infant';
		} else if (clicks < 100){
			title = 'Child';
		} else if (clicks < 200){
			title = 'Infant';
		} else if (clicks < 300){
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);
};

var ViewModel = function(){
	var self = this;
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.setCurrentCat = function(cat) {
		self.currentCat(cat);
	};
};

ko.applyBindings(new ViewModel());
