var tracks = $.get("http://185.110.173.150/brol/lesplanner.php?page=tracks.json", function (blaap) {
	console.log(blaap);
	tracks = JSON.parse(blaap);
});


var staff = $.get("http://185.110.173.150/brol/lesplanner.php?page=staff.json", function (blaap) {
	console.log(blaap);
	staff = JSON.parse(blaap);
});

var courses = $.get("http://185.110.173.150/brol/lesplanner.php?page=courses.json", function (blaap) {
	console.log(blaap);
	courses = JSON.parse(blaap);
});

var schedule = $.get("http://185.110.173.150/brol/lesplanner.php?page=schedule.json", function (blaap) {
	console.log(blaap);
	schedule = JSON.parse(blaap);
})
