# Project Planning

- I mentioned after the mid term when we started React that the back half of Bootcamp was going to have a bit more in terms of hwo to develop software instead of how to write code
- This is one of those lectures - we're going to dig in to some general ideas around software project management. How do you take an idea from start to finish?
- Everything we talk about today will have relevance for your final project but this isn't explicitly about that - it should also be relevant for your future jobs and personal projects, too.
- Software development is kind of fun and flexible when it comes to planning and project management. It simultaneously is very flexible, meaning you can sort of iterate and get away with skipping planning, but it also benefits tremendously from some good quality planning. So finding the balance is really important.

# What are projects

- Ok so what do we mean when we say projects?

- Project can loosely be defined as an undertaking which delivers at its close some product of value.
  - Projects will therefore generally need some kind of requirement(s), or a definition of done
  - Most projets will have some kind of planning process with it on how to achieve that result
- In terms of project planning, some of the concepts we will discuss can apply to almost any project, from making an app, to building a bridge, to renovating your kitchen, to landing on the Moon.
  - In terms of software though, you could have smaller projects like a portfolio site, a medium project like a company's site with a CMS and and payment system, to a large project like full application with multiple databases, backends, clients and more.
  - We can apply project management principles to all of these.

# Types of Project Planning

- there are many different types of project planning philosophies
- Try searching for this topic - humans have been trying to figure out the best way to execute stuff for thousands of years.
- There are two common approaches you might see in software

## Waterfall

- When we first started writing software, engineers looked to existing fields for techniques and styles.
- Waterfall originally came from "classical" engineering disciplines, like civil engineering or other kinds of manufacturing/construction.
- Since software development was new, this was a good place to start.

### Features

- Waterfall project management has a linear, sequential approach, where one phase of the project depends on the previous
- For example, you might first build the database, so that you can build the backend, so that you can build the front end.
- When you put these phases on a diagram, you can see how they flow down in to the next one, hence the name.

(show water fall diagram)

- In Waterfall, at the end of the process, the product is delivered to the client.

- DISCUSS - what are some pros and cons to this approach?

- Pros

  - Very structured, intuitive
  - Easy to see and measure progress
  - Documentation tends to be better
  - Might eliminate wasted code
  - One price

- Cons

  - Requires a lot of up front planning
  - Less flexible to changes, changes can cause delays
  - Roadblocks are common
  - Different skillsets are not always well used
  - No client feedback until the end

- Waterfall made a lot of sense for projects with physical construction. A bridge has to be planned out, it has no value until it is done, and you can't make changes along the way anyway (imagine deciding to switch from suspension to a truss bridge halfway through!)
- These physical engineering projects learned over thousands of years to get the planning right so that once you start bending mental and pouring concrete you aren't wasting anything
- But it also why these are pretty much always late!!
- It also made sense for early software. I don't know how many of you remember this but in the olden days we used to buy software at a store and it was in a box with a disk and that was the software.
  - A developer you would build the whole thing, test it, and then off to the disk printer it went and that was it!
  - Users never had a way to update that software 'cause there was no internet, so if you wanted to make a bug fix you'd have to print new disks and find a way to get it to the users

## Agile

- As we started making more and more software, we realized that this kind of engineering was different. With no physical goods, and a build step which was free and repeatable, the possibility of breaking down projects into smaller steps becomes more enticing.
- The internet was also a massive driver in this because it allowed users to connect to central sources to get updates
- This meant software could start to be delivered in stages, and development could be ongoing
- Imagine a bridge like that!

- the ideas of iterative software development started to form not long after we started writing it, but these loose ideas sort of came together in 2001
- In 2001 there was a book called Manifesto for Agile Software Development which described a lot of ideas around this different approach

### Key features

- A focus on individuals and interactions rather than processes and tools
- Software that works over documentation
- Collaboration with customer rather than contract negotiation
- Responding to change over following a plan

- Agile tends to revolve around continuous delivery - new stuff being released perpetually
- Has many entry points for changes, whether from bugs, changing business priorities, user feedback and more
- Lots of focus on face to face interactions with workers to enhance communication and get ahead of issues

DISCUSS - Pros and cons?

- Pros

  - Handles change really well
  - Gets users hands on the software sooner
  - Makes client a part of the process
  - High utilization

- Cons

  - Software can be feature incomplete or have bugs
  - Stuff gets rewritten a lot
  - Documentation tends to suffer
  - Lack of follow through can leave users with half-done things
  - Highly dependent on individual contributions

- What is better? Well, that's an opinion.
  - Out there in the software dev world right now, agile is by far the most common. It's the "hip" way to do software :D
  - You'll probably hear lots of anecdotal evidence that agile is better. It might be. But the evidence of one over the other is harder to find.
  - Agile can be implemented in a lot of different ways, and some orgs are better at it than others
  - Share some stories of bad agile
- For continuous products, agile tends to be what happens anyway
- And we'll focus on Agile for the rest of this lecture

## Scrum

- One agile methodology that you'll see a lot in software project management is called Scrum.
- Scrum is a way to organize people to make software

### Features

- Scrum posits that small teams (10 or fewer) who self-organize works best
  - This team is often cross-functional
- Product features are broken down in to smallest valuable bits
- The group works in 1-4 week periods called sprints
  - At the beginning of a sprint, the team decides on what features they can build within that period
  - At the end of the sprint, they deliver that feature
  - Along the way are daily scrums, or stand up meetings where team members say what they will do that day and discuss any roadblocks
  - At the end of the spring, one meeting is held to demonstrate the project to the client (Sprint review) and one to discuss how the sprint went in terms of performance (Sprint retrospective)
