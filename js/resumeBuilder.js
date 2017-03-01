/*
Data object definitions
 */
var bio = {
    name: "John Branigan",
    role: "Front-End Developer",
    contacts: {
        email: "john@branigan.net",
        mobile: "215-300-7220",
        twitter: "johnbranigan",
        github: "jbranigan",
        location: "St Louis"
    },
    biopic: "http://branigan.net/img/profile.jpg",
    welcomeMessage: "Technologist and geographer leveraging design, web technology, and open data to help the communities around us.",
    skills: [
        "JavaScript",
        "UX Design",
        "Web Maps",
        "Cartography",
        "Database Design"
    ],
    display: function() {
        // set up the variables to be added to the page
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        // add items to the page
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);

        $("#header").append(formattedImage);
        $("#header").append(formattedWelcome);

        // check to see if the array has content, and add it, if so
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }

        // append the contact info to the footer, too
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);
    }
};

var work = {
    jobs: [{
            employer: "Azavea",
            title: "GIS Project Manager",
            location: "Philadlephia, PA",
            dates: "2012 - 2017",
            description: "Project management for web and mobile applications focused on spatial data analysis. Oversee all aspects of projects: scope and vision, budget, UI/UX design, architecture, development, and deployment. Grew a team from three to ten. Completed over 30 projects with an average throughput over $1M per year. Spatial data design and processing to support applications. Incorporated usability testing as a project standard."
        },
        {
            employer: "Spectrum Creative Solutions",
            title: "Technology Manager",
            location: "Poughkeepsie, NY",
            dates: "2011 - 2012",
            description: "Agile management of a six member team developing a cloud-based marketing platform. Prioritized workload and ensured project task completion. Led interface and technical design of new modules. User analytics and A/B testing. Developed data-driven variable print documents. MySQL database management. Wrote proposals and contracts. Led online product demos. Wrote documentation."
        },
        {
            employer: "Independent",
            title: "Web Developer, Data Analyst, Musician",
            location: "Asheville, NC",
            dates: "2006 - 2011",
            description: "Website and application design, development and implementation from start to finish. Platform and API integration, custom CMS development, browser compatibility. Data and database design, interactive map design, UI/UX design, icon and button design, wireframing. SEO, HIPAA compliant security, eCommerce integration, language localization. Performed upright bass on hundreds of stages nationwide."
        },
        {
            employer: "W.E.C. Engineers",
            title: "GIS Analyst",
            location: "Harrisburg, PA",
            dates: "2006 - 2007",
            description: "Managed an enterprise ArcSDE (Microsoft SQL Server) database. Produced custom maps and reports for staff and executives. Documented and tested ArcGIS Server applications. Wrote a lot of metadata."
        },
        {
            employer: "A.D. Marble & Company",
            title: "GIS Analyst",
            location: "Philadelphia, PA",
            dates: "2001 - 2006",
            description: "Designed and implemented spatial and relational databases. Automated data collection and report production. Website design and development. Collected and compiled GIS data, integrating CADD and GPS data. Cartographic production. Built site selection models. Calculated environmental impacts."
        },
        {
            employer: "A.D. Marble & Company",
            title: "Archaeological Field Technician",
            location: "Philadelphia, PA",
            dates: "1999 - 2001",
            description: "Collected and cataloged archaeological field data. Designed and implemented artifact inventory databases. Performed quantitative analysis on datasets. Fell in love with GIS."
        }
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            // add the container to the page
            $("#workExperience").append(HTMLworkStart);

            // set up variables
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            // add items to the page
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    projects: [{
            title: "Nicer Weather",
            dates: "2016",
            description: "A demo app using Node/Express/Pug and the Weather Underground API",
            images: ["http://branigan.net/img/nicerweather-1x.png"]
        },
        {
            title: "D3 Globe",
            dates: "2016",
            description: "An antique-style globe, built with D3 and Natural Earth data",
            images: ["http://branigan.net/img/d3map-1x.png"]
        },
        {
            title: "Azavea projects",
            dates: "A selection of projects I managed at Azavea",
            description: "GoPhillyGo, Building Energy Benchmarking, and OpenDataPhilly",
            images: ["http://branigan.net/img/gophillygo-1x.png", "http://branigan.net/img/mos-energy-1x.png", "http://branigan.net/img/opendataphilly-1x.png"]
        }
    ],
    display: function() {
        projects.projects.forEach(function(project) {
            // add the projects container to the page
            $("#projects").append(HTMLprojectStart);

            // set up the variables
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            // add content to the page
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // add each image from the array
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

var education = {
    schools: [{
        name: "Emory University",
        location: "Atlanta, GA",
        degree: "B.A.",
        majors: ["Classical Studies", "Anthropology"],
        dates: "1999",
        url: "http://www.emory.edu/"
    }],
    onlineCourses: [{
            title: "GIS Certification",
            school: "Pennsylvania State University",
            dates: "2004",
            url: "http://www.psu.edu"
        },
        {
            title: "Front-End Development Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://udacity.com"
        }
    ],
    display: function() {
        education.schools.forEach(function(school) {
            // add the education container to the page
            $('#education').append(HTMLschoolStart);

            // set up the variables
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

            // add education items to the page
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);

            // add each major in the array
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        });
        if (education.onlineCourses.length > 0) {
            // if there are online courses, add the header
            $('#education').append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(course) {
                // add the container
                $('#education').append(HTMLschoolStart);

                // set up the variables
                var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
                var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

                // append the online course content
                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedUrl);
            });
        }
    }
};

/*
Map helper function
*/

function showMap() {
    $("#mapDiv").append(googleMap);
}

/*
Page initialization
*/

bio.display();
work.display();
projects.display();
education.display();
showMap();