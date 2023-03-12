import { useState } from 'react';
import './Form.modules.scss'

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    function cadastrarUsuario(e) {
        e.preventDefault()
        if (firstName && lastName && email && password) {
            console.log (`O Usuário foi cadastrado com os seguintes dados:
                First Name:${firstName};
                Last Name:${lastName};
                Email:${email};
                Password:${password}
            `)
        } else {
            setFormSubmitted(true)
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className={!firstName && formSubmitted ? 'messageError' : ''}
                    />
                    {!firstName && formSubmitted && <div className='Error'><p>Please fill in the first name correctly</p></div>}

                    <input  
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className={!lastName && formSubmitted ? 'messageError' : 'inputValid'}
                    />
                    {formSubmitted && lastName === '' && <div className="Error"><p>Please fill in the last name correctly.</p></div>}

                    <input  
                    type="email"
                    name="email" 
                    placeholder="Email Address" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={!email && formSubmitted ? 'messageError' : 'inputValid'}
                    />
                    {formSubmitted && email === '' && <div className="Error"><p>Please fill in the email address correctly.</p></div>}
                    
                    <input  
                    type="password" 
                    name="password"
                    minLength={8}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={!password && formSubmitted ? 'messageError' : 'inputValid'}
                    />
                    {formSubmitted && password === '' && <div className="Error"><p>Please fill in the password correctly.</p></div>}

                    <input type="submit" value="CLAIM YOUR FREE TRIAL" />

                </form>

                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>

            </div>
        
        </>
    );
}

export default Form;
