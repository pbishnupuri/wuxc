# WUXC LogARun

Prat and I have sort of decided that we want to run with the LogARun remake. It will give us a chance to practice on a pretty full-stack project, plus it would be applicable for the team at some point.

# Implementation

Not sure what other people think about for front-end/server/database stuff, but there are a ton of options that we can look towards for different aspects of the project.

## Front-End Stuff

Per usual this is typically HTML/CSS, but there are certainly other frameworks that we can use. React is becoming the new standard, yet it may be sorta confusing for people who aren't totally up to speed with HTML and such. I know that Brad has done stuff in React, I use it at work, and maybe Prat (?) has used it before.

Angular is another option that we could do, although this is starting to become less popular. If we want to learn stuff that will be applicable in a few years, this may not be the route to go.

Vue.JS is new (?) and I'm not that familiar with it at all. I know that it can be used but I recommend this not end up being our mode of front end development.

Of course, we could always default to static HTML pages just to start. I'm getting pretty comfortable converting static HTML stuff into React Components; even if people aren't that comfortable building out everything in React, I would probably be able to convert stuff into the correct framework to make everything look clean.

Prat: I would like to learn to use React since it got brought up in 2 interviews. We should not stick with default static HTML since it doesn't allow for us to learn as Nate and I already have experience with it from classes and such so we should work with something we can't learn in class.

Nate: I did one assignment with React in 204 and would like more work with it. Agree to start with static HTML prob.

## Server-side

We would certainly need to figure out where we're hosting this stuff. We could run a Node.JS server up on an EC2 instance, but this would cost us money if we want full up time. My brother and I are currently running through another project to get used to a bunch of AWS integration, so we might also be able to run stuff through AWS Lambda functions.

We could also host stuff through some other form of server farm or something if anyone has any other ideas concerning this.

Prat: AWS or Microsoft Azure offer some free cloud services

## Database / Data Storage

Loads of ways we could approach this portion. MongoDB has some pretty decent infrastructure for larger data sets (assuming this ends up being used and we need to start storing logs somewhere). Firebase through Google is another option, but I'm not sure if it scales super well. We could also look into something from AWS (DynamoDB through AWS, S3) or other large-scale data storage options (Oracle's MySQL, PostgreSQL).

MongoDB is free, but space is VERY limited on there. MySQL and old fashion sql servers are always possible. How good is DynamoDB? -Does it offer more space than MongoDB for free?

Nate: Currently working with mysql for work lol. seems old.

## Project Tracking

Not really necessary but it is nice to have something that would help us track what needs to be done/things that people could work on. We use PivotalTracker at work, but we would have to pay if we all want to hop on there (plus it can be a little overwhelming for something that is less serious). GitHub projects is pretty well integrated and would allow us to tie commits/pull requests to specific issues. That's definitely my choice, or at least what I think would fit this project in its current state.

PivotalTracker allows for 3 free users. Azure's Agile management tool allows for 5 free. Jira sucks.

Nate: lol im worthless on here. but wanna try and help.

## Example

My brothers and I are currently building out another project, so I sort of have an idea of how things should line up for something to be self-sufficient.

- *Front-end:* Using React to build out components, clearly HTML and SCSS off of that.
- *Server-side:* Using AWS API Gateway to handle incoming requests, pushing through AWS Lambda (Python).
- *Database/Storage:* Using AWS DynamoDB for connected users, AWS S3 to store other data.
- *Project Tracking:* Using PivotalTracker, but this is difficult with >3 people
- *Miscellaneous:* Using AWS Cognito to track user profiles, AWS CloudWatch for error logging

This takes a decent amount of setup to get things running, so it's possible that we could move everything over to there once things get off the ground.
