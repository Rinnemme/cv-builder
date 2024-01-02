function Details({object}) {

    function firstLine() {
      if (object.phone.length > 0 && object.email.length>0) return true
      else if (object.phone.length > 0 && object.website.length > 0) return true
      else return false
    }
  
    function secondLine() {
      if (object.website.length>0 && object.email.length>0) return true
      else return false
    }
  
    return (  
      <div className = "personal-details"> 
        {object.name.length > 0 && <h1>{object.name}</h1>}
        {object.phone.length > 0 && <p>{object.phone}</p>}
        {firstLine() === true && <p> | </p>}
        {object.email.length > 0 && <p>{object.email}</p>}
        {secondLine() === true && <p> | </p>}
        {object.website.length > 0 && <p>{object.website}</p>}
      </div>
    )
  }
  
export default Details