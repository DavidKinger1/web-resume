// Define the objects
//work object
var work = {
    "jobs": [
        {
            "employor": "AT&T",
            "title": "Sr. System Analyst",
            "location": "2525 N. Watney Way",
            "dates": "10/2001 - Present",
            "description": "Enterprise Vault Support and Implementation"
        }
            ]
};


//bio object
var bio = {
    "name": "David King",
    "role": "Web Developer",
    "contacts": {
        "mobileNum": "707*386-1072",
        "email": "kingda1@hotmail.com",
        "github": "",
        "twitter": "",
        "location": ""
    },
    "pictureURL": "",
    "welcomeMsg": "Welcome to My Resume",
    "skills": ["Server Admin","Enterprise Vault","Web Developer","C#"]
    
};


// education object
var education = { 
    "schools":[
    {
    "school": "Moreau",
    "schoolCity": "Hayward",
    "major": ["high school"],
    "gradutionYear": "1986",
    "url":"http://www.kingagenda.com"
    }
   ],
    "onlineCourses": [
        {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "12/2014",
        "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

//projects object
var projects = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images" :[""]
        }
            ]
};
    
if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    console.log(formattedSkills);
	$("#skillsChart").append(formattedSkills);

	};
/*    
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLemail.replace("%data%",bio.contactInfo);
var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);


$("#header").prepend(formattedContact);
$("#header").prepend(formattedPicture);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedSkills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/