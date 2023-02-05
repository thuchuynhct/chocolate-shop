import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <form action="" className='footer-form'>
                <h4>OIN OUR MAILING LIST</h4>
                <div className="subscribe">
                    <input type="email" required />
                    <button className='btn-subscribe'>Subscribe Now</button>
                </div>
            </form>
            <p>©2023 by BAISERS DE CHOCOLAT. Powered and secured by Thuc Huynh</p>
        </footer>
    )
}

export default Footer;