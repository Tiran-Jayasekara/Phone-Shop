import React from "react";
import './Css/HomePage.css';
import q from '../images/q.jpg';
import mac2 from '../images/mac2.jpg';
import mac3 from '../images/mac3.jpg';
import macair from '../images/macair.jpg';
import mac4 from '../images/mac4.png';
import mi1 from '../images/mi1.png';
import mi2 from '../images/mi2.png';
import iwatch from '../images/iwatch.jpg';
import iwatch2 from '../images/iwatch2.jpg';
import iphone from '../images/iphone.jpg';
import m1 from '../images/m1chip.jpg';
import m2 from '../images/m2chip.jpg';
import Carousel from 'react-bootstrap/Carousel';

const HomePage =()=>{
    return(
        
        <div className="HomePage">
          <div>
            <Carousel>
      <Carousel.Item>
      <img src={q} alt="picture" className="mac"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={mac2} alt="picture" className="mac"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          </div>
            

            <h1 className="Header">Supercharged for pros.</h1>
            <p className="para">
The most powerful MacBook Pro ever is here.<br></br> 
With the blazing-fast M1 Pro or M1 Max chip — <br></br>
the first Apple silicon designed for pros — <br></br>
you get groundbreaking performance and amazing <br></br>
battery life. Add to that a stunning Liquid Retina<br></br> 
XDR display, the best camera and audio ever in a Mac <br></br>
notebook, and all the ports you need. The first notebook<br></br>
 of its kind, this MacBook Pro is a beast.</p>
 
            <h1 className="applewatch">Apple Watch</h1>
            <div className="watch">
            <h6 className="watchpara">Family Setup<br></br>
                <h2>Your family joined<br></br> at the wrist.</h2><br></br>
                  Now family members who don‘t<br></br> have an iPhone can stay in touch<br></br> with Apple Watch.</h6>
            <img src={iwatch} alt="picture" className="iwatch"/>
            <img src={iwatch2} alt="picture" className="iwatch"/>
         

            </div>
            <h1 className="applewatch">iPhone</h1>
            <div className="iphoneflex">

            <img src={iphone} alt="picture" className="iphone"/>
            <h6 className="iphonetext">Family Setup<br></br>
                <h2>Your family joined<br></br> at the wrist.</h2><br></br>
                  Now family members who don‘t<br></br> have an iPhone can stay in touch<br></br> with Apple Watch.</h6>
            </div>   
            <div className="processor">
              <div className="processor2">
              <img src={m1} alt="picture" className="applechip"/>
              <img src={m2} alt="picture" className="applechip"/>

              </div>
              <div className="processortext">
              <p className="chiptext1"><h1>Apple M1 chip</h1><br></br>
                8-core CPU with 4 perform­ance cores <br></br> 4 efficiency cores<br></br>
                7-core GPU<br></br>
                16-core Neural Engine</p>

                <p className="chiptext2"><h1>Apple M2 chip</h1><br></br>
                  8-core CPU with 4 performance cores<br></br> 4 efficiency core<br></br>
                  10-core GPU<br></br>
                  16-core Neural Engine<br></br>
                  100GB/s memory bandwidth</p>

              </div>
              </div> 
              <div className="aboutus">
                <p className="aboutus1"><br></br><br></br>
                1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per<br></br>
                 Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the<br></br>
                 eligible Mac or iPad, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for<br></br>
                 Apple Card Monthly Installment (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option) as payment type at checkout shall<br></br>
                 receive a discount equal to the value of the Apple Gift Card off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the eligible<br></br>
                 iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount charged<br></br>
                 over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be charged for<br></br>
                 the Apple Gift Card in the amount of the applicable discount off the eligible Mac or iPad. ACMI is subject to credit approval and credit limit. Variable APRs for Apple Card othe<br></br>
                 than ACMI range from 12.49% to 23.49% based on creditworthiness. Rates as of July 1, 2022. If you choose the pay‑in‑full or one‑time‑payment option for an ACMI‑eligible<br></br>
                 purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are<br></br>
                 not included in ACMI transactions and are subject to your standard purchase APR. See the Apple Card Customer Agreement at https://www.goldmansachs.com/terms-and-conditions<br></br><br></br>
                 /Apple-Card-Customer-Agreement.pdf<br></br>
                  for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; <br></br>
                  Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.<br></br>
                  Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card.<br></br>
                  This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in‑store promotion offerings may be limited by Apple Store location <br></br>
                  closures as a result of COVID‑19. Additional restrictions apply. View full terms and conditions of offer here.<br></br>
                  To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going <br></br>
                  to Settings  General  Software Update. Tap Download and Install.<br></br><br></br>
                  Available for qualifying applicants in the United States.<br></br>
                  Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.<br></br><br></br>
                  Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.<br></br>
                  Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.<br></br>
                </p>
              </div>
              
              
         

            
            
        </div>
    );
}
export default HomePage;
