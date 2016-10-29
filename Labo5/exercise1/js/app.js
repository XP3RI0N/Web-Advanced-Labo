document.addEventListener("DOMContentLoaded", init);

var map;


function init() {
	console.log("Init loaded.");
	initMap();
	setMarkers();
}

function initMap() {
	var kortrijk = { lat: 50.82, lng: 3.27 };

	map = new google.maps.Map(document.getElementById('map'), {
		center: kortrijk,
		zoom  : 14
	});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (pos) {
			var myLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude }

			map.setCenter(myLocation);

			new google.maps.Marker({
				position: myLocation,
				map     : map
			})
		}, function () {
			console.error("Azo wete kik u nie zitten é")
		});

	} else {
		console.error("Geen ondersteuning voor geolocatie");
	}

}

function setMarkers() {
	var xml;
	$.get("http://185.110.173.150/brol/parko.php", function (ding) {
			xml       = $.parseXML(ding);
			var nodes = xml.getElementsByTagName("Sensor");
			for (var i = 0, len = nodes.length; i < len; i++) {
				if (nodes[i].getAttribute("Lat") != "" && nodes[i].getAttribute("Long") != "") {

					var icon;
					if (nodes[i].getAttribute("State") === "Free") {
						icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
					} else if (nodes[i].getAttribute("State") === "Occupied") {
						icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
					} else {
						icon = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
					}

					console.log(icon);

					new google.maps.Marker({
						position: {
							lat : parseFloat(nodes[i].getAttribute("Lat").replace(",", ".")),
							lng : parseFloat(nodes[i].getAttribute("Long").replace(",", ".")),
						},
						icon: icon,
						map     : map
					})
					;
				}
			}
		}
	);

}