- In a team, there is generally three key roles
  - Product owner - the liaison between the busines and the developers. They own the product backlog and translate business needs to development requirements
  - Developers - they make the stuff
  - Scrum Master - a coach for the devs to continue to follow scrum practices and to ensure the team is operating as efficiently as possible

BACKLOG

- In Scrum/Agile, the product Backlog is an important concept, owned by the Product Owner
- This is a list of all the features/fixes/changes we want to make to a product
- Generally, these are user stories, but they may also include information about greater feature arcs (sometimes called Epics)
- The order of the backlog is important - the PRoduct owner works with the business to continually refine the backlog, taking things off that are no longer relevant, adding new requests, defining stuff, and prioritizing it
- At the beginning of a sprint, generally a team goes to the top of the backlog and plucks things off of it, owning it for that sprint

# How to Plan a Software Project

- Let's talk now about some practical steps to project planning for your final and any other project for software

## Major Steps

1. User Stories / Requirements
2. Database Design (ERD)
3. Routes for your Endpoints
4. Wireframes
5. Create repository
6. Project structure conventions
7. Task management
8. Communication

- We've been over all this before with Midterms, so I'm not going to itemize these one by one, but with the midterms behind you now there are some key points I want to highlight, and I'd also like to share some information about time management too, since your final is a larger project, and real projects after LHL will often be larger as well.

### Time Managements

- In Scrum, there is a practice of sizing user stories. Every company kind of does it differently but usually a number on the fibonnaci sequnce is used (this better reflects uncertainty of larger stories)
- But how do you know how long a story will take?
  - It's an art, and an imperfect one at that. You'll basically never get good at it.
  - One thing I recommend is to do time tracking. I use an app called Harvest which helps me measure different tasks
  - When I'm quoting clients I can refer back to similar stories on other projects I did to get some baselines.
  - there are other software options too
- You'll get better at it, just not good LOL. Add some padding when you're planning, some say 10-20%, could be as high as 50% if you're really uncertain.

### Architecture

- Some common decisions you'll have to make might include the following:
  - Do I write something myself or use a library/framework?
    - Tell the story of left pad
  - What, if anything, do I need to serve roles of databases, backends, front ends?
    - Can you eliminate anything?
  - Do I learn a new thing that is optimized for my use case, or use something I already know even if it is less optimized?
    - Balance between learning and features
- For your final, and in general, your timeline and objectives will dictate a lot of this

# IF TIME PERMITS

### User Stories and Task Management

- As a **\_\_**, I want to \_**\_, so that \_\_\_\_**
  - Type of user, description of feature, defintion of value
  - eg. As a facebook user I want to be able to upload a photo to my timeline so that I can share my events with my friends
- Be as granular are you can here - break it down to the smallest bits possible
- If you're industrious, you can write these out in your project management software so you have a living checklist
- As you work on the app, you can grab these stories one at a time

- Software recommendations: Github Projects, Trello, in bigger companies JIRA

### Architecture

- Some common decisions you'll have to make might include the following:
  - Do I write something myself or use a library/framework?
    - Tell the story of left pad
  - What, if anything, do I need to serve roles of databases, backends, front ends?
    - Can you eliminate anything?
  - Do I learn a new thing that is optimized for my use case, or use something I already know even if it is less optimized?
    - Balance between learning and features
- For your final, and in general, your timeline and objectives will dictate a lot of this

### Database Design

- I put this early in the design process because it's pretty foundational
- You can draw your tables/nouns from your user stories
- Bring people in to this process if you're not sure. Getting this right from the start pays dividends. I often show ERDs to colleagues for advice
- Have thoughtful discussions about datatypes. Review documentation for datatypes
- Plan your ERD long term based on all your available data, but don't be afraid to develop it in stages. It's ok to add tables later

  - Database migration software helps us accomodate agile workflow by structuring database changes

- Software recommndations - Draw.IO, Visio, Lucidchart

### Routes

- When it comes to planning routes, you can do something straightforward like write them all out based on your stories
  - ie. In order to satisfy the story of logging users in and out, I will need `POST /login` and `POST /logout`
  - Don't add a route that doesn't directly serve a user story
- Personally, I don't really do this so much any more, but what I do do, is to thinking through each story and determine if there is anything weird going on.
  - For example, if there is a restaurant app that takes orders, the standard REST stuff is going to be the `orders` endpoint with all the standard CRUD ops - nothing crazy there, probably wouldn't write that out
  - but if there is something non-simple, like maybe if the restaurant wants an API end point that serves say, analytical data about the orders (data which is just derived from the orders), I might spend some time thinking that through. What endpoint would that be? What noun? A little research on the internet might give you some insight into how REST handles different edge cases that your app might have
  - It's also good to think about nested routes. For example, if I want to get all orders for one user, is it `/orders?user_id=1` or is it `/users/1/orders`?

### Wireframes

- Wireframes can be as simply done as sketching it with a pencil on a paper to validate your mind's eye, or a full design in Adobe with interactivity and everything.
- In bigger companies a deesigner might work with you and will provide you this part, high fidelity
- For your own stuff, do the minimum you need to satisfy your planning needs. Sometimes I just mockup a few key components that I am struggling with for layout. Sometimes maybe just the mobile version so I can see a condensed view etc
  - it's ok to be surgical
-

## Software Recommendations to help with Project Management

- GitHub Issues - Track user stories
- GitHub Projects - Kanban board, connection with GitHub Issues and PRs
- Trello - Kanban board
- Draw.IO - ERD creation
- Microsoft Visio - flowcharts, ERDs
- Lucidchart - ERD creation
- Harvest - Time Tracking
- Figma - Wireframes
- Adobe XD - Wireframes
- Balsamiq - Wireframes
