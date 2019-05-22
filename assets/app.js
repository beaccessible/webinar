let training = {
title: "Be Accessible",
heading: "We run workshops, teaching developers how to build applications that support the broadest circle of people",
headingEm: " - before a court makes them.",
introOne: "We are entering the age of the professional internet. As processes have moved online and people rely more on the web, there are new and higher expectations for online businesses - in accessibility just as with security and privacy.",
introTwo: "Now, people have always set these expectations, deciding what websites or apps to use and spend their dollars on.",
teaser: "Increasingly, these expectations for online settings are being codified by government, through accessibility laws and newer tech-focused laws such as California Consumer Privacy Act and Europe’s General Data Protection Regulation. These laws are creating a more accessible and secure internet",
descriptionOne: "But, businesses now operate in an in an environment facing constant threat from a whole class of private lawyers empowered to file complaints and extract settlements. Small businesses are treated as tech companies - that have the technical resources to immediately fix their website, and remove accessibility barriers. ",
descriptionTwo: "For small businesses, most accessibility barriers are due to early flaws - flaws that could have been prevented by business owners choosing the right website platform for their organization and understanding the diverse ways that people will use their website.",
descriptionThree: "This webinar is intended for business owners or content managers that don’t touch code. In 90 minutes, we cover online accessibility laws and how to do a basic audit of your own website. Business owners will gain knowledge of how accessibility features provide a greater online experience for all website visitors.",
descriptionFour: "Participants will leave the webinar with understanding of how to handle accessibility complaints and more importantly, how to deter them in the first place. A business can never stop people from filing complaints but through small but deliberate decisions, they can demonstrate that they’ve already considered accessibility and a lawsuit would not lead to a new remedy or settlement.",
modules: [
    {
        topic: "Introduction",
        time: '0:00'
    },
    {
        topic: "Accessibility Laws and Philosophy",
        time: '00:05',
    },
    {
        topic: "Get Ahead of Regulation - GDPR, CCPA, ADA",
        time: '00:10'
    },
    {
        topic: "Accessibility for Small Business",
        time: '00:15'
    },
    {
        topic: "How to Audit Your Website",
        time: '00:25'
    },
    {
        topic: "How to Choose a Website Platform",
        time: '00:55'
    },
    {
        topic: 'Break',
        time: '01:05'
    },
    {
        topic: "How to Communicate to Your Developer",
        time: '01:10'
    },
    {
        topic: "Why An Accessibility Statement",
        time: '01:15'
    },
    {
        topic: "How to Handle A Complaint",
        time: '01:20'
    },
    {
        topic: "How to Stay Accessible",
        time: '01:25'
    }],

booking: "Each person learns how to include web accessibility in their contracts and audit that work. The goal here is that business owners feel confident that they can be proactive about accessibility rather than reactive.",
bookingTwo: "The webinar is just for your own business. No other attendees. So there's ample time for questions and to reflect on our website. For more information, reach out to sales@beaccessible.com."
}

$(document).ready(function() {
    let trainings = $('#trainings');
    training.modules.forEach( sec => {
        let moduleContainer = $('<li>').addClass('boxsection');
        let moduleBox = $('<div>').addClass('box');
        let moduleHeader = $('<div>').addClass('header');
        let topicBox = $('<div>').addClass('topicbox');
        topicBox.append($('<h3>').addClass('topic').text(sec.topic));
        let timeBox = $('<div>').addClass('timebox');
        timeBox.append($('<span>').addClass('time').text(sec.time));

       moduleHeader.append(topicBox)
       moduleHeader.append(timeBox)

     

        let exerciseBox = $('<div>')
        if(sec.exercises) {
            exerciseBox.addClass('exercises');
            exerciseBox.append($('<h4>').addClass('exercise-title').text("Exercises"));
            sec.exercises.forEach( exercise => {
                exerciseBox.append($('<li>').addClass('exercise').text(exercise))
            })
        }


        moduleBox.append(moduleHeader);
        moduleBox.append(exerciseBox);

        moduleContainer.append(moduleBox);
        trainings.append(moduleContainer);
        
    });

    console.log(training.title);

    let preface = $('#preface');

    preface.append($('<p>').addClass('text').text(training.introOne));
    preface.append($('<p>').addClass('text').text(training.introTwo));

    preface.append($('<h2>').addClass('title').text('Decision Maker Webinar'));

    preface.append($('<p>').addClass('text').text(training.descriptionOne));
    preface.append($('<p>').addClass('text').text(training.descriptionTwo));
    preface.append($('<p>').addClass('text').text(training.descriptionThree));
    preface.append($('<p>').addClass('text').text(training.descriptionFour));

    let epilogue = $('#epilogue')

    epilogue.append($('<p>').addClass('text').text(training.booking))
    epilogue.append($('<p>').addClass('text').text(training.bookingTwo))


})
