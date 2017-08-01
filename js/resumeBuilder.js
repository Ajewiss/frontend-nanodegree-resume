var bio  = {
  "name":"Anton Jewiss",
  "job":"Front end web Devloper",
  "contacts":
  {
    "mobile":"022 019 8895",
    "email":"jondoe.com"   
  },
  "bioPic":"images/fry.jpg",
  // skills added here
  "skills":["awesomeness", "css", "js", "html5"]
}; 

var work = 
{ "jobs":[
  {
    "job": "exatus",
    "cityOfJob":"wellington",
    "title":"locking clip dispecer",
    "yearsAtJob":"2011 - 2017",
    "description":"dispencing locking clips into packets to be taped and snaped"
  },
  {
    "job": "Te Omonga Hospice",
    "cityOfJob": "Wellington",
    "title": "Kitchen worker",
    "yearsAtJob":"2015 - 2017",
    "description": "volunterr work in Hospices ktichen"
  }
]
};

var education =
{"schools": [
 {
    "school":"Hutt valley high school",
    "yearsAtSchool":"2011 - 2017",
    "discription":"dispencing locking clips into packets to be taped and snaped"

  },
  {
    "school":"Udacity",
    "dates":"2017 ",
    "url":"https://classroom.udacity.com/nanodegrees/nd001/parts/9d3a4440-1e65-4fc5-9ac1-b40e401ad069/modules/296281861575460/lessons/1930528550/concepts/19506785590923"
  }
  ]
};

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.job);
  var formattedContacts = HTMLcontactGeneric.replace("%data%",bio.contacts.email);
  var formattedContacts = formattedContacts.replace("%contact%","email");
  var formattedbioPic =  HTMLbioPic.replace("%data%",bio.bioPic);
  
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedContacts);
  $("#header").append(formattedbioPic);
  $("#header").append(HTMLskillsStart);  // add skills start here

  // here's the for loop in the displayBio function
  for(var i=0; i<bio.skills.length; i++){
    var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
    console.log("skill: " + formattedSkills);
  }
};  

displayBio();

function displayWork(){
  // create new div section for work experience
  $("#workExperience").prepend(HTMLworkStart);
  
  for (j in work.jobs) {
    var formattedCityOfJob = HTMLworkEmployer.replace("%data%",work.jobs.job[j]);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs.title[j]);
    var formattedYearsAtjob = HTMLworkDates.replace("%data%",work.jobs.yearsAtJob[j]);
    var formattedDescripton = HTMLworkDescription.replace("%data%",work.jobs.description[j]);

    $("#workExperience").append(formattedCityOfJob);
    $("#workExperience").append(formattedTitle);
    $("#workExperience").append(formattedYearsAtjob);
    $("#workExperience").append(formattedDescripton);
  }
};

displayWork();

function displayEducation(){
  var formattedSchool = HTMLSchoolName.replace("%data%",education.schools[0].school);
  var formattedSchool = HTMLSchoolName.replace("%data%",education.schools[1].school);
  var formattedSchool = HTMLSchoolName.replace("%data%",education.schools[1].school);
  var formattedSchool = HTMLSchoolName.replace("%data%",education.schools[1].school);

  $("#education").prepend(HTMLschoolStart);
  $("#education").append(formattedSchool);
  $("#education").prepend(HTMLschoolStart);
  $("#education").append(formattedSchool);
};


displayEducation();

var map; 