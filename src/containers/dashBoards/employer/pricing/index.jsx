import './pricing.css';
import PriceCard from './priceCard';
import HowWorks from './howWorks';

export default function Pricing() {
  return (
    <>
        <div className="pricing section__padding">
            <div className="mkz__price-header">
                <h1>Choose a Hiring Package</h1>
                <p>And enjoy the features that suit you!</p>    
            </div>
            <div className="mkz__pricing-cards">
                <PriceCard price="50" type="Basic" />
                <PriceCard price="80" type="Family" />
                <PriceCard price="100" type="Partner" />
            </div>
            <div className="mkz__price-header">
                <h1>Our team processes the contract, documents and visa for you!</h1>
                <p><strong>No need to come to our office</strong>, we deliver all the 
                    documents to you directly.</p> 
                <p>We also include<strong> 1 year insurance and training</strong>.</p>   
            </div>
            <HowWorks />
            {/* <div className="mkz__how-work-wrapper">
                <h1>How Does It Work</h1>
                <p><strong>No need to come to our office</strong>, we deliver all the 
                    documents to you directly.</p> 
                <p>We also include<strong> 1 year insurance and training</strong>.</p>   
            </div> */}
        </div>
        
    </>
  )
}
