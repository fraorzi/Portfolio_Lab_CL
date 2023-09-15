import React, { useState } from 'react';
import DecorationImg from '../../assets/Decoration.svg';
import categoriesData from '../Data/Data';

function WhoWeHelpSection() {
    const [selectedCategory, setSelectedCategory] = useState('fundations');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    }

    if (!categoriesData[selectedCategory] || !categoriesData[selectedCategory].items) {
        return <div>Brak danych dla wybranej kategorii</div>;
    }

    const currentCategoryData = categoriesData[selectedCategory];
    const totalPages = Math.ceil(currentCategoryData.items.length / itemsPerPage); // Calculate total pages for the selected category

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return currentCategoryData.items.slice(startIndex, startIndex + itemsPerPage);
    }

    return (
        <div id="who-we-help-section" className="who-we-help-section">
            <h2>Komu pomagamy?</h2>
            <img src={DecorationImg} alt="Decoration" className="decoration" />

            <div className="categories-buttons">
                <button onClick={() => handleCategoryChange("fundations")}>Fundacjom</button>
                <button onClick={() => handleCategoryChange("organizations")}>Organizacjom pozarządowym</button>
                <button onClick={() => handleCategoryChange("local")}>Lokalnym zbiórkom</button>
            </div>

            <p className="category-description">{currentCategoryData.description}</p>

            <div className="category-items">
                {getCurrentPageItems().map(item => (
                    <div className="category-item" key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>{item.tags}</span>
                    </div>
                ))}
            </div>

            <div className="pagination-controls">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default WhoWeHelpSection;
