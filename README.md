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
