import React, { useState } from 'react';
import "../styles/craeteform.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formTitle, setFormTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <div className='title'>
        <h2>CSQ Form Creation</h2>
        <hr className='hr' />
      </div>

      <div className="container">
        <div className="timeline">
          {['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'].map((step, index) => (
            <div key={index} className="timeline-step-container">
              <div
                className={`timeline-step ${index + 1 <= currentStep ? 'active' : ''}`}
              >
                {index + 1}
              </div>
              {index < 4 && <div className={`timeline-line ${index + 1 < currentStep ? 'active-line' : ''}`} />}
            </div>
          ))}
        </div>

        <br />

        {/* Form Description Section */}
        <div className="form-description">
          <h3> Description</h3>
          <p>
            <b>Welcome to the CINEC CSQ (Cinec Student Quality Survey) platform! ✨</b>
            <br /> <br />
            This webpage is designed to help you create an insightful and detailed questionnaire
            <br />
            form to gather feedback on various aspects of your learning experience at CINEC.📝
            <br />
            The form includes sections that allow you to provide valuable feedback in several important areas,
            <br />
            helping improve the quality of education and student services.
            <br /><br />
            1️⃣ Create Form Title and Description <br />
            2️⃣ Lecturer Reviews <br />
            3️⃣ Learning Environment <br />
            4️⃣ Support Services <br />
            5️⃣ Save and Add Question Paper Option
          </p>
        </div>

        <hr className='hr02' />

        {/* Step Descriptions */}
        <div className="step-description">
          {currentStep === 1 && (
            <div>
              <h2 className='stephead'>Step 1: Add Form Title and Description</h2>
              <p>Add a title and description to your form. These details will help your users understand the purpose of the form.</p>
              <input 
                type="text" 
                placeholder="Enter form title" 
                value={formTitle} 
                onChange={handleTitleChange}
              />
              <textarea
                placeholder="Enter form description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          )}
          {currentStep === 2 && <p>Step 2: Add questions to your form.</p>}
          {currentStep === 3 && <p>Step 3: Set up responses and answer types.</p>}
          {currentStep === 4 && <p>Step 4: Customize form design.</p>}
          {currentStep === 5 && <p>Step 5: Finalize and publish your form.</p>}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentStep === 1}>Previous</button>
          <button onClick={handleNext} disabled={currentStep === 5}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;
