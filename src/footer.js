import './App.css';

function Footer(){

    const scrollToTop = ()=>{
       window.scrollTo({
         top:0,
         behavior: 'smooth'
       })
    }
    return (
       <footer className="footer">
           <section className="contact-info">
                 <h2>Contact Us</h2>
                 <p>Email: sule47seid@gmail.com</p>
                 <p>Phone: 123-456-7890</p>
                 <p>Address: 123 Street, Tacoma, WA</p>
           </section>
           <section>
            <button className="scroll-to-top-btn" onClick={scrollToTop}>Back To Top</button>
           </section>
           <section className="social-media">
                 <h2>Follow Us</h2>
                 <ul>
                     <li><a href="#">Facebook</a></li>
                     <li><a href="#">Twitter</a></li>
                     <li><a href="#">Instagram</a></li>
                 </ul>
             </section>
           <section>
             <div className="additional-info">
                 <h2>Additional Information</h2>
                 <p>Hours of Operation: Monday - Friday, 9am - 5pm</p>
                 <p>Emergency Contact: 123-456-7890</p>
             </div>
           </section>
           <section>
             <div className="terms">
                 <h2>Terms and Conditions</h2>
                 <p>By using this website, you agree to our terms and conditions.</p>
             </div>
           </section>
           <section>
             <div className="privacy-policy">
                 <h2>Privacy Policy</h2>
                 <p>We value your privacy. Read our privacy policy to learn more.</p>
             </div>
           </section>
       </footer>
    );
}

export default Footer;