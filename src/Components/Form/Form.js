import './Form.modules.scss'
import { useState } from 'react';

function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const cadastrarUsuario = (e) => {
        e.preventDefault()

        // Verifica se todos os campos foram preenchidos corretamente
        if (firstName && lastName && email && password.length >= 8) {
            console.log(`O Usuário foi cadastrado com os seguintes dados:
                First Name:${firstName};
                Last Name:${lastName};
                Email:${email};
                Password:${password}
            `)
            setFormValid(true)
        } else {
            setFormSubmitted(true)
            setFormValid(false)
        }
    }

    return (
        <>
            <div className="DivForm">
                <form onSubmit={cadastrarUsuario}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleFirstName}
                        value={firstName}
                    />
                    {formSubmitted && firstName === '' && <input className= {styles.messageError} />}
                    {formSubmitted && firstName === '' && <div className="Error"><p>Please fill in the first name correctly.</p></div>}

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleLastName}
                        value={lastName}
                    />
                    {formValid === false && lastName === '' ? <div className="Error"><p>Please fill in the last name correctly.</p></div> : null}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleEmail}
                        value={email}
                    />
                    {formValid === false && email === '' ? <div className="Error"><p>Please fill in the email address correctly.</p></div> : null}

                    <input
                        type="password"
                        name="password"
                        minLength={8}
                        placeholder="Password"
                        onChange={handlePassword}
                        value={password}
                    />
                    {formValid === false && password.length < 8 ? <div className="Error"><p>Please fill in the password correctly. It should have at least 8 characters.</p></div> : null}

                    <input type="submit" value="CLAIM YOUR FREE TRIAL" />

                </form>

                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>

            </div>

        </>
    );
}

export default Form;
