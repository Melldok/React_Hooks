
import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {
        
        // Case sensitive array validation

        const isContained = categories.some(category => {
            return category.toLowerCase() === newCategory.toLowerCase();
          });

        if(isContained) return;
       
        setCategories([...categories, newCategory])

    }

    


  return (
    <>
        {/* Title */}
        <h1>GifApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
        {/* Gif Listing */}
        <ol>
            {
            categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))
            }
        </ol>
            {/* Gif item */}
    </>
  )
}
