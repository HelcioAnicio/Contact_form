# Contact_Form

This website was a work which i wanted to practice more my skill with JS. I used for firsttime React.JS and i put all of this thnigs on this project. It's possible to interect by filling out the form. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The users should be able to:
- To fill in 4 text fields.
- To send the dates to date bank.
- Replied in a personalized way the fields
- View the optimal layout depending on their device's screen size.

### Screenshot
![image](https://user-images.githubusercontent.com/117602073/230380781-9c91da53-e26e-4c9c-8ad6-f338b3e10c2c.png)


### Links

- https://contact-form-helcioanicio.vercel.app/

## My process

### Built with

- Semantic HTML5
- SCSS
- SCSS scops and variables.
- Flexbox
- Responsiveness
- Pseudo-classes
- JavaScript
- Repeat loop
- Conditional
- Metods
- React
- Components
- Ternary conditional
- UseState

### What I learned

How to use ternary conditional, all the conditional on react, and declare variables with useState.

Code HTML on React.
```Js 
<input  
type="text"
name="firstName"
placeholder="First Name"
onChange={(e) => setFirstName(e.target.value)}
value={firstName}
className={!firstName && formSubmitted ? 'messageError' : ''}
/>
{!firstName && formSubmitted && <div className='Error'><p>Please fill in the first name correctly</p></div>}
```

```JS
const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    async function cadastrarUsuario(e) {
        e.preventDefault();
        if (firstName && lastName && email && password) {
            console.log(`O Usuário foi cadastrado com os seguintes dados:
                First Name:${firstName};
                Last Name:${lastName};
                Email:${email};
                Password:${password}
            `);
    
            try {
                const user = await addDoc(userCollectionRef, {
                    firstName,
                    lastName,
                    email,
                    password,
                });
                console.log("Usuário cadastrado no Firebase:", user.id);
            } catch (error) {
                console.error("Erro ao cadastrar usuário no Firebase:", error);
            }
    
        } else {
            setFormSubmitted(true);
        }
    }
```

### Continued development

Next project i will make a personal project.

### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/


## Author

- Linkedin - https://www.linkedin.com/in/helcio-anicio/ 
- Vercel - https://vercel.com/helcioanicio

<!--
## Acknowledgments
 -->

# Building your project

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
<<<<<<< HEAD
=======

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
>>>>>>> e915a1fe57edbfa02af8bd674d9c4bd82fab5aa8
