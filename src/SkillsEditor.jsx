import {useState} from 'react'

function SkillsEditor({skillArray, updateSkills, close, generatedKey, updateKey}) {
    const [skills, setSkills] = useState(JSON.parse(JSON.stringify(skillArray)));
  
    return (
      <div className="modal">
        <div className="form-container">
          <div className="editor-header">Relevant Skills</div>
          <form>
              <button
                type="button"
                className="close-button"
                onClick={() => {
                  close()
                }}
              >
                ✕
              </button>
              <ul>
                {skills.map((skill) => {
                    return <li key={skill.key}>
                        <input
                          defaultValue={skill.value}
                          onChange={(e) => {skill.value = e.target.value}}
                        />
                        <button
                          type="button"
                          className="remove-detail"
                          onClick={() => {
                            const skillIndex = skills.indexOf(skill)
                            const newSkillArray = JSON.parse(JSON.stringify(skills))
                            newSkillArray.splice(skillIndex,1)
                            setSkills([...newSkillArray])
                          }}
                        >
                          ✕
                        </button>
                        <button
                          type="button"
                          className="arrow-button"
                          onClick={() => {
                            const skillIndex = skills.indexOf(skill)
                            if(!skills[skillIndex-1]) return
                            else {
                              const newSkillArray = JSON.parse(JSON.stringify(skills))
                              newSkillArray.splice(skillIndex,1)
                              newSkillArray.splice(skillIndex-1,0,skill)
                              setSkills([...newSkillArray])
                            }
                          }}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          className="arrow-button"
                          onClick={() => {
                            const skillIndex = skills.indexOf(skill)
                            if(!skills[skillIndex+1]) return
                            else {
                              const newSkillArray = JSON.parse(JSON.stringify(skills))
                              newSkillArray.splice(skillIndex,1)
                              newSkillArray.splice(skillIndex+1,0,skill)
                              setSkills([...newSkillArray])
                            }
                          }}
                        >
                          ↓
                        </button>
                      </li>
                  })}
                  <li>
                    <button
                      type="button"
                      className="form-button"
                      onClick={() => {
                        const newSkillArray = JSON.parse(JSON.stringify(skills))
                        newSkillArray.push({key:generatedKey, value:''})
                        setSkills([...newSkillArray])
                        updateKey()
                      }}
                    >
                    Add skill
                    </button>
                  </li>
                </ul>
                <br></br>
              <button 
                type="button"
                onClick={() => {
                  const newSkillArray = JSON.parse(JSON.stringify(skills))
                  newSkillArray.push({key: generatedKey, value:''})
                  setSkills([...newSkillArray])
                  updateKey()
                }}
              >
                Add Skill
              </button>
              <button 
                type="button"
                onClick={() => {
                  updateSkills(skills)
                  close()
                }}
              >
                Save
              </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default SkillsEditor