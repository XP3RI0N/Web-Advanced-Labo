var tracks = [
	{ID: "S1", Name: "Semester 1"},
	{ID: "S2", Name: "Semester 2"},
	{ID: "S3", Name: "Semester 3"},
	{ID: "S4", Name: "Semester 4"},
	{ID: "S5", Name: "Semester 5"},
	{ID: "S6", Name: "Semester 6"},
];

var staff = [
	{ID: "HAM", FirstName: "Hans", LastName: "Ameel", FullName: "Ameel Hans", Team: "NMCT"},
	{ID: "BBN", FirstName: "Benedikt", LastName: "Beun", FullName: "Beun Benedikt", Team: "NMCT"},
	{ID: "HBT", FirstName: "Henk", LastName: "Bostyn", FullName: "Bostyn Henk", Team: "NMCT"},
	{ID: "DCT", FirstName: "Dany", LastName: "Cottyn", FullName: "Cottyn Dany", Team: "NMCT"},
	{ID: "JDA", FirstName: "Jef", LastName: "Daels", FullName: "Daels Jef", Team: "NMCT"},
	{ID: "JDG", FirstName: "Johan", LastName: "De Gelas", FullName: "De Gelas Johan", Team: "NMCT"},
	{ID: "IDP", FirstName: "Ivo", LastName: "De Pauw", FullName: "De Pauw Ivo", Team: "NMCT"},
	{ID: "DDP", FirstName: "Dieter", LastName: "De Preester", FullName: "De Preester Dieter", Team: "NMCT"},
	{ID: "WDS", FirstName: "Wannes", LastName: "De Smet", FullName: "De Smet Wannes", Team: "NMCT"},
	{ID: "KDW", FirstName: "Koen", LastName: "De Weggheleire", FullName: "De Weggheleire Koen", Team: "NMCT"},
	{ID: "TDC", FirstName: "Tom", LastName: "Decavele", FullName: "Decavele Tom", Team: "NMCT"},
	{ID: "ADR", FirstName: "Ann", LastName: "Deraedt", FullName: "Deraedt Ann", Team: "NMCT"},
	{ID: "KDR", FirstName: "Kevin", LastName: "DeRudder", FullName: "DeRudder Kevin", Team: "NMCT"},
	{ID: "GDS", FirstName: "Geert", LastName: "Desloovere", FullName: "Desloovere Geert", Team: "NMCT"},
	{ID: "PDB", FirstName: "Philip", LastName: "Dubois", FullName: "Dubois Philip", Team: "NMCT"},
	{ID: "FDC", FirstName: "Frederik", LastName: "Duchi", FullName: "Duchi Frederik", Team: "NMCT"},
	{ID: "SEC", FirstName: "Sofie", LastName: "Eeckeman", FullName: "Eeckeman Sofie", Team: "NMCT"},
	{ID: "CEH", FirstName: "Claudia", LastName: "Eeckhout", FullName: "Eeckhout Claudia", Team: "NMCT"},
	{ID: "AFL", FirstName: "Angelo", LastName: "Fallein", FullName: "Fallein Angelo", Team: "NMCT"},
	{ID: "MGH", FirstName: "Michaël", LastName: "Gaillez", FullName: "Gaillez Michaël", Team: "NMCT"},
	{ID: "MGS", FirstName: "Mieke", LastName: "Gassesmet", FullName: "Gassesmet Mieke", Team: "NMCT"},
	{ID: "WGV", FirstName: "Wouter", LastName: "Gevaert", FullName: "Gevaert Wouter", Team: "NMCT"},
	{ID: "GHM", FirstName: "Geert", LastName: "Hofman", FullName: "Hofman Geert", Team: "NMCT"},
	{ID: "KLM", FirstName: "Kirth", LastName: "Lammens", FullName: "Lammens Kirth", Team: "NMCT"},
	{ID: "JLH", FirstName: "Joost", LastName: "Landsheere", FullName: "Landsheere Joost", Team: "NMCT"},
	{ID: "BMS", FirstName: "Bieke", LastName: "Masselis", FullName: "Masselis Bieke", Team: "NMCT"},
	{ID: "SOG", FirstName: "Sam", LastName: "Ongenae", FullName: "Ongenae Sam", Team: "NMCT"},
	{ID: "LPK", FirstName: "Lies", LastName: "Pinket", FullName: "Pinket Lies", Team: "NMCT"},
	{ID: "DRB", FirstName: "Dieter", LastName: "Roobrouck", FullName: "Roobrouck Dieter", Team: "NMCT"},
	{ID: "DVD", FirstName: "Dieter", LastName: "Vandroemme", FullName: "Vandroemme Dieter", Team: "NMCT"},
	{ID: "JVN", FirstName: "Johan", LastName: "Vannieuwenhuyse", FullName: "Vannieuwenhuyse Johan", Team: "NMCT"},
	{ID: "MVS", FirstName: "Marijntje", LastName: "Verspecht", FullName: "Verspecht Marijntje", Team: "NMCT"},
	{ID: "SWC", FirstName: "Stijn", LastName: "Walcarius", FullName: "Walcarius Stijn", Team: "NMCT"}
];

var courses = [
	{
		ID: 1, Name: "Design", Students: 216, Semester: "S1", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 2, Name: "Applied Maths", Students: 216, Semester: "S1", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 30},
		{ID: 2, Name: "Werkcollege", CU: 20}
	]
	},
	{
		ID: 3, Name: "Programming Skills", Students: 216, Semester: "S1", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 4, Name: "Computer & Netwerken", Students: 216, Semester: "S1", Activities: [
		{ID: 1, Name: "Hoorcollege algemeen", CU: 10},
		{ID: 2, Name: "Hoorcollege netwerken en operating systems", CU: 10},
		{ID: 3, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 5, Name: "Server Side Scripting", Students: 216, Semester: "S1", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 6, Name: "Web", Students: 216, Semester: "S2", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 7, Name: "Object Oriented Programming", Students: 216, Semester: "S2", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 8, Name: "Digital Maths", Students: 216, Semester: "S2", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 9, Name: "Datamanagement", Students: 216, Semester: "S2", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Werkcollege", CU: 30}
	]
	},
	{
		ID: 10, Name: "Network Technology", Students: 216, Semester: "S2", Activities: [
		{ID: 1, Name: "Hoorcollege", CU: 20},
		{ID: 2, Name: "Hoorcollege", CU: 30}
	]
	},
];

var schedule = [
	{StaffID: "KDW", CourseID: 6, ActivityID: 1},
	{StaffID: "KDW", CourseID: 6, ActivityID: 2},
	{StaffID: "FDC", CourseID: 6, ActivityID: 2}
];