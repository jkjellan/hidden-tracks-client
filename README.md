[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Hidden-Tracks-API Repo
[hidden-tracks-api](https://github.com/jkjellan/hidden-tracks-api)

## Hidden-Tracks-Client URL

- Live app: [Hidden-Tracks-Client](https://jkjellan.github.io/hidden-tracks-client/)

## Overview
This is Project Two "Individual Full Stack" for General Assembly Cohort WDI-LM01.

Start Date: April 27th 2017
End Date:  May 3rd 2017

## The Idea
The idea for this project dates back five years or so. I wanted to build a music discovery platform that makes it fun to find and share new music. I had a group of friends who were always sending new music back and forth through email and facebook. We did it to share music, but there was also a competitive aspect to it, which made the process enganging and addictive, and motivated each of us to continually search out the best new music. We each wanted to be the first to discover a great new song. It got me thinking about a new kind of music discovery platform--one where users compete against one another to find the best new music.

For example, there might be a tournament organized to identify the best folk indie song released that month. A tournament called 'Best Folk Indie Song - April 2017' would begin, and users would have the option to enter a song into the tournament. Say it's a three round tournament; that requires 8 entrants, and once all the spots are filled, entry is closed and the tournament begins. Songs are then paired off into head to head competitions, where user voting determines who moves on to the next round.  After 3 rounds of head to head contests, one song emerges as the winner.

A couple of friends and I teamed up and put together a business case. We mocked up functionality in PowerPower, and we applied to Tech Stars.  But we had no real way to execute on the idea. Now, with a new web development skillset, I wanted to see if I could build my idea.

## Development Process
I spent a lot of time during the first project attempting to roll my own custom css. My css got unweildy quickly. For this project I wanted to simplify my html and css by using a framework. I had previoulsy experimented with bootstrap, but wanted to try something different this time. During Project 1, Jim Moody used Material Design Lite. Developers on his old team at Liberty used it. I liked the the look of Material Design, and the ease of implementation. I started with a basic material design template and experiemented from there. I found it easy to customize, while still being able to take advantage of all the built in functionality.

Once I had a very basic html/css scaffold, I sketeched out wireframes (linked below). I decided that for Project 2, I would focus on allowing a user to build a song catalog.  Originally, users added songs to their catalog by providing a song title, an artist name, and a YouTube url. I used the provided url to render embedded YouTube videos as a user's song catalog. It's not great user experience, though, to have to look for a song on YouTube and copy the browser url into a second application. I decided to implement search within my application using the YouTube API. It took some doing, and some experiementation with different approaches, but I finally got it working for my deployed app.

I focused a lot on user experience. A user can search for a video and add songs to their catalog directly from the search results. All user actions related to a song (i.e. delete, edit, eventually the ability to enter a song into a tournament), can be accessed from a drop down menu on each given song card.

The application I'm delivering for Project 2 lays the foundation for my eventual vision to build a music discovery/competition platform. I plan to continue this project for my capstone.


## Unsolved Problems
For my capstone project I plan to build the tournament functionality. I need to build a tournament object and figure out how to render a bracket. I need to figure out how users will create tournaments, find tournaments, and join tournaments. I need to figure out how songs will be matched up into head-to-heads, and I need to figure out how voting will work, which is the mechanism by which songs advance through tournaments,

## User Stories
Acheived:
- As a user, I want to build a song catalog of my favorite songs.
- As a user, I want to be able to remove a song from my catalog.
- As a user, I want to be able to edit a song from my catalog to change, for example, the title.
- As a user, I want a user authorization system to protect the privacy of my account.

Future additions:
- As a user, I want a user profile that shows me: my song catalog, any active contests I'm involved in, and a history of past contests
- As a user, I want to be able to see a list of open tournaments, for which I can enter a song.
- As a user, I want to be able to vote on head-to-head competitions to help determine which songs advance through a given tournament.

## Wireframes:
- I made a rough sketch to start:  [desktop](http://i.imgur.com/DSaoAOK.jpg)


## Technologies Used
- Material Design
- Bootstrap (just for the 'alert' classes)
- YouTube API
- jQuery
- Rails
- Webpack
- Grunt
- imgur.com


## Installation

1. Install with 'npm install'.
2. Start with 'grunt serve'.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
