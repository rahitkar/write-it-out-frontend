import React from 'react';

export default (props) => {
  const categories = [
    'Inspiration',
    'Letter',
    'Life',
    'Love',
    'One-liner',
    'Philosophy',
    'Poetry',
    'Politics',
    'Short-story',
  ];

  const handleClick = (event) => props.onClick(categories[+event.target.id]);

  const catagoriesComponent = categories.map((category, indx) => {
    const indicateClass =
      category === props.selectedCategory ? 'indicateCategory' : '';
    return (
      <div className={indicateClass} onClick={handleClick} id={indx} key={indx}>
        {category}
      </div>
    );
  });

  return (
    <div>
      <span className='tag'>Add a tag...</span>
      <div className='categories'>{catagoriesComponent}</div>
    </div>
  );
};
