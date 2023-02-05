import './Contact.scss';

const Contact = () => {
    return (
        <section id='contact' className='contact p-page'>
            <form className='contact-form'>
                <div className="info">
                    <h2>contact</h2>
                    <hr />
                    <span>tel: 123-456-7890 / info:thuchuynh9711@gmail..com<br />
                        500 terry francois st. san francisco, ca 94158<br />
                        opening hours 8:00am-9:00pm
                    </span>
                </div>
                <div className="user-contact">
                    <input type="text" placeholder='Name' required />
                    <textarea placeholder='Message' required />
                    <input type="email" placeholder='Email' required />
                    <input type="text" placeholder='Subject' required />
                    <button type='submit' className='btn-black btn-form' >Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;