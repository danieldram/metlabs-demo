# Notes

We encourage you to drop some notes in this file. Explain your thoughts, where/why you got stuck, or what you would have done given more time.

#Fix the Launch:
After I ran npm install, seems the application failed to launch on "npm start", 
I began reading the package.json to see what scripts are used to launch and test the application. 
I see that I can run npm run local. I run the command.
The launch seems to fail.
I opened the console and read more information regarding the error. 
It seems it cannot locate react-redux, so it seems react is the framework being used and redux is being hooked up.
I am now reading through the package.json to see more about the dependencies and other libs used here. 
I install the missing dependancy - npm install react-redux
After relaunching, the console reads that an unexpected token exists in the Home.js. 
in my editor I do a search for file Home.js


I read the import statements in Home.js 
first thing I notice is the import * from React. 
This seems odd as I haven't seen this in many apps, but the compiler isn't complaining about that so I leave it as is. 
The compiler says like 89 has the issue, investigating. 

From the looks of it, it seems there is an extra bracket.
I confirm this by the color coding in my IDE.
the IDE also complains that this is an extra bracket.
I remove the bracket and the appplication launches correctly. 

There is now a GET request error in obtaining data from the /pokemon endpoint.
It seems there is a promise error in Home.js, investigating by following the code. 

fetchPokemon is a dispatch mapped to props. 
Looking into actions first. 

It looks like there is an environment variable API_ROOT which is the host endpoint.
I do a global search to find more information on API_ROOT.
It seems in dev build. the API root hits a server, where in local, it uses localhost.
Because I myself don't have a local API for pokemon, I change the local build of API_ROOT to use dev endpoint. 
I then restart the local build and all the pokemon show up. 

#Fix The Styling
I read the doc about matching styles. 
I then go to the app in the browser, and select view elements to see the structure of the DOM to get some context. 

the first thing I want to do is center the content in each individual pokemon box to match the mock. 
I see in the DOM that the css grid-template is used, so I do a global search for the component that is using it. 
I then aedd justify-items: center to the css, this aligns the items in the box in the center. 
the next step is to align the text in the box in the center. 
I test that in the browser that selecting the parent dom element containing the img and text wil align correctly in text-align: center;
it does. 
I now search for the component that has padding:10px, which is most likeley the containing component. 
The Card component is one of the results, this is likely the area to edit.
I add text-align:center, and it solves the problem of needing centered text. 

I noticed the card container is not the full width of the grid item,
so I give the container a width of 100%; 
this off centers, the image.
I look at the style of image and notice no margin:auto to center it,
So I add it to center it and it is now centered. 

The visual matches the mock now.


#Fix The Search
Upon looking at the algorithm used for filtering search, I open the app and try to search.
I was shocked that the state it mutated!
I look to see how the search was done, it seems there is a regex expression.
I modify the regex expression to look for strings that start with the expression (/^term/)
I then run the filter when the props is mapped in the render method.
I then change the functionality of onSearch to persist a regexTerm to state. 
I then use that term off the state to filter the results. 
The search seems to function correctly now.


#API
I hooked up the API as expected using redux and actions.
I then queried the API.
I then set the reducer and actions to have an isFetching prop
I linked up the DetailsPopover to redux and mapped actions.
I then make the calls and set the isFetching between the calls to show the loading. 









