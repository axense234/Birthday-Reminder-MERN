# **Birthday Reminder -MERN Stack Project**

## 1.**Installation(both required)**:

### Backend Testing

```
cd backend-br
npm test
```

### Frontend Testing

```
cd frontend-br
npm start
```

## 2.**Information** about the **project:**

`<p>Birthday Reminder is a MERN Stack project where you can be reminded of your relatives/friends birthdays by making a reminders of their birthdays!</p>`

### **_Features:_**

- **Sign Up/Login** System
- User **Authentication** using JWT(Json Web Tokens)
- **Loading System**(providing a better user experience)
- **Birthday Reminders**
  - **Creating/Editing** Birthday Reminders
  - **Muting/Unmuting** Birthday Reminders
  - **Sorting/Searching** Birthday Reminders
  - **Receiving _Notifications_** from Birthday Reminders
- The use of **Local Storage** for a improved user experience
- **Settings** and **Info** about the user's **Profile**

`<p>Now that i have talked about the Features of the website,i'l talk about the advantages and drawbacks of Birthday Reminder.</p>`

### **_Advantages_**

- **Pretty Fast**(verified using Lighthouse from Dev Tools)
- **Pretty Accessible**(verified using Lighthouse from Dev Tools)
- **Pretty Useful** due to the use of _Push Notifications_
- **Screen Reader Optimized**(verified using Lighthouse from Dev Tools)
- **Easy to navigate**(due to an always present navbar and footer)

### **_Drawbacks_**

- **Doesn't** look **visually appealing**
- **Media Queries** for **Mobile Devices** _aren't fully optimized_(could of done **better**,but still **learned** a lot from this project about **Media Queries**)
- **Might** of _missed_ some **bugs/error handling**
- **Not fully optimized** in terms of when to **send a GET request** for the **Birthday Reminders**

`<p>Well that is kinda is for the advantages and drawbacks for this project,i'l talk a bit about myself and my web development journey so far.</p>`

## 3.**Information** about **myself:**

`<p>This is my first project using the MERN Stack(MongoDB,Express,React,Node).After learning the basics of HTML CSS JS and some other technologies like Bootstrap,and after practicing with smaller only HTML CSS JS projects,i learned React.js from Coding Addict's Youtube Channel(which i recommend since the guy knows how to teach very well),i practiced React.js with a lot of projects(project ideas were took from Coding Addict's video aswell).After a lot of React.js,HTML,CSS,JS practice,i have begun to learn Express and Node(again,from Coding Addict's Youtube Channel).After a lot of headaches understanding the Express and Node tutorial,i moved on to his 4 Express/Node Projects video,which showed him use mongodb with mongoose(and some extra things).I had to practice a lot by making tests myself,then taking them.After learning a lot about Backend/Frontend development and the MERN Stack,i actually got into practicing with Mongodb,Express,React and Node by making this very first project,Birthday Reminder</p>`

## **Mistakes made in development:**

1. Not making **different css files** for **different pages/components**

1. Not using **css variables** to my advantage(**slowed down development** of the website)

1. Not **spliting up** my **bigger components** into **smaller ones**

1. Not **setting up productions builds** at the start of the project

1. Using a **global useEffect**(in this case,it made things kinda **awkward**,making the **functionality** of the whole site not really **flexible**)

1. **Not** making a **scheme/plan** beforehand(this one might actually be the **worst mistake** so far,since it probably **slowed down development** by at least **10%**)

1. **Not styling/structuring** the website to be **easily responsive/adaptive** down the line

## **Stuff i learned/i got better at**

- Developing a **Fullstack Website**
  - Making the **connection** between the **Backend** and **Frontend**
  - Overall got **better** at **Express/Node**
- Handling **sending request** from the **Frontend** to the **Backend** using the library **_axios_**
  -Handling **User Authorization** with the **JWT Token** in _combination_ with the **Authorization header**
- Overall **HTML CSS JS REACT NODE EXPRESS MONGODB MONGOOSE** knowledge and skills

## **Project Map(folder structure)**

```
backend-br
    controllers
        auth.js
        notifications.js
        reminders.js
        testing.js
        users.js
    db
        connect.js
    middleware
        authentication.js
        errorHandler.js
    models
        Reminder.js
        User.js
    routes
        auth.js
        notifications.js
        reminders.js
        testing.js
        users.js
    .env
    .gitignore
    index.js
    package-lock.json
    package.json
    Procfile
frontend-br
    public
        _redirects
        favicon.ico
        index.html
        logo192.png
        logo512.png
        manifest.json
        sw.js
    src
        components
            CreateReminder
                ReminderPreview.js
                ReminderSettings.js
                ReminderTitle.js
            Home
                Content.js
                RemindersExample.js
            Modals
                DeleteRemindersModal.js
                Modal.js
                NotificationsModal.js
                OfflineModal.js
                SortingModal.js
            Navbar
                LoggedIn.js
                NavbarMenu.js
                NavbarSlider.js
                NotLoggedIn.js
            Others
                FormScheme.js
                Loading.js
                Logo.js
            Profile
                ProfileAboutUs.js
                ProfileContactUs.js
                ProfileInfo.js
                ProfileReminders.js
                ProfileSettings.js
                ProfileTitle.js
            Reminders
                NoJWT.js
                NoReminders.js
                NoRemindersFound.js
                ReminderCard.js
                RemindersContent.js
                RemindersOptions.js
                RemindersTitle.js
            Footer.js
            Navbar.js
        pages
            CreateReminder.js
            EditReminder.js
            Home.js
            Login.js
            Profile.js
            Register.js
            Reminders.js
        context.js
        footerSitemap.js
        index.js
        profileMap.js
        styles.css
        swDev.js
        wave.svg
    testing-photos(photos used in testing only)
    .gitignore
    package-lock.json
    package.json
    README.md



```

> Thanks for reading! -me
