import React from 'react'

function Emoji({category}) {
    const categoryEmojis = { 
        "Housing" : "🏠",
        "Transportation" : "🚉",
        "Food and Drinks" : "🍴",
        "Health": "💉",
        "Entertainment" : "🎠",
        "Personal" : "🎁"
                 }
    
  return (
    <span
        className="emoji"
        role="img"
        aria-label={category}
    >
        {categoryEmojis[category]}
    </span>
);
}

export default Emoji
