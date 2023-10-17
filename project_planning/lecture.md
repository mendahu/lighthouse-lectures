# Project Planning

- [ ] What are projects? What is project management?
- [ ] Types/Methodologies of project planning
  - [ ] Waterfall
  - [ ] Agile
  - [ ] Scrum
- [ ] How to Plan a Software Project

# Project Planning

- Define Projects -
  - An undertaking that delivers something of value at the end
  - Projects will have a requirement or some kind of _definition of done_
  - Most projects will have some kind of planning process that achieves the definition of done
- Project Planning ideas can be applied to any kidn of project
- In terms of software, these ideas will work across all sizes of projects

# Types of Project Planning

- In terms of software, there are kind of two emergeny philosophies to project planning
- Waterfall
- Agile

# Waterfall

- Original software engineering looked to classical engineering fields for ideas
- Waterfall was one of these original ideas
- What is Waterfall

- A linear, sequential approach to a project, where one phase depends on the next
- For example, you might build the database, so that you can make a backend that queries it, so that you can make a front end that sends requests
- In waterfall, the end of the process delivers a product

## Agile

- Agile it really became popular around 2001 - _Manifesto of Agile Software Development_
- What is Agile?

- Agile focuses a lot on individual interactions rather than processes / tools
- Software that works is prioritized over documentation
- Collaboration with the client rather than "contract negotiation"
- Responding to change over following a plan

- Agile is focused on continuous delivery
- Many entry points for changes, whether that's bugs, changing business priorities, user feedback

## Scrum

- Scrum is one implementation of Agile, specificaly around team organization
- What is Scrum?
- Scrum posits that software deveelopment works best with small teams (<10 people)
- SCrum prefers self-organization
- The team is cross-functional
- In Scrum, product features are broken down into smallest possible pieces of value (Minimum Viable Product)
- The team works in ~1-4 week periods called Sprints
- At the beginning of a sprint, the team will pick a user story or two user stories
- At end of sprint, delivery!!
- Along the way during a sprint, there are meetings called Daily Scrum/Standups
  - In a standup, generally you ask two questions, 1. What are you working on today? and 2. What is getting in your way/What are your roadblocks?
- Two other meetings in a sprint
  - At the end you have a Sprint Review - this is where you demo the product to the client/customer/user/stakeholder
  - Sprint Retrospective - internal meeting to the team where you discuss what went well and what didn't
- Team Members

  - Product Owner - not your manager, but they provide a lot of work direction. They are the liaison between the Scrum team and the stakeholders
    - They own the backlog
  - Developers - That's you! - Make the stuff
  - Scrum Master - A coach - their job is to keep the day to day moving

  ### Scrum Backlog

  - Backlog is the list of stuff to do
  - These are generally user Stories
  - Sometimes these backlogs include Epics
  - The order of a backlog is clutch - highest priority at the top
  - At the beginning of a sprint, the team is generally plucking stuff off the top

  - :10 past the hour!

# How to Plan Plan A Project

- Basic Steps

## Basic Steps

1. User Stories / Requirements
2. Database Design (ERD)
3. Routes/Endpoints for your API
4. Wireframes - for the Frontend
5. Create and share your repository
6. Figure out project structure/conventions
7. Task Management
8. Communication Plan

## Time Management / Task Management

- In Scrum there is a practice called Sizing
  - Sizing with Fibonacci
  - 1, 1, 2, 3, 5, 8, 13, 21, 34
  - Add all the deliveries and you get a _Velocity_
  - this is an art - the more you do it, the better oyu'll get, but you'll never be good at it
- Track your own time
  - Jake's Recommend: Harvest
- Add padding: 10%, 20%, 50%
- Timeboxing uncertainty - set a timer on prototypes and use the data to make decisions

## Architecture

- Do you bring in a library/framework, or do something by hand?
  - Story of Left Pad (`left-pad`) - prepend 0s
- Browser APIs are not hard to learn, and often save you from getting a package
- This also applies to architecutral components
- Final project: You have limited time, and that means you're going to have to make some decisions on whether you learn a new thing, or deploy a new thing

## Git Flow and Working together

- Lots of different Git flows exist

1. Have a main branch that is "sacred"
2. Each feature is branched from main into a feature branch

- Not a user branch (not `jakes-branch`)
- Not a architecture branch (not `routes`)
- A good branch would be like `feature/add-likes-to-posts`
- Merge into Main when done and tested
- Branch again for the next thing

3. After a feature is merged into main, all other branches that are open should be updated (merge main in to feature)
4. Keep branches small - the features should be small MVP pieces of value
5. Think of features as vertical slices, not horizontal slices - if a feature is "add likes to posts", then the branch shoudl have all the parts that do that, a database query, and endpoint, a front end component, and tests all the way through

## Software Recommendations/ Tools

- GitHub Issues - Track User Stories and assign them
- GitHub Projects - Kanban Board, connects to ISsues and Pull Requests

  - Trello

- Draw.io ERD design

  - Microsoft Visio
  - Lucidchart

- Harvest for time tracking

- Figma for wireframes
  - Adobe XD
  - Basalmiq
