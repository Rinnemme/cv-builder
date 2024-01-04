import {useState} from 'react'

function EducationEditor({workArray, updateWork, close, generatedKey, updateKey}) {
    const [workingArray, setWorkingArray] = useState(JSON.parse(JSON.stringify(workArray)));
  
    return (
      <div className="modal">
        <div className="form-container">
            <div className="editor-header">Work History</div>
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
              {workingArray.map((item) => {
                const index = workingArray.indexOf(item)
                return <div key={item.key} className="experience-container">
                  <button 
                    className="remove-experience"
                    type="button"
                    onClick={() => {
                      const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                      newWorkingArray.splice(index,1)
                      setWorkingArray([...newWorkingArray])
                    }}
                  >
                    remove
                  </button>
                  {workingArray[index-1] && <button 
                    className="arrow-button experience-up"
                    type="button"
                    onClick={() => {
                        const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                        newWorkingArray.splice(index,1)
                        newWorkingArray.splice(index-1,0,item)
                        setWorkingArray([...newWorkingArray])
                    }}
                  >
                    ↑
                  </button>}
                  {workingArray[index+1] && <button 
                    className="arrow-button experience-down"
                    type="button"
                    onClick={() => {
                        const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                        newWorkingArray.splice(index,1)
                        newWorkingArray.splice(index+1,0,item)
                        setWorkingArray([...newWorkingArray])
                    }}
                  >
                    ↓
                  </button>}
                  <label htmlFor="company">company:</label>
                  <input 
                    id="company"
                    defaultValue={item.company}
                    onChange={(e) => {
                      item.company = e.target.value
                    }}
                  />
                  <br></br>
                  <label htmlFor="position">position:</label>
                  <input 
                    id="position"
                    defaultValue={item.position}
                    onChange={(e) => {item.position = e.target.value}}
                  />
                  <br></br>
                  <label htmlFor="startYear">Start Month/Year:</label>
                  <input 
                    id="startYear"
                    defaultValue={item.startYear}
                    onChange={(e) => {item.startYear = e.target.value}}
                  />
                  <br></br>
                  <label htmlFor="endYear">End Month/Year:</label>
                  <input 
                    id="endYear"
                    defaultValue={item.endYear}
                    onChange={(e) => {item.endYear = e.target.value}}
                  />
                  <ul>
                      {item.responsibilities.map((bullet) => {
                        const itemIndex = workingArray.indexOf(item)
                        const bulletIndex = item.responsibilities.indexOf(bullet)
                          return <li key={bullet.key}>
                              <input
                                defaultValue={bullet.value}
                                onChange={(e) => {bullet.value = e.target.value}}
                              />
                              <button
                                type="button"
                                className="remove-detail"
                                onClick={() => {
                                  const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                                  newWorkingArray[itemIndex].responsibilities.splice(bulletIndex,1)
                                  setWorkingArray([...newWorkingArray])
                                }}
                              >
                                ✕
                              </button>
                              {workingArray[itemIndex].responsibilities[bulletIndex-1] && <button
                                type="button"
                                className="arrow-button"
                                onClick={() => {
                                    const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                                    newWorkingArray[itemIndex].responsibilities.splice(bulletIndex,1)
                                    newWorkingArray[itemIndex].responsibilities.splice(bulletIndex-1,0,bullet)
                                    setWorkingArray([...newWorkingArray])
                                }}
                              >
                                ↑
                              </button>}
                              {workingArray[itemIndex].responsibilities[bulletIndex+1] && <button
                                type="button"
                                className="arrow-button"
                                onClick={() => {
                                    const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                                    newWorkingArray[itemIndex].responsibilities.splice(bulletIndex,1)
                                    newWorkingArray[itemIndex].responsibilities.splice(bulletIndex+1,0,bullet)
                                    setWorkingArray([...newWorkingArray])
                                }}
                              >
                                ↓
                              </button>}
                            </li>
                      })}
                      <li>
                        <button
                          type="button"
                          className="form-button"
                          onClick={() => {
                            const index = workingArray.indexOf(item)
                            const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                            newWorkingArray[index].responsibilities.push({key:generatedKey, value:''})
                            setWorkingArray([...newWorkingArray])
                            updateKey()
                          }}
                        >
                        Add detail
                        </button>
                      </li>
                  </ul>
                </div>
              })}
              <button 
                type="button"
                onClick={() => {
                  const newWorkingArray = JSON.parse(JSON.stringify(workingArray))
                  newWorkingArray.push({key: generatedKey, company:'', position:'', startYear:'', endYear:'', responsibilities: [{key: generatedKey, value: ''}]})
                  setWorkingArray([...newWorkingArray])
                  updateKey()
                }}
              >
                Add Education
              </button>
              <button 
                type="button"
                onClick={() => {
                  updateWork(workingArray)
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
  
  export default EducationEditor