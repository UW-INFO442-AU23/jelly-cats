import React, { useEffect, useState } from "react";

export default function EventCard(props) {

    return (
        <div className="flex w-[600px] bg-indigo-500 h-[225px] justify-center p-5">
                <div id="imgPlaceholder" className="m-2 bg-gray-500 w-44 h-44"></div>
        </div>
    )
}

// IGNORE THIS USING FOR LATER
// {recipes.map(recipe => (
//     <GridSuggestion key={recipe.id} recipe={recipe.title} img={recipe.overviewImg} />
// ))}