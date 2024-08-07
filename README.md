# Project Overview

This is the phase 1 of Educere web application system which involved building the web application itself using MERN stack architecture (Mongo, Express, React, Node) following the requirement specification. One of the features of Educere is to enable users to contribute in expanding the application content catalog by submission.

![Alt text](interfaces/implementation1.png)

## Educere Web Application

Educere web application system is a repository of 100+ educational resources of CS and IT-based to help users in finding the perfect materials that suits their needs in a streamline way. The contents are generated from Educere Scrapper Python script (see the other project [here](https://github.com/mirulh/Educere_Scrapper)).

## How to install

### Setup the MongoDB database

1. Setup MongoDB database locally or using Atlas

2. Add the database path inside .env file

### Setup the project by installing dependencies

3. Clone/download the project in your local environment

4. Navigate to the frontend directory and
   run `npm install` to install all frontend dependencies

5. Navigate to the backend directory and
   run `npm install` to install all backend dependencies

### Start the project

6. Start your MongoDB database
   Locally: Run `sudo systemctl start mongod`
   Remotely: Start in your Atlas account

7. Navigate to the backend directory
   run `npm run dev` to start the backend on localhost:8000

8. Navigate to the frontend directory
   run `npm run dev` to start the frontend on localhost:5173 (vite)

## Seed the application with data

    run `http://localhost:8000/api/seed` in browser to seed all data into the database and the system

## Interface:

### 1. Search Page

User can search contents by name or filter options at the side

![Alt text](interfaces/SearchPage.png)

### 2. Filter Options

User can filter contents by 5 filter options Subjects, Technologies, Types, Costs, and Average Reviews

![Alt text](interfaces/Filters.png)

### 3. Content Page

User can view more details of a content in the content page

![Alt text](interfaces/ContentPage.png)

### 3. Save/Bookmark Page

User can view all saves in the saved page

![Alt text](interfaces/SavePage.png)

### 4. Submission Page

User can contribute to the website's content repository by submitting URLs to learning resources. All submissions will be reviewed and approved or rejected by the Admin before being added to the website as content

![Alt text](interfaces/SubmissionPage.png)

### 5. Content Dashboard

Admin can manage contents in the content dashboard. Action features include create/add content, edit content, and delete content

![Alt text](interfaces/ContentDashboard.png)

### 6. Submission Dashboard

Admin can manage user submission in the submission dashboard. Actions features include approve and reject button to accept or delete user's submission

![Alt text](interfaces/SubmissionDashboard.png)

### 7. User Dashboard

Admin can manage user's in the user dashboard. Actions include edit and delete user

![Alt text](interfaces/UsersPage.png)

### 8. Summary Dashboard

This page contain the summaries of all contents. It shows the total numbers of contents, users, and admin available in the system. Additionally, admin can view the percentages of content's filter in pie chart

![Alt text](interfaces/Dashboard1.png)

![Alt text](interfaces/Dashboard2.png)

![Alt text](interfaces/Dashboard3.png)

### 9. Submission Page

User can contribute in expanding the website's contents by sharing a learning resource link and get admin's approval

![Alt text](interfaces/SubmissionPage.png)

### 10. Signup Page

![Alt text](interfaces/SignupPage.png)

### 11. Signin Page

![Alt text](interfaces/SigninPage.png)

### 12. User Profile Page

![Alt text](interfaces/ProfilePage.png)
