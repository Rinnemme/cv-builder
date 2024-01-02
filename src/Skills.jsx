function Education({skillArray}) {
    return (
      <div>
        {skillArray.length > 0 && skillArray[0].value.length > 0 && <div className="section-header">Relevant Skills</div>}
        <ul>
        {skillArray.map((skill) => {
          if (skill.value.length>0) return  <li key={skill.key}>{skill.value}</li>
        })}
        </ul>
      </div>
    )
  }

  export default Education