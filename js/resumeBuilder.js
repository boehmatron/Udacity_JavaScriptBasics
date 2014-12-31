

var bio = {
    "name": "Johannes Böhm",
    "role": "Wannabe Web-Developer",
    "contacts": {
        "mobile": "+411234567",
        "email": "email@domain.com",
        "twitter": "@johannesboehm",
        "github": "boehmatron",
        "location": "rightHere"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Hello, and welcome to my resume!",
    "skills": ["everything", "html&css", "design"]
};

var work = {
	"jobs": [
		{
			"employer": "Swisscom",
			"title": "Designer",
			"location": "Zürich",
			"dates": "still working",
			"description": "Lorem ipsum"
		}, 
		{
			"employer": "Jibe",
			"title": "Designer",
			"location": "Ulm",
			"dates": "still working",
			"description": "Lorem ipsum"
		},
		{
			"employer": "Vodafone",
			"title": "Designer",
			"location": "Düsseldorf",
			"dates": "still working",
			"description": "Lorem ipsum"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "project title",
			"dates": 2012,
			"description": "Lorem ipsum",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"
			] 
		},
		{
			"title": "project title",
			"dates": 2011,
			"description": "Lorem ipsum",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
			] 
		},
		{
			"title": "project title",
			"dates": 2010,
			"description": "Lorem ipsum",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"
			] 
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Hochschule für Gestaltung",
			"location": "Schwabisch Gmund",
			"degree": "Diplom-Designer (FH)",
			"majors": "Design",
			"dates": 2007,
			"url": "www.hfg-gmuend.de"
		},
		{
			"name": "Hochschule für Gestaltung",
			"location": "Schwabisch Gmund",
			"degree": "Master of Arts",
			"majors": "Communication Design and Planning",
			"dates": 2008,
			"url": "www.hfg-gmuend.de"
		}
	],
	"onlineCourses": [
		{
			"title": "HTML&CSS Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "www.udacity.com"
		}
	]
}

// WELCOME AND PERSONAL INFORMATION

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name)
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
	var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL)
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	//to display welcomeMessage)
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedPicture);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

}

bio.display();


///////////////////////////////////
// DISPLAY PROJECTS

projects.display = function(){

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDate);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

	};

}

projects.display();

///////////////////                                                                                                                                                                                                                                                                                                                                 
// EDUCATION

education.display = function(){

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolURL);

	}

	for (course in education.onlineCourses){

		$("#education").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchoolName);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);

	}

}

education.display();

////////////

displayWork();

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

		var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocationAndDate = formattedJobLocation + formattedWorkDates;

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocationAndDate);
		$(".work-entry:last").append(formattedWorkDescription);

	}

	if (bio.skills.length >0){

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

	}

}

$("#main").append(internationalizeButton);

function inName(name){

	name = name.trim().split(" ");
	console.log(name);

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}



// SHOW MAP
$("#mapDiv").append(googleMap);

///////////
