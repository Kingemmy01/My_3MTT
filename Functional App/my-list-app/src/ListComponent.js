import React from 'react';

function ListComponent ({ items, renderItem }) {
    if (! items || items.length === 0) {
        return <p> No item to display.</p>
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );

}

export default ListComponent;