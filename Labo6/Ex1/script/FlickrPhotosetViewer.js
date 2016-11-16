addEventListener("DOMContentLoaded", function () {
	init();
});


var page      = 1,
	flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=881cbcfeb398828ea12b253c1743224e&tags=Robin&per_page=99&page=" + page + "&format=json&nojsoncallback=1",
	div       = undefined;


function init() {
	div = document.getElementById("FlickrPhotosetViewer");

	document.getElementById("back").addEventListener("click", function () {
		changePage(-1)
	});

	document.getElementById("next").addEventListener("click", function () {
		changePage(1);
	});


	getPhotos();
};

function changePage(index) {

	div.innerHTML = '';
	page += index;
	flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=881cbcfeb398828ea12b253c1743224e&tags=Robin&per_page=99&page=" + page + "&format=json&nojsoncallback=1",
	getPhotos();

	document.getElementById("back").disabled = (page <= 1)? true : false;

};

function getPhotos() {
	// get data
	$.ajax({
		url     : flickrUrl,
		dataType: "json",
		success : function (response) {
			// console.info(response)
			showPhotos(response.photos.photo);
		},
		error   : function (err) {
			console.warn(err)
		}
	});
};

function showPhotos(data) {

	var photoDiv       = document.createElement("div");
	photoDiv.className = "photos";

	$.each(data, function (key, value) {
		var a       = document.createElement("a");
		a.className = "photo";
		// set attributes lightbox

		a.href = parseUrl(value);
		a.setAttribute("data-lightbox", "blaap");
		a.setAttribute("data-title", value.title);

		lightbox.option({
			'resizeDuration': 200,
			'wrapAround'    : true
		});

		var img = document.createElement("img");
		img.src = parseUrl(value);

		a.appendChild(img);

		photoDiv.appendChild(a);
	});

	document.querySelector("#FlickrPhotosetViewer").appendChild(photoDiv);
};

function parseUrl(photo) {
	return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
}


