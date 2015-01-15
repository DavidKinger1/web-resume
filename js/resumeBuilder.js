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
}


//bio object
var bio = {
    "name": "David King",
    "role": "Web Developer",
    "contacts": {
        "mobile": "707*386-1072",
        "email": "kingda1@hotmail.com",
        "github": "",
        "twitter": "",
        "location": ""
    },
        "biopic": "",
        "welcomeMessage": "Welcome to My Resume",
        "skills": ["Server Admin","Enterprise Vault","Web Developer","C#"],
    
   skillsDisplay: function() {
            var formattedName = HTMLheaderName.replace("%data%",bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);
            
            $("#skillsChart").append(HTMLskillsStart);
            var skillList = '';
                for (skill in bio.skills) {
                    skillList = HTMLskills.replace('%data%', bio.skills[skill]);
                    $("#skills").prepend(skillList);
                }
        }
}

// education object
var education = { 
    "schools":[
    {
    "name": "Moreau",
    "location": "Hayward",
    "degree": ["high school"],
    "majors":[],
    "dates": "1986",
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
}

//projects object
var projects = {
    "projects": [
        {
            "title": "Test",
            "dates": "1234-1234",
            "description": "test",
            "images" :["none"]
        }
    ]
}

bio.skillsDisplay();
