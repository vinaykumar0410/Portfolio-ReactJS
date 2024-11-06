
import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio.gif'
import IMG2 from '../../assets/nextjs.png'
import IMG3 from'../../assets/flutter.png'
import IMG4 from'../../assets/groupchat.png'
import IMG5 from '../../assets/blog.png'
import IMG6 from '../../assets/taskmanager.jpg'
import IMG7 from '../../assets/employee.png'
import IMG8 from '../../assets/quiz.png'
import IMG9 from '../../assets/todolist.gif'
import IMG10 from '../../assets/juices.png'
import IMG11 from '../../assets/cal.gif'
const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Portfolio using React JS',
    github : 'https://github.com/vinaykumar0410/Portfolio-ReactJS',
    demo : 'https://vinaykumaryaddulakondu.onrender.com'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Portfolio using Next JS',
    github : 'https://github.com/vinaykumar0410/Portfolio-NextJS',
    demo : 'https://vinaykumaryaddulakondu.vercel.app/'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Portfolio using Flutter',
    github : 'https://github.com/vinaykumar0410/Portfolio-Flutter',
    demo : 'https://vinaykumaryaddulakondu.netlify.app/'
  },
  {
    id : 4,
    image : IMG4,
    title : 'Group Chat App',
    github : 'https://github.com/vinaykumar0410/Group-Chat-App/',
    demo : 'https://talk2world.netlify.app/'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Blog App using MERN Stack',
    github : 'https://github.com/vinaykumar0410/Blog-App',
    demo : 'https://blog-hive.netlify.app/'
  },
  {
    id : 6,
    image : IMG6,
    title : 'Task Manager',
    github : 'https://github.com/vinaykumar0410/Task-Manager',
    demo : 'https://github.com/vinaykumar0410/Task-Manager'
  },
  {
    id : 7,
    image : IMG7,
    title : 'Employee Management System',
    github : 'https://github.com/vinaykumar0410/Employee-Management-System',
    demo : 'https://github.com/vinaykumar0410/Employee-Management-System'
  },
  {
    id : 8,
    image : IMG8,
    title : 'Quiz App using React JS',
    github : 'https://github.com/vinaykumar0410/Quiz-App-ReactJS',
    demo : 'https://vinay-quizapp.netlify.app/'
  },
  {
    id : 9,
    image : IMG9,
    title : 'Todo List using React JS',
    github : 'https://github.com/vinaykumar0410/TodoList-ReactJS',
    demo : 'https://vinay-todolist.netlify.app/'
  },
 
  {
    id : 10,
    image : IMG10,
    title : 'Juicy Heaven using React JS',
    github : 'https://github.com/vinaykumar0410/Quiz-App-ReactJS',
    demo : 'https://vinay-juicyheaven.netlify.app//'
  },
  {
    id : 11,
    image : IMG11,
    title : 'Basic Calculator App',
    github : 'https://github.com/vinaykumar0410/Basic-Calculator',
    demo : 'https://vinay-calc.netlify.app/'
  }  
  
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
            <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article> 
          })
        }
      </div>
    </section>
  )
}

export default Projects