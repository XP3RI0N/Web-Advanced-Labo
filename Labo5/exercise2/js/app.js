document.addEventListener("DOMContentLoaded", init);

function init() {
	setSems();
	setTh();
	setCourses();
	checkCourses();
};

function setSems() {
	var filterSection = document.getElementById("semesterFilter");
	for (var i = 0, len = tracks.length; i < len; i++) {
		var chk = document.createElement("input");
		chk.setAttribute("type", "checkbox");
		chk.setAttribute("id", tracks[i].ID);
		chk.addEventListener("change", function () {
			filterSem();
		});

		var label       = document.createElement("label");
		label.innerHTML = tracks[i].Name;
		label.setAttribute("for", tracks[i].ID)

		filterSection.appendChild(chk);
		filterSection.appendChild(label);
	}
};

function setTh() {
	var header = document.getElementById("titleRow")
	for (var i = 0, len = staff.length; i < len; i++) {
		var th       = document.createElement("th");
		th.innerHTML = staff[i].ID;

		header.appendChild(th);
	}
};

function setCourses() {
	var table = document.getElementById("scheduleTable");
	for (var i = 0, len = courses.length; i < len; i++) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");

		td.setAttribute("class", "courseheader");
		td.setAttribute("colspan", staff.length + 1)
		td.style.textAlign = "left";
		td.innerHTML       = courses[i].Name;

		var tbody = document.createElement("tbody");

		tr.appendChild(td);
		tbody.appendChild(tr);
		tbody.classList = courses[i].Semester;

		setCourseRows(courses[i], staff.length, tbody);

		table.appendChild(tbody);
	}
	;
};

function setCourseRows(course, length, table) {

	for (var i = 0, len = course.Activities.length; i < len; i++) {

		var tr       = document.createElement("tr");
		tr.classList = "course";
		var th       = document.createElement("th");
		th.innerHTML = course.Activities[i].Name;
		tr.appendChild(th);

		for (var j = 0; j < length; j++) {
			var chk = document.createElement("input")
			chk.setAttribute("type", "checkbox");

			chk.setAttribute("id", "s" + staff[j].ID + "c" + course.ID + "a" + course.Activities[i].ID)

			chk.addEventListener("change", function () {
				changeLocalStorage(this);
			});

			var td = document.createElement("td")
			td.appendChild(chk);
			tr.appendChild(td)
		}

		table.appendChild(tr);
	}
};

function changeLocalStorage(el) {
	var staffID    = el.id.slice(1, 4);
	var courseID   = parseInt(el.id.slice(5, el.id.indexOf("a")));
	var activityID = parseInt(el.id.slice(el.id.indexOf("a") + 1));

	if (el.checked) {
		// {StaffID: "KDW", CourseID: 6, ActivityID: 1},
		schedule.push({ StaffID: staffID, CourseID: courseID, ActivityID: activityID });
		console.log(schedule);
	} else {
		var i = schedule.findIndex(function (x) {
			return x.StaffID === staffID && x.CourseID === courseID && x.ActivityID === activityID;
		});

		schedule.splice(i, 1);
	}

	localStorage.setItem("AW_Week4", JSON.stringify(schedule));
}

function checkCourses() {
	var str = localStorage.getItem("AW_Week4");
	if (str)
		schedule = JSON.parse(str);

	for (var i = 0, len = schedule.length; i < len; i++) {
		var chk     = document.getElementById("s" + schedule[i].StaffID + "c" + schedule[i].CourseID + "a" + schedule[i].ActivityID);
		chk.checked = true;
	}
}


function filterSem() {
	var filters = document.querySelectorAll("#semesterFilter input:checked");
	var filterIDs = [];
	for (var i = 0, len = filters.length; i < len; i++) {
		filterIDs.push(filters[i].id);
	}
	console.log(filterIDs);
	var tbodies = document.querySelectorAll("tbody:not(:first-child)");


	for (var j = 0, leng = tbodies.length; j < leng; j++) {

		if (filterIDs.length === 0) {
			tbodies[j].classList.remove("hidden");
			continue;
		}

		if (filterIDs.indexOf(tbodies[j].className.split(" ")[0]) === -1) {
			tbodies[j].classList.add("hidden");
		} else {
			tbodies[j].classList.remove("hidden");
		}

	}
}
