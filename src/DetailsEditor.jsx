function DetailsEditor({details, updateDetails, close}) {
    const newDetails = JSON.parse(JSON.stringify(details))
  
    return (
      <div className = "modal">
        <div className = "form-container">
          <div className="editor-header">Personal Details</div>
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
            <label htmlFor="name">Name:</label>
            <input 
              id="name"
              defaultValue={newDetails.name}
              onChange={(e) => {newDetails.name = e.target.value}}
            />
            <br></br>
            <label htmlFor="phone">Phone number:</label>
            <input 
              id="phone"
              defaultValue={newDetails.phone}
              onChange={(e) => {newDetails.phone = e.target.value}}
            />
            <br></br>
            <label htmlFor="email">Email Address:</label>
            <input 
              id="email"
              defaultValue={newDetails.email}
              onChange={(e) => {newDetails.email = e.target.value}}
            />
            <br></br>
            <label htmlFor="website">Website:</label>
            <input 
              id="website"
              defaultValue={newDetails.website}
              onChange={(e) => {newDetails.website = e.target.value}}
            />
            <br></br>
            <button 
              type="button"
              style={{marginLeft:"0", marginTop:"15px"}}
              onClick={() => {
                updateDetails(newDetails)
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

export default DetailsEditor