import React from 'react';

export default class Card extends React.PureComponent {
   render() {
      return (
         <div className="card-list">
            {
               this.props.cards.map((card, cardIndex) => {
                  return (
                     <div className="card" key={cardIndex}>
                        <div className="card-personName">{card.topicName} </div>
                        <div className="card-description">{card.description}</div>
                        <input type="checkbox" id="checkId"></input>
                     </div>
                  )
               })
            }
         </div>
      )
   }
}
