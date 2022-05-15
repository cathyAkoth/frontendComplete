import React, { useState } from "react";
import {
  Card,
  Content,
  Icon,
  PlanTitle,
  PlanContainer,
  PlanCost,
  Price,
  FeatureListItem,
  ActionButton,
  BackgroundSquare,
} from "./PriceCardCSS";
import "./../../../../../assets/css/icofont.min.css";

export default function PriceCard({ price, type }) {
  const [features] = useState([
    "Hire from Home",
    "No Hidded or Extra Fees",
    "Training and Insurance",
  ]);

  // const terms = [
  //   {
  //     id: 1,
  //     item: "Hire from Home"
  //   },
  //   {
  //     id: 2,
  //     item: "No Hidden or Extra Fees"
  //   },
  //   {
  //     id: 3,
  //     item: "Training and Insurance"
  //   },
  //   {
  //     id: 4,
  //     item: "Medical Checkup"
  //   }
  // ]

  return (
    <div>
      <Card>
        <BackgroundSquare />
        <Content>
          <Icon className="icofont-paper-plane" />
          <PlanTitle>{type}</PlanTitle>
          <PlanContainer>
            $
            <PlanCost>
              <Price>{price}</Price>
            </PlanCost>
            /candidate
          </PlanContainer>
          {features.map((item) => (
            <FeatureListItem>
              <i className="icofont-check" />
              <span>{item}</span>
            </FeatureListItem>
          ))}
          <ActionButton>Choose This Plan</ActionButton>
        </Content>
      </Card>
    </div>
    // <div className='price-card'>
    //         <div className='price-wrapper'>
    //           $<span className='price'>{price}</span>/month
    //         </div>
    //         <button className='type'>{type} Plan</button>
    //         <div className='list'>
    //           <ul>

    //              {
    //                terms.map((term) => (
    //                 <li key={term.id} className="list-item">{term.item}</li>
    //                ))
    //              }
    /* <li className="list-item">Hire from Home</li>
                  <li className="list-item">No Hidden or Extra Fees</li>
                  <li className="list-item">Training and Insurance</li>
                  <li className="list-item">Medical Checkup</li> */
    //           </ul>
    //         </div>
    //         <button className='price-btn'>Choose This Package</button>

    // </div>
  );
}
