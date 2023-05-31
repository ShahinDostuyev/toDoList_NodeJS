import React from 'react'
import ToDoList from './ToDoList'
import Footer from './Footer'

function Content() {
  return (
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
    <ToDoList/>
    <Footer/>
		
	</section>
  )
}

export default Content