import React, { useEffect } from 'react';
import './footer.css'; // Import your CSS

const Footer = () => {
  useEffect(() => {
    // Add your effect logic if any
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="f-div-0">
              <h3>About</h3>
              <p>Scanfcode.com <i>CODE WANTS TO BE SIMPLE</i> is an initiative to help upcoming programmers with code. Scanfcode focuses on providing the most efficient code or snippets. We will help programmers build concepts in different programming languages including C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithm.</p>
            </div>

            <div className="f-div-1">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>

            <div className="f-div-2">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="footer-bottom-left">
              <p className="copyright-text">&copy; 2024 BrainBlox. All Rights Reserved. X Somnath Paul</p>
            </div>

            <div className="footer-bottom-right">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; // Make sure to export it
