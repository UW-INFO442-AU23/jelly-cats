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

## Published Site

The link to our published web application: https://kinguistics-6dd7e.web.app/

## Group Members

* Matthew Bacarro
* Scott Nguyen
* Vannary Sou
* Justin Sukomol
* Sarah Thomas

## User Personas

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

## Testing Protocols
|    | **Feature 1: Filter and Sort By Event Cards** | **Feature 2: Interactive Event Cards** | **Feature 3: Event Registration** | **Feature 4: Event attendee tracking** | **Feature 5: Login** |
| --- | --- | --- | --- | --- | --- | 
| **Requirement Specification** |
| **Testing Cases** |
| **Expected Results** |
| **Expected Deficiency** |
| **Unexpected Results** |

## Bugs

- If you refresh the page on any other page other than “Home”, you get a 404 error. You should not run into this error if you refrain from refreshing the Events, Resources, or About pages.
- After you log in using Google Authorization, it might take a few seconds for your profile icon to replace the “Login” button on the top right of the screen.
- Google Authentication images sometimes won’t load due to Google servers so things like user images for current logged-in user and event contact information page may not appear.
- Users who aren’t logged in can input a valid email address to register for events, then change it into an invalid email and still be able to register for said event.
- On mobile devices, users cannot log in to their account by pressing the “Login” button on the top right of their screen. Users will be redirected to Google’s login page and then directed back to Kinguistics, but they will be in the same state of not being logged in. - The feature works when looking at the mobile view on a desktop device, but not on an actual mobile device.

## References

All images used in this project were retained from [Unsplash](https://unsplash.com/ 'Unsplash') or retrieved from Google Images with a free Creative Commons License.

Castro, J. J. (2023, September 3). Here’s why Washington Public Schools have lost thousands of students since COVID-19 pandemic. KING 5 News. https://www.king5.com/article/news/education/washington-public-school-enrollment-declining/281-b1de657b-d870-4354-83f7-6e0c34283309.

Garcia, E., & Weiss , E. (2019). The teacher shortage is real, large and growing, and worse than we thought: The first report in “The perfect storm in the teacher labor market” series. Economic Policy Institute. https://www.epi.org/publication/the-teacher-shortage-is-real-large-and-growing-and-worse-than-we-thought-the-first-report-in-the-perfect-storm-in-the-teacher-labor-market-series/.

Romero, N. (2018). Washington High Schools falling behind on foreign language requirements for college. FOX13 News | Seattle & Western Washington | Formerly Q13 News. https://www.fox13seattle.com/news/washington-high-schools-falling-behind-on-foreign-language-requirements-for-college.

Zucco, E. (2023). Declining enrollment, funding formulas causing budget woes for several Washington School Districts. king5.com. https://www.king5.com/article/news/local/bellevue-closing-elementary-schools-washington-district-funding-challenges/281-9e478d7e-070d-448b-96c6-ea278eac132b.
