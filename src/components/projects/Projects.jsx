
import React from 'react'
import './projects.css'
import IMG0 from '../../assets/portfolio.gif'
import IMG1 from '../../assets/quiz.png'
import IMG2 from '../../assets/todolist.gif'
import IMG3 from '../../assets/tictactoe.gif'
import IMG4 from '../../assets/juices.png'
import IMG5 from '../../assets/cal.gif'
import IMG6 from '../../assets/bookstore.jpg'
import IMG7 from '../../assets/routes.png'
const data = [
  {
    id : 0,
    image : IMG0,
    title : 'Portfolio using React JS',
    github : 'https://github.com/vinaykumar0410/Portfolio-ReactJS',
    demo : 'https://vinaykumaryaddulakondu.netlify.app/'
  },
  {
    id : 1,
    image : IMG1,
    title : 'Quiz App using React JS',
    github : 'https://github.com/vinaykumar0410/Quiz-App-ReactJS',
    demo : 'https://vinay-quizapp.netlify.app/'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Todo List using React JS',
    github : 'https://github.com/vinaykumar0410/TodoList-ReactJS',
    demo : 'https://vinay-todolist.netlify.app/'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Tic Tac Toe using React JS',
    github : 'https://github.com/vinaykumar0410/TicTacToe-ReactJS',
    demo : 'https://vinay-tiktactoe.netlify.app/'
  },
  {
    id : 4,
    image : IMG4,
    title : 'Juicy Heaven using React JS',
    github : 'https://github.com/vinaykumar0410/Quiz-App-ReactJS',
    demo : 'https://vinay-juicyheaven.netlify.app//'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Basic Calculator App',
    github : 'https://github.com/vinaykumar0410/Basic-Calculator',
    demo : 'https://vinay-calc.netlify.app/'
  },
  {
    id : 6,
    image : IMG6,
    title : 'Book Store Application',
    github : 'https://github.com/vinaykumar0410/OnlineBookStore',
    demo : 'https://github.com/vinaykumar0410/OnlineBookStore'
  },
  {
    id : 7,
    image : IMG7,
    title : 'Basic React Routes',
    github : 'https://github.com/vinaykumar0410/React-Routes',
    demo : 'https://vinay-reactroutes.netlify.app/'
  },
  
]
function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="container project__container">
        {
          data.map((project)=>{
            const {id,image,title,github,demo} = project
            return <article key={id} className='project__item'>
            <div className="project__item-image">
              <img src={image} alt="quiz-app" />
            </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> 
          })
        }
      </div>
    </section>
  )
}

export default Projects