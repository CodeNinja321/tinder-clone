import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: 'Steve Jobs',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
        },
        {
        name: 'Mark Zuckerberg',
        url: 'https://vvazw1o18pf4bhdd434btzh7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01-1.jpg'
        },
    ]);
    //const people = [];

    return (
        <div>
            <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard 
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }} 
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
