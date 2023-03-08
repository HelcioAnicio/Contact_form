import './Form.modules.scss'


function Form() {

    return (
        <>
            <div className="DivForm">
                <form >

                    <input required type="text" value="" name="FirstName"  placeholder="First Name" />
                    
                    <input required type="text" value="" name="LastName" placeholder="Last Name" />
                    
                    <input required type="email" value="" name="Email" placeholder="Email Address" />
                    
                    <input required type="password" value="" name="Password" placeholder="Password" />

                    <input type="submit" value="CLAIM YOUR FREE TRIAL" />

                </form>

                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>

            </div>
        
        </>
    );
}

export default Form;