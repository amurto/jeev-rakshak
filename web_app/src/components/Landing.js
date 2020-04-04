import React from 'react';
import Header from './Header';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <Header />
          <div className="intro-section custom-owl-carousel" id="home-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mr-auto" data-aos="fade-up">
                  <div className="owl-carousel slide-one-item-alt-text">
                    
                    <div className="slide-text">
                      <h1>Jeev Rakshak</h1>
                      <p className="mb-5">Jeev Rakshak is a wildlife species identification and offence registration web app.<br/>The web app takes an image as an input and passes this image to the MobileNet+SSD model and the model returns that image with bounding boxes around the identified animals along with their probable species.</p>
                      <p><a href="/#" target="_blank" className="btn btn-outline-light py-3 px-5">Try Now</a></p>
                    </div>
                    
                    <div className="slide-text">
                      <h1>MobileNets?</h1>
                      <p className="mb-5">MobileNets are a family of mobile-first computer vision models for TensorFlow, designed to effectively maximize accuracy while being mindful of the restricted resources for an on-device or embedded application.<br/>MobileNets are small, low-latency, low-power models parameterized to meet the resource constraints of a variety of use cases.<br/>They can be built upon for classification, detection, embeddings and segmentation.</p>
                    </div>

                    <div className="slide-text">
                      <h1>SSD?</h1>
                      <p className="mb-5">SSD (Single Shot Detector) uses many of the same ideas as YOLO but works even better as it combines predictions across multiple feature maps at different sizes.<br/>SSD is designed to be independent of the base network, and so it can run on top of pretty much anything, including MobileNet.</p>
                    </div>

                    <div className="slide-text">
                      <h1>MobileNet-SSD?</h1>
                      <p className="mb-5">MobileNet+SSD uses a variant called SSDLite that uses depthwise separable layers instead of regular convolutions for the object detection portion of the network.<br/>With SSDLite on top of MobileNet, you can easily get truly real-time results (i.e. 30 FPS or more).</p>
                    </div>
                  
                  </div>
                </div>

                <div className="col-lg-6 ml-auto"  data-aos="fade-up" data-aos-delay="100">
                              
                  <div className="owl-carousel slide-one-item-alt">
                    <img src="imgs/JeevRakshak.png" alt="JeevRakshak" className="img-fluid"/>
                    <img src="imgs/MobileNet.png" alt="MobileNet" className="img-fluid"/>
                    <img src="imgs/SSD.png" alt="SSD" className="img-fluid"/>
                    <img src="imgs/MobileNetSSD.png" alt="MobileNet-SSD" className="img-fluid"/>
                  </div>

                  <div className="owl-custom-direction">
                    <a href="/#" className="custom-prev"><span className="icon-keyboard_arrow_left"></span></a>
                    <a href="/#" className="custom-next"><span className="icon-keyboard_arrow_right"></span></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/>

          <div className="site-section section-1">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-5 mr-auto mb-5">
                  <img src="imgs/Species-Identification.png" alt="Jeev Rakshak" className="img-fluid"/>
                </div>
                
                <div className="col-lg-5 mr-auto mb-5"  data-aos="fade-up">
                  <div className="mb-5">
                    <h2 className="section-title">Jeev Rakshak</h2>
                    <p>Jeev Rakshak is a wildlife species identification and offence registration web app.<br/>The web app takes an image as an input and passes this image to the MobileNet+SSD model and the model returns that image with bounding boxes around the identified animals along with their probable species.</p>
                    <ul className="ul-check list-unstyled success">
                      <li>Ease Of Use</li>
                      <li>Saves Manual Labour</li>
                      <li>Brilliant Accuracy</li>
                      <li>Fully Automatic Animal Spotting System</li>
                      <li>Species Identification</li>
                      <li>Offence Registration</li>
                    </ul>  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-dark" id="features-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Features</h2>
                </div>
              </div>
            </div>
              
            <div className="owl-carousel nonloop-block-14">

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/ease-of-use.png" alt="Ease-Of-Use-Icon" height="60px" width="60px"/></span>
                  <h3>Ease Of Use</h3>
                  <p>Simple, elegant and mobile-compatible interface.<br/><br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/saves-manual-labour.png" alt="Saves-Manual-Labour-Icon" height="60px" width="60px"/></span>
                  <h3>Saves Manual Labour</h3>
                  <p>It saves a tremendous amount of time for biology researchers and the human volunteers that help by labeling images.<br/>Thus it dramatically reduces the cost to gather valuable information from wild habitats.</p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/accuracy.png" alt="Accuracy-Icon" height="60px" width="60px"/></span>
                  <h3>Brilliant Accuracy</h3>
                  <p>It identifies animals in the input images and gives results with bounding boxes with an accuracy of 96%.<br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/animal-spotting.png" alt="Fully-Automatic-Animal-Spotting-System-Icon" height="60px" width="60px"/></span>
                  <h3>Fully Automatic Animal Spotting System</h3>
                  <p>It can automatically identify species of animals in the input images and can easily give truly real-time results.<br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/species-identification.png" alt="Species-Identification-Icon" height="60px" width="60px"/></span>
                  <h3>Species identification</h3>
                  <p>Bounding box species identification of the input image for 11 species that include Butterfly, Elephant, Tiger, Lion, Horse, Panda, Bear, Monkey, Dog, Deer and Human.<br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src="icons/offence-registration.png" alt="Offence-Registration-Icon" height="60px" width="60px"/></span>
                  <h3>Offence Registration</h3>
                  <p>Users can register offences towards animals by uploading an image or the geo-location or both.<br/><br/><br/><br/></p>
                </div>
              </div>

            </div>
          </div>

          <div className="site-section" id="contact-section"  data-aos="fade">
        <div className="container">

          <div className="row align-items-center">
            
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <img src="imgs/Contact2.png" alt="Contact" className="img-fluid"/>
            </div>
            
            <div className="col-md-6 mr-auto order-2 order-md-1">  
              <h2 className="section-title mb-3">Contact Us</h2>
              <p className="mb-5">You can email us at jeevrakshak@gmail.com<br/>Your email isn't going to the inbox abyss, never to be seen or heard from again.<br/>At Jeev Rakshak, we provide the exceptional service we'd want to experience ourselves!</p>
            </div>
          </div>
        </div>
      </div>
          
          <footer className="footer-section bg-dark">
            <div className="container">
              <div className="row">
                
                <div className="col-md-4">
                  <h3>About Us</h3>
                  <p>We are a team of programmers from Mira Road, Mumbai.</p>
                </div>

                <div className="col-md-3 ml-auto">
                  <h3>Links</h3>
                  <ul className="list-unstyled footer-links">
                    <li><a href="#home-section" className="smoothscroll">Home</a></li>
                    <li><a href="#features-section" className="smoothscroll">Features</a></li>
                    <li><a href="#contact-section" className="smoothscroll">Contact</a></li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h3>Subscribe</h3>
                  <p>Subscribe and get a special 10% discount on your first purchase!<br/>To subscribe, email us with "Subscribe" as the subject.</p>
                </div>
              
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Landing;