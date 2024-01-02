function Education({workArray}) {
    return (
      <div>
        {workArray.length > 0 && workArray[0].company.length > 0 && <div className="section-header">Work History</div>}
        {workArray.map((item) => {
          return  <div key={item.key}>
                    <h2>{item.company}</h2>
                    <h4>{item.position}</h4>
                    {item.startYear.length > 0 && item.endYear.length > 0 && <h4>{item.startYear} - {item.endYear}</h4>}
                    {item.startYear.length > 0 && item.endYear.length === 0 && <h4>{item.startYear} - present</h4>}
                    <ul>
                      {item.responsibilities.map((bullet) => {
                        if (bullet.value.length > 0) return <li key={bullet.key}>{bullet.value}</li>
                      })}
                    </ul>
          </div>
        })}
      </div>
    )
  }

  export default Education