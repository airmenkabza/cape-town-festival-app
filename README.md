# cape-town-festival-app
Web application for the annual Cape Town Festival
visit the website on :https://cape-town-festival-app.vercel.app/
<!DOCTYPE html>
<html>

<head>
  
<body>

  <h1>Festival App README</h1>

  <p>This repository contains the front-end code for the Festival App. The app is designed to facilitate visitor signups, event RSVPs, event attendance monitoring, post-event feedback, and provides dashboards for administrators to analyze festival metrics.</p>

  <h2>Workflow</h2>

  <h3>Visitor Signup</h3>
  <ol>
    <li>User Visits Welcome Page: Visitor navigates to the welcome page.</li>
    <li>Visitor Chooses "Sign Up": Clicks on the "Sign Up" link on the welcome page.</li>
    <li>Signup Page: Directed to the signup page to enter necessary details.</li>
    <li>Visitor Completes Signup Form: Fills out the username, password, and other required information.</li>
    <li>Submit Signup Form: Clicks the "Sign Up" button to submit the form.</li>
    <li>Backend Processing: The backend processes the signup information and creates a new user account.</li>
    <li>Redirect to Login: Visitor is redirected to the login page to authenticate.</li>
  </ol>

  <h3>Event RSVP</h3>
  <ol>
    <li>User Logs In: Visitor logs in using the created account.</li>
    <li>View Events: Directed to a page displaying available events with open RSVP slots.</li>
    <li>Event Selection: Chooses an event with available space.</li>
    <li>RSVP Confirmation: Clicks on the "RSVP" button to confirm attendance.</li>
    <li>Backend Processing: The backend updates the list of attendees for the chosen event.</li>
  </ol>

  <h3>Event Attendance</h3>
  <ol>
    <li>Administrator Access: Administrator logs into the platform.</li>
    <li>Event Management: Accesses the event management section.</li>
    <li>Selects Event: Chooses a specific event to monitor attendance.</li>
    <li>View Attendees: Reviews the list of attendees for the selected event.</li>
  </ol>

  <h3>Post-event Feedback</h3>
  <ol>
    <li>Event Ends: The event concludes.</li>
    <li>Visitor Receives Feedback Prompt: Visitors who attended the event receive a prompt to provide feedback.</li>
    <li>Feedback Submission: Visitors rate the event, answer whether they would recommend it, and leave comments.</li>
    <li>Backend Processing: The backend stores the feedback data for analysis.</li>
  </ol>

  <h3>Administrator Dashboard</h3>
  <ol>
    <li>Administrator Access: Administrator logs into the platform.</li>
    <li>Festival Dashboard: Views the overall festival dashboard with key metrics about visitors (e.g., age, gender).</li>
    <li>Event Dashboard: Selects a specific event to view detailed metrics.</li>
    <li>Analysis and Reporting: Utilizes the dashboard to analyze trends and make informed decisions.</li>
  </ol>
  <h2>Database Design</h2>

  <pre>
    Users Table:
    - UserID (Primary Key)
    - Username
    - Password (hashed + salted)
    - Role (Administrator or Visitor)
    - PersonalInfoID (Foreign Key)
    - Email (encrypted)
    - Address (encrypted)
    ...

    PersonalInfo Table:
    - PersonalInfoID (Primary Key)
    - UserID (Foreign Key)
    - FirstName (encrypted)
    - LastName (encrypted)
    - Age (encrypted)
    - Gender (encrypted)
    ...

    Events Table:
    - EventID (Primary Key)
    - Name
    - Description
    - CategoryID (Foreign Key)
    - Start Time
    - End Time
    - Attendee Limit
    - Ratings
    - Comments
    ...

    Attendees Table:
    - AttendeeID (Primary Key)
    - UserID (Foreign Key)
    - EventID (Foreign Key)
    - CheckInTime
    ...

    Categories Table:
    - CategoryID (Primary Key)
    - CategoryName
    ...

    Ratings Table:
    - RatingID (Primary Key)
    - AttendeeID (Foreign Key)
    - EventID (Foreign Key)
    - OverallRating
    - RecommendRating
    ...
  </pre>

  <h2>How to Run</h2>

  <p>To start the development server, use the following command:</p>

  <pre>
    npm start
  </pre>

  <p>Visit <a href="http://localhost:3000">http://localhost:3000</a> to see the welcome page and navigate to login and sign-up pages.</p>

  <h2>File Structure</h2>

  <pre>
    /festival-frontend
    |-- public/
    |   |-- index.html
    |   |-- favicon.ico
    |   +-- ...
    |-- src/
    |   |-- assets/
    |   |   |-- images/
    |   |   +-- styles/
    |   |       |-- WelcomePage.css
    |   |       |-- LoginForm.css
    |   |       +-- SignUpForm.css
    |   +-- components/
    |   |   |-- WelcomePage.js
    |   |   |-- WelcomePage.css
    |   |   |-- LoginForm.js
    |   |   |-- LoginForm.css
    |   |   |-- SignUpForm.js
    |   |   +-- SignUpForm.css
    |   +-- pages/
    |   |   |-- WelcomePage.js
    |   |   |-- LoginPage.js
    |   |   +-- SignUpPage.js
    |   +-- services/
    |   |   |-- AuthService.js
    |   |   +-- EventService.js
    |   +-- utils/
    |   |   |-- api.js
    |   |   +-- ...
    |   |-- App.js
    |   +-- index.js
    |-- .gitignore
    |-- package.json
    +-- README.md
  </pre>

</body>

</html>
Start the development server.
bash
Copy code
npm start
Visit http://localhost:3000 to see the welcome page and navigate to login and sign-up pages.

Remember, this is a basic setup, and you can enhance and customize it further based on your project requirements. Additionally, consider incorporating state management, form validation, and more sophisticated styling for a complete user experience.
