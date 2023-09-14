import React, { useState } from 'react';
import DecorationImg from '../../assets/Decoration.svg';

function WhoWeHelpSection() {
    const [selectedCategory, setSelectedCategory] = useState('fundations');

    const categoriesData = {
        fundations: {
            title: 'Fundacjom',
            description: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            items: [
                {
                    name: 'Fundacja “Dbam o Zdrowie”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                    tags: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    name: 'Fundacja “Dla dzieci”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    tags: 'ubrania, meble, zabawki'
                },
                {
                    name: 'Fundacja “Bez domu”',
                    description: 'Cel i misja: Pomoc dla osób bezdomnych.',
                    tags: 'jedzenie, ciepłe ubrania'
                },


            ],
            totalPages: 3
        },
        organizations: {
            title: 'Organizacjom pozarządowym',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            items: [
                {
                    name: 'Organizacja “Lorem Ipsum 1”',
                    description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    tags: 'Egestas, sed, tempus'
                },
                {
                    name: 'Organizacja “Lorem Ipsum 2”',
                    description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                    tags: 'Ut, aliquam, purus, sit, amet'
                },
                {
                    name: 'Organizacja “Lorem Ipsum 3”',
                    description: 'Scelerisque in dictum non consectetur a erat nam.',
                    tags: 'Mi, quis, hendrerit, dolor'
                },

            ],
            totalPages: 2
        },
        local: {
            title: 'Lokalnym zbiórkom',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            items: [
                {
                    name: 'Zbiórka “Lorem Ipsum 1”',
                    description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    tags: 'Egestas, sed, tempus'
                },
                {
                    name: 'Zbiórka “Lorem Ipsum 2”',
                    description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                    tags: 'Ut, aliquam, purus, sit, amet'
                },
                {
                    name: 'Zbiórka “Lorem Ipsum 3”',
                    description: 'Scelerisque in dictum non consectetur a erat nam.',
                    tags: 'Mi, quis, hendrerit, dolor'
                },


            ],
            totalPages: 1
        }
    };

    const currentCategoryData = categoriesData[selectedCategory];

    return (
        <div id="who-we-help-section" className="who-we-help-section">
            <h2>Komu pomagamy?</h2>
            <img src={DecorationImg} alt="Decoration" className="decoration" />

            <div className="categories-buttons">
                <button onClick={() => setSelectedCategory('fundations')}>Fundacjom</button>
                <button onClick={() => setSelectedCategory('organizations')}>Organizacjom pozarządowym</button>
                <button onClick={() => setSelectedCategory('local')}>Lokalnym zbiórkom</button>
            </div>

            <p className="category-description">{currentCategoryData.description}</p>

            <div className="category-items">
                {currentCategoryData.items.map(item => (
                    <div className="category-item" key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>{item.tags}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhoWeHelpSection;
