// src/App.tsx
const welcome = {
greeting: 'Hey',
title: 'React',
}

function getTitle(title) {
return title;
}
const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {
return number * number;
});
//variable list is an array of objects
//each object has properties like title, url, author, num_comments, points, objectID
//we will use this list to display in the UI
//we will also use this list to demonstrate how to use keys in React
//keys are used to identify which items have changed, are added, or are removed
const list = [
{
title: 'React',
url: 'https://reactjs.org/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://redux.js.org/',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];

// App component is the main component of the application
function App() {
  const title = 'React';

return (
<div>
<h1>Hello React</h1>
<h2>const value we are using -- {title}</h2>

<h1>this is we accessing object value-- {welcome.greeting} {welcome.title}</h1>

<h1>we are using function getTitle {getTitle('react')}</h1>
{/* 
<label htmlFor="search">Search: </label>
<input id="search" type="text" /> */}

<h2>Exponential Numbers: {exponentialNumbers.join(', ')}</h2>




<p>list coming from datalist component</p>
<DataList />

<hr />

<p>Search boc coming from search componet</p>
<Search />

{/* <ul>
{list.map(function (item) {
return <li>{item.title}</li>;
})}

</ul> */}
{/* <h3> key added for list</h3>
<ul>
  {list.map(function (item) {
    return (<li key={item.objectID}>{item.title}</li>);
  })}
</ul> */}
    {/* <label htmlFor="search">Search: </label>
    <input id="search" type="text" /> */}
</div>
);
}



//adding datalist component to the App component
// const DataList = () =>
function DataList() {
return (
<ul>
{list.map(function (item) {
return (
<li key={item.objectID}>
<span>
<a href={item.url}>{item.title}</a>
</span>
<span>{item.author}</span>
<span>{item.num_comments}</span>
<span>{item.points}</span>
</li>
);
})}
</ul>
);
}

//adding search component to the App component

function Search() {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Log the event to the console
  // This will help you see the changes as you type
  console.log(event);
  // Log the value of the input field to the console
  // This will help you see the changes as you type
console.log(event.target.value);
};
// This function will handle the search input changes
// and log the value to the console
// You can replace this with your search logic    

return (
<div>
<label htmlFor="search">Search: </label>
<input id="search" type="text" onChange={handleChange} /> 
</div>
);
}

export default App;
