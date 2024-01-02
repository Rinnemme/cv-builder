import { useState } from 'react'
import Education from './Education.jsx'
import EducationEditor from './EducationEditor.jsx'
import WorkHistory from './WorkHistory.jsx'
import WorkHistoryEditor from './WorkHistoryEditor.jsx'
import Details from './Details.jsx'
import DetailsEditor from './DetailsEditor.jsx'
import Skills from './Skills.jsx'
import SkillsEditor from './SkillsEditor.jsx'

function App() {
  const [personalDetails, setPersonalDetails] = useState ({name:'', phone:'', email:'', website:''})
  const [education, setEducation] = useState ([{key: 1, institution:'', degree:'', startYear:'', endYear:'', bullets: [{key: 1, value: 'Detail'}]}])
  const [workHistory, setWorkHistory] = useState ([{key: 1, company:'', position:'', startYear:'', endYear:'', responsibilities: [{key: 1, value: ''}]}])
  const [skills, setSkills] = useState ([{key:1, value:''}])
  const [status, setStatus] = useState('viewing')
  const [generatedKey, setGeneratedKey] = useState(2)

  return (
    <div className="content">
      <div className = "page-header">CV Builder</div>
      <div className = 'button-container'>
        <button onClick = {() => {setStatus('editingDetails')}}>
          Edit Personals
        </button>
        <button onClick = {() => {setStatus('editingEducation')}}>
          Edit Education
        </button>
        <button onClick = {() => {setStatus('editingWork')}}>
          Edit Work
        </button>
        <button onClick = {() => {setStatus('editingSkills')}}>
          Edit Skills
        </button>
      </div>
      {status === 'editingDetails' && <DetailsEditor details={personalDetails} updateDetails={setPersonalDetails} close={() => {setStatus('viewing')}}/>}
      {status === 'editingEducation' && <EducationEditor educationArray={education} updateEducation={setEducation} close={() => {setStatus('viewing')}} generatedKey={generatedKey} updateKey={() => {setGeneratedKey(generatedKey+1)}}/>}
      {status === 'editingWork' && <WorkHistoryEditor workArray={workHistory} updateWork={setWorkHistory} close={() => {setStatus('viewing')}} generatedKey={generatedKey} updateKey={() => {setGeneratedKey(generatedKey+1)}}/>}
      {status === 'editingSkills' && <SkillsEditor skillArray={skills} updateSkills={setSkills} close={() => {setStatus('viewing')}} generatedKey={generatedKey} updateKey={() => {setGeneratedKey(generatedKey+1)}}/>}
      <div className="CV">
        <Details object={personalDetails}/>
        <Education educationArray={education}/>
        <WorkHistory workArray={workHistory}/>
        <Skills skillArray={skills}/>
      </div>
      
    </div>
  )
}

export default App