# **Birthday Reminder - MERN Stack Project**

My very first MERN fullstack built.Learned a lot from working on this project since it is my first big project.

## **Description**

My very first MERN fullstack built.Learned a lot from working on this project since it is my first big project.The project revolves around the idea of creating reminder cards for people in order to be notified on their birthday's. In order to create those reminders, you need to sign up / log in.

## **Getting Started**

### Dependencies

- Check package.json for details
- Rename .env.sample to .env and place your respective env variables

### Installing

```
git clone https://github.com/axense234/Birthday-Reminder-MERN.git
cd Birthday-Reminder-Mern
npm install
```

### Executing program

```
npm test
```

## **General info**

`<p>Birthday Reminder is a MERN Stack project where you can be reminded of your relatives/friends birthdays by making a reminder of their birthdays!</p>`

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

`<p>Now that i have talked about the features of the website,
i will talk about the advantages and drawbacks of the website.</p>`

### **_Advantages_**

- **Pretty Fast**(verified using Lighthouse from Dev Tools)
- **Pretty Accessible**(verified using Lighthouse from Dev Tools)
- **Pretty Useful** due to the use of _Push Notifications_
- **Screen Reader Optimized**(verified using Lighthouse from Dev Tools)
- **Easy to navigate**(due to an always present navbar and footer)

### **_Drawbacks_**

- **Media Queries** for **Mobile Devices** _aren't fully optimized_(could of done **better**,but still **learned** a lot from this project about **Media Queries**)
- **Might** of _missed_ some **bugs/error handling**
- **Not fully optimized** in terms of when to **send a GET request** for the **Birthday Reminders**

`<p>Well that is kinda is for the advantages and drawbacks for this project,i will talk a bit about myself and my web development journey so far.</p>`

## **Personal info**

`<p>This is my first project using the MERN Stack(MongoDB,Express,React,Node). After learning the basics of HTML CSS JS and some other technologies like Bootstrap and after practicing with smaller only HTML CSS JS projects, i learned React.js from Coding Addict's Youtube Channel(which i recommend since the guy knows how to teach very well), i practiced React.js with a lot of projects(project ideas were taken from Coding Addict's video aswell). After a lot of React.js, HTML, CSS, JS practice i have begun to learn Express and Node(again, from Coding Addict's Youtube Channel). After a lot of headaches understanding the Express and Node tutorial, i moved on to his 4 Express/Node Projects video, which showed him using mongodb with mongoose(and some extra things). I had to practice a lot by making tests myself, then taking them.After learning a lot about Backend/Frontend development and the MERN Stack, i actually got into practicing with Mongodb, Express, React and Node by making this very first project, Birthday Reminder</p>`

# Generate a private key

openssl ecparam -name prime256v1 -genkey -noout -out vapid-private.pem

# Derive the public key from the private key

openssl ec -in vapid-private.pem -pubout -out vapid-public.pem

## **Mistakes made in development:**

1. Not making **different css files** for **different pages/components**

1. Not using **css variables** to my advantage(**slowed down development** of the website)(resolved a bit after refactoring)

1. Not **spliting up** my **bigger components** into **smaller ones**

1. Not **setting up productions builds** at the start of the project

1. Using a **global useEffect**(in this case,it made things kinda **awkward**,making the **functionality** of the whole site not really **flexible**)

1. **Not** making a **scheme/plan** beforehand(this one might actually be the **worst mistake** so far, since it probably **slowed down development** by at least **25%**)

1. **Not styling/structuring** the website to be **easily responsive/adaptive** down the line

## **Stuff i learned/i got better at**

- Developing a **Fullstack Website**
  - Making the **connection** between the **Backend** and **Frontend**
  - Overall got **better** at **Express/Node**
- Handling **sending request** from the **Frontend** to the **Backend** using the library **_axios_**
- Handling **User Authorization** with the **JWT Token** in _combination_ with the **Authorization header**
- Overall **HTML CSS JS REACT NODE EXPRESS MONGODB MONGOOSE** knowledge and skills

## **Version History**

- 1.1.0
  - Second version of the website after refactoring it. I changed some comments but mainly changed how the website looks since i wanted to do that for a long time.
- 1.0.0
  - First version of the website
  - See [commit change](https://github.com/axense234/Birthday-Reminder-MERN/commits/master) or See [release history](https://github.com/axense234/Birthday-Reminder-MERN/releases)
- 1.0.0
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

> Thanks for reading! - me
