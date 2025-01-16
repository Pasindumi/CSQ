import React from 'react';
import "../styles/Forms.css";

function Forms() {
  return (
    <div className="forms-container">
      <header className="forms-header">
        <h1>Forms</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        
      </header>
      <hr className='xyz' />
      <section className="new-forms">
      <h2>New forms</h2>
        <div className="form-templates">
          <div className="form-cards">
          <img src="pluss.png" alt="Blank Form Icon" className="form-icon"/>
            <p>Create New form</p>
          </div>
          <div className="form-card">
          <img src="lectures.jpg" alt="Blank Form Icon" className="form-icon"/>
            <p>Lecturer Reviews</p>
          </div>
          <div className="form-card">
          <img src="env.jpg" alt="Blank Form Icon" className="form-icons"/>
            <p>Learning Environment</p>
          </div>
          <div className="form-card">
          <img src="support.jpg" alt="Blank Form Icon" className="form-icons"/>
            <p>Support Services</p>
          </div>
          <div className="form-card">
          <img src="methids.jpg" alt="Blank Form Icon" className="form-icons"/>
            <p>Teachig Methods</p>
          </div>
        </div>
      </section>
<hr className='abc' />
      
      <section className="recent-forms">
        <h2>Recent forms</h2>
        <div className="form-templates">
          <div className="form-card-recent">
            <div className="form-icon recent-form"></div>
            <p>Super fun event registration</p>
            <span>Opened 12:49 PM</span>
          </div>
          <div className="form-card-recent">
            <div className="form-icon recent-form"></div>
            <p>Event Feedback</p>
            <span>Opened 10:57 AM</span>
          </div>
          <div className="form-card-recent">
            <div className="form-icon recent-form"></div>
            <p>Demo order form</p>
            <span>Opened 10:43 AM</span>
          </div>
          <div className="form-card-recent">
            <div className="form-icon recent-form"></div>
            <p>Demo team event poll</p>
            <span>Opened 10:40 AM</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forms;
