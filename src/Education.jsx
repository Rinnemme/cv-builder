function Education({educationArray}) {
    return (
      <div>
        {educationArray.length > 0 && educationArray[0].institution.length > 0 && <div className="section-header">Education</div>}
        {educationArray.map((item) => {
          return  <div key={item.key}>
                    <h2>{item.institution}</h2>
                    <h4>{item.degree}</h4>
                    {item.startYear.length > 0 && item.endYear.length > 0 && <h4>{item.startYear} - {item.endYear}</h4>}
                    {item.startYear.length > 0 && item.endYear.length === 0 && <h4>{item.startYear} - present</h4>}
                    <ul>
                      {item.bullets.map((bullet) => {
                         if (bullet.value.length>0) return <li key={bullet.key}>{bullet.value}</li>
                      })}
                    </ul>
          </div>
        })}
      </div>
    )
  }

  export default Education