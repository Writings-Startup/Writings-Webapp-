import React from 'react'
import '../Css/create.css'

function CreatePage() {
    return (
        <div className="Create"> 
            <h1 className="create-hr"> Create Page </h1>
            
          <form >
     
              <label className="Title-c">Title</label>

              <div className="">

              <input className="untitle" type="text" placeholder="Untitle" /> 
              </div>
              <div>
              <label className="category-c">Category</label> <br>
              </br>
              <select className="selectCategory">
                  <option className="option" value=""> Select Category </option>
                  <option className="option" value="Auto Biography "> Auto biography </option>
                  <option className="option" value="Biography"> Biography </option>
                  <option className="option" value="Drama "> Drama </option>
                  <option className="option" value="Essay "> Essay </option>
                  <option className="option" value="Fable "> Fable </option>
                  <option className="option" value="Fiction"> Fiction </option>
                  <option className="option" value="Journal">Journal  </option>
                  <option className="option" value="Memoir "> Memoir </option>
                  <option className="option" value="Novel "> Novel </option>
                  <option className="option" value="Poetry "> Poetry </option>
                  <option className="option" value="Prose"> Prose </option>
                  <option className="option" value="Short Story "> Short Story </option> 
                  <option className="option" value="Tavelougs "> Travelougs </option>
              </select>
              </div>
              <div>
              <label className="language-c">Language</label><br>
              </br>
              <select className="selectLanguage">
                  <option className="option" value=""> Select Language </option>
                  
                  <option className="option" value="Bengali "> Bengali </option>
                  <option className="option" value="English"> English </option>
                  <option className="option" value="Gujarathi "> Gujarathi </option>
                  <option className="option" value="Hindi"> Hindi </option>
                  <option className="option" value="Malayalam"> Malayalam </option>
                  <option className="option" value="Marathi"> Marathi </option>
                  <option className="option" value="Odia "> Odia </option>
                  <option className="option" value="Tamil"> Tamil</option>
                  <option className="option" value="Telugu "> Telugu </option>
                  <option className="option" value="Urdu "> Urdu </option>
                  
                  

              </select>
              </div>
            
          </form>
      
        
        </div>
    )
}

export default CreatePage
