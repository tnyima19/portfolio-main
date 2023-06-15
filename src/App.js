import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';


function App() {
  return (
    <div className="container-fluid border mx-auto text-center">
      <h1>Tenzing Nyima</h1>
      <h3>Hunter College Expected Graduation (Spring 2024)</h3>
      <h4>Computer Science and Creative Writing Major</h4>
      <h3><a class="link-opacity-10-hover" href="https://github.com/tnyima19">Github</a></h3>
      <h3></h3>
      <h1>Portfolio</h1>
      

       
      
      <h2>Projects</h2>
      <div class="col">
        <div class="row">
      <h3><a class="link-opacity-10-hover" href="https://tnyima19.github.io/Website-Business-Success-calc/">Calculate Success chance of Business (Started May 2023)</a></h3>
      <ul>
        <li>Conducted a comprehensive analysis of all legally operating businesses in NYC, using data 
          cleaning techniques to prepare the data for machine learning.
        </li>
        <li>Applied variety of machine learing algorithms, inclusing Lasso Regression, RAndom Forest, Naive Bayes, to predict success of 
          each business.
        </li>
        <li>Achieved accuracy reates ranging from 60% -73% by fine-tuning the algorithms and feature selection.</li>
        <li>Developed a user-friendly website usign React and Bootstrap, which allowed users to view analysis results and visual diagrams and provide insights 
          into the factors that influenced success rate.
        </li>
        <li>Presented analysis and visualization in a class of 121 students.</li>
      </ul>
      </div>
      <div class="row">
      <h3>Employee Management System</h3>
      <h3><a class="link-opacity-10-hover" href="https://github.com/tnyima19/final_frontend">Front-end</a></h3>
      <h3><a class="link-opacity-10-hover" href="https://github.com/tnyima19/final-backend-updating">Back-end</a></h3>
      <ul>
        <li>
          Using Node, Express, React, Redux, PostgreSQL, and Sequalize, built a RESTful full stack web applicatioon to manage tasks and employees.
        </li>
        <li>
          Implement CRUD (Create, Read, Update, Delete) operations allowing users to add, remove and upate employees and tasks.
        </li>
      </ul>
      </div>
      </div>
      <div class="col">
      <div class="row">
      <h3><a class="link-opacity-10-hover" href="https://tnyima19.github.io/Assignment1/">Digital Artist Portfolio</a></h3>
      <ul>
        <li>Create a portfolio of an artist and his artwork with mutiple pages.</li>
        <li>Easy access to all pages from the navigation bar.</li>
        <li></li>
      </ul>
      </div>
      <div class="row">
      <h3><a class="link-opacity-10-hover" href="https://tnyima19.github.io/Assignment1/">Simulate Operating System</a></h3>
      <ul>
        <li>Create a C++ application program that simulates an operating system and its interaction with CPU, RAM and hard-drive. 
          </li>
          <li>Used heap to stack processes on the basis of their prioirty</li>
          <li>Used foundations of Object Oriented Programming to create and implement functions of CPU, RAM, hard-drive</li>

      </ul>
      </div>
      </div>

      <div class="col">
      <div class="row">
      <h3><a class="link-opacity-10-hover" href="https://tnyima19.github.io/Assignment1/">CountyDownty</a></h3>
      <ul>
        <li>
        Developed a word-based game that uses RESTAPI to check if user input word exists in the dictionary.
        </li>
        <li>Creates and records the user scores.</li>
       
      </ul>
      </div>

    <div class="row">
      <h3><a class="link-opacity-10-hover" href="https://tnyima19.github.io/Restaurant-Project/">Restaurant Menu</a></h3>
      <ul>
        <li>Create a well designed Restaurant menu using HTML and CSS</li>

      </ul>
      </div>
      </div>

      <div class="col">
      <div class="row">

      <h3><a class="link-opacity-10-hover" href="https://github.com/tnyima19/Find-South-American-coutry-game">Name South American Countries Game</a> </h3>
      <ul>
        <li>Designed a game using python, pandas and turtle to create a game with GUI</li>
        <li>Try to name all the south american countries.</li>
      </ul>
      </div>
      </div>
      
      <h2> Experience </h2>
      <div className="box">
      <h4>CodePath Org, Tech Fellow (June 2023- Present)</h4>
      <ul>
        <li>
          Lead discussions on how to solve Tech Interview Problems.
        </li>
        <li>
          Encourage students to use UMPIRE method to solve the interview problems while creating and fostering 
          an inclusive environment in all the 5 groups.
        </li>
      </ul>

      <h4>Data Analyst Intern (March 2023 - June 2023)</h4>
      <ul>
        <li>
          Program code so that google sheet pulls data automatically from Firebase using API call.
        </li>
        <li> Developed and implemented a comprehensive dashboard using looker studio for sponsers so they can 
          easily access the impact of starlight on lower income households.
        </li>
        <li>
          Implemented row level filtering so sponsors get only summarised access to data they sponsored.
        </li>
        <li>
          Provided important information such as total amount saved for customers, the overall number of customers, the 
          percentage conversion rate, enabling sponsors to evaluate the impact the starlight.
        </li>
      </ul>

      <h4>Game Developer Intern(January 2023- March 2023)</h4>
      <ul>
        <li>
          Conceptualized, designed and developed a mini-game using Unity engine and C#.
        </li>
        <li>
          Designed 5 maps for racing game and used NavMesh to automate opponent AI.
        </li>
        <li>
          Collaborated with artists to create fun and compelling characters.
        </li>
      </ul>    
      </div>


    </div>
  );
}

export default App;
