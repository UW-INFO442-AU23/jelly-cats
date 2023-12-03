<h1 align="center"><strong>Kinguistics</strong></h1>

<h2 align="center"><strong>Collaborative language-learning in King County, WA</strong></h2>

<p align="center">Group 6: Jelly Cats</p>

## Our Mission

To further support economically disadvantaged King County high school students learning a new language, our solution aims to bridge the gap between language learning in schools and at home. Through the Kinguistics site, students will learn the benefits of language learning, access additional educational resources that may not be available in their high school classrooms, and sign up for free events to practice their language learning with other students, either virtually or in person. By providing students with additional resources and opportunities for collaboration, we hope to encourage peer learning and motivate students to practice and actively engage with their studies.

## Features

- Log in/create an account through Google Authentication
- Language-learning events with a description and details
- Filter and sort-by system for language-learning events
  - Filter based on language, language level, location
  - Sort by date
- Ability to register for language-learning events
  - Requires user email or login for validation
- Event attendee tracking
  - Multi-media information expressing the benefits of learning another language
- Vocabulary flashcards
  - Requires the user to be logged in to track progress

## Published Site

The link to our published web application: https://kinguistics-6dd7e.web.app/

## Group Members

* Matthew Bacarro
* Scott Nguyen
* Vannary Sou
* Justin Sukomol
* Sarah Thomas

# User Personas

The two user personas we used when designing our product can be found here. They are also linked in our repo.

![Persona 1](https://github.com/UW-INFO442-AU23/jelly-cats/assets/77508839/ce85ef69-c5a5-4fb2-b432-994ff742f46a 'Persona 1 - Sophia')

![Persona 2](https://github.com/UW-INFO442-AU23/jelly-cats/assets/77508839/ad87e23b-93c1-421b-976f-84b3caaf5e8a 'Persona 2 - Gabriel')

# Development

## Built With:
- JavaScript
- CSS
- HTML
- React
- Firebase
- Tailwind

## Start LocalHost
`npm start`

`Ctrl + C` to cancel

## Deploy Build to Firebase Hosting
`npm run build`

`firebase deploy`

## Testing Protocols
|    | **Feature 1: Filter and Sort By Event Cards** | **Feature 2: Interactive Event Cards** | **Feature 3: Event Registration** | **Feature 4: Event attendee tracking** | **Feature 5: Login** |
| --- | --- | --- | --- | --- | --- | 
| **Requirement Specification** | <ul><li>This feature allows users to filter through language-learning events. If a user navigates to the “Events” page listed on the navigation bar, they will see a page of event cards with the option to filter by “Language”, “Language Level”, and “Location”. They also have the option to sort events by date ascending or descending.</ul> | <ul><li>The “Events” page will include event cards containing information such as Event Title, Event Image, # of Available Spots, Date, Time, Location, and Learning Level. All event cards include a “Learn More” button. Clicking on this button will redirect users to a new page displaying the Event Description, Event Registration, and a Contact Card for the event’s host. | <ul><li> Users with or without a Kinguistics account may register for language-learning events. Not logged-in users must accept an event policy and enter their email to register for their event. Users with a Kinguistics account can register just by accepting the event policy, and can additionally track their events on their user profile.</ul> | <ul><li>Each event card contains the number of spots for the class and how many spots have been filled. If a user registers for an event that has 3/12 spots taken, the number of spots will decrease by 1 to 2/12. If a user decides to unregister, the number of spots taken increases by 1 to 3/12.</ul> | <ul><li>This feature allows users to log in/create an account through Google Authentication. Users will have access to a profile page with their Google profile picture, name, email, and any events they have registered for (if they have registered for events previously). Logged-in users do not have to leave their email when registering for an event. If a user clicks on an event, they should  have access to flashcards where they can monitor their progress.</ul> |
| **Testing Cases** | <ul><li>If no filter category is selected, all four event cards should be displayed. <li>If users filter by In-person events, only In-person event cards should be displayed. If a user filters by Virtual events, only Virtual event cards should be displayed. <li>If a user filters by the Beginner language level, only events at a Beginner level should be displayed. The same goes for Intermediate and Advanced. <li>If a user filters by any available languages (Spanish, French, or ASL), only events in those languages should be displayed. <li>If a user sorts dates by Ascending, events should be listed from nearest date to farthest. If they choose Descending, events should be listed from farthest date to nearest. <li>If none of the selected filters are assigned to an event, the page should tell the user that no matches were found and prompt them to clear their filters. </ul> | <ul><li>User can successfully click on the “Learn more” button and be redirected to the Event’s Registration page.</ul> | <ul><li>**Not logged in:** Users can check off the event policy and type in an email address. If they can register for the event, they should see a screen saying they successfully registered for the event. <li>If a user does not provide a valid email OR does not check off the event policy, the “Register” button should be grayed out <li>If an event is at maximum capacity, the “Register” button should be grayed out and say “Maximum Capacity”, not allowing any users to register for the event.</ul> | <ul><li>If a user successfully registers for an event, the number of spots available on the event card should decrement by 1. If a user successfully unregisters for an event, the number of spots available should increment by 1.</ul> | <ul><li>If users login/create an account, they should be able to access their profile to see their Google profile picture, name, email, and registered events <li>If logged in, a user should be able to register and unregister for an event without inputting their email <li>If logged in, a user should have access to flashcards for specific events.</ul> |
| **Expected Results** | <ul><li>User can filter events without confusion, finding the language-learning event that meets their needs.</ul> | <ul><li>User successfully clicks on “Learn more” button on an event card and is redirected to the event’s registration and information page.</ul> | <ul><li>Users both with and without a Kinguistics account are able to register for language-learning events securely, receiving confirmation after successfully registering.</ul> | <ul><li>Users with and without a Kinguistics account should be able to view the updated number of spots available after registering or unregistering for an event. The number of spots available should not exceed or go below the total number of spots available for an event.</ul> | <ul><li>Users can log in to their Google account and access their profile. A user can navigate to their profile to see their Google profile picture, name, email, and registered events. When registering for an event, users only have to accept the event policy and press “Register”. When unregistering, users do not have to accept the policy. Users can access event flashcards, which track their progress.</ul> | 
| **Expected Deficiency** | <ul><li>The filtered result may take some time to load.</ul> | <ul><li>N/A</ul>| <ul><li>Currently, users who aren’t logged in can input a valid email address to register for events, but if they change their email into an invalid email, they can still register for said event.</ul> | <ul><li>N/A</ul> | <ul><li>The user’s profile picture takes a few seconds to load upon login. Users cannot log in to their account on mobile.</ul> |
| **Unexpected Results** | <ul><li>User cannot find the event they are looking for or events do not filter by the filter attributes. User does not receive any error handling if no events are found.</ul> | <ul><li>User is not redirected to the event’s registration page, or the “Learn more” button is not clickable.</ul> | <ul><li>An event is at max capacity and the user can still register for the event. A user with a valid email and who agrees to the event policy cannot register.</ul> | <ul><li> The number of spots available does not change or does not properly increment or decrement when a user registers or unregisters for an event.</ul> | <ul><li> The user cannot log into their Google Account to access their profile. When registering for an event, the user has to input their email. A user is unable to access their profile containing registered events or study flashcards associated with events. Google profile picture, email, and name do not display within Profile</ul> |

## Bugs

- If you refresh the page on any other page other than “Home”, you get a 404 error. You should not run into this error if you refrain from refreshing the Events, Resources, or About pages.
- After you log in using Google Authorization, it might take a few seconds for your profile icon to replace the “Login” button on the top right of the screen.
- Google Authentication images sometimes won’t load due to Google servers so things like user images for current logged-in user and event contact information page may not appear.
- Users who aren’t logged in can input a valid email address to register for events, then change it into an invalid email and still be able to register for said event.
- On mobile devices, users cannot log in to their account by pressing the “Login” button on the top right of their screen. Users will be redirected to Google’s login page and then directed back to Kinguistics, but they will be in the same state of not being logged in. - The feature works when looking at the mobile view on a desktop device, but not on an actual mobile device.

# References

All images used in this project were retained from [Unsplash](https://unsplash.com/ 'Unsplash') or retrieved from Google Images with a free Creative Commons License.

Castro, J. J. (2023, September 3). Here’s why Washington Public Schools have lost thousands of students since COVID-19 pandemic. KING 5 News. https://www.king5.com/article/news/education/washington-public-school-enrollment-declining/281-b1de657b-d870-4354-83f7-6e0c34283309.

Garcia, E., & Weiss , E. (2019). The teacher shortage is real, large and growing, and worse than we thought: The first report in “The perfect storm in the teacher labor market” series. Economic Policy Institute. https://www.epi.org/publication/the-teacher-shortage-is-real-large-and-growing-and-worse-than-we-thought-the-first-report-in-the-perfect-storm-in-the-teacher-labor-market-series/.

Romero, N. (2018). Washington High Schools falling behind on foreign language requirements for college. FOX13 News | Seattle & Western Washington | Formerly Q13 News. https://www.fox13seattle.com/news/washington-high-schools-falling-behind-on-foreign-language-requirements-for-college.

Zucco, E. (2023). Declining enrollment, funding formulas causing budget woes for several Washington School Districts. king5.com. https://www.king5.com/article/news/local/bellevue-closing-elementary-schools-washington-district-funding-challenges/281-9e478d7e-070d-448b-96c6-ea278eac132b.
