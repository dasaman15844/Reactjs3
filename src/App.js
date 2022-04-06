
import './App.css';

function App() {
  return (
    <div className='container'>
    <form>
    <div className='col-75'>
      Enter your name: <div>
        <input type="text" name='name'/>
        </div>
        </div><div className='col-75'>
        
      Enter your password:<div>
        <input type="text" name='password'/>
        </div>
        </div>

        <div className='col-75'>
        
      Address:<div>
        <input type="text" name='password'/>
        </div>
        </div>

        <div className='col-75'>
        Gender:<br />
        <input type="radio" id="Male" name="fav_language" value="Male"/> 
        <label for="Male">Male</label><br/>
        <input type="radio" id="Female" name="fav_language" value="Female" />
        <label for="female">Female</label>
       

          </div>

<div className='col-75'>Country : <br/>
          <select name="Country" id="country-select">
    <option value="">--Please choose an option--</option>
    <option value="Nepal">Nepal</option>
    <option value="India">India</option>
    <option value="Japan">Japan</option>
    <option value="Spain">Spain</option>
    <option value="Australia">Australia</option>
    <option value="Usa">Usa</option>
</select>

</div>

<div className='col-75' > Choose your Language : <br/>
<input type="checkbox" id="English" name="English" value="English"/>
  <label for="English"> English</label><br />
  <input type="checkbox" id="Hindi" name="Hindi" value="Hindi" />
  <label for="Hindi"> Hindi</label><br />
  <input type="checkbox" id="Neplai" name="Nepali" value="Nepali"/>
  <label for="Neplai"> Nepali</label><br /><br />
  </div>
        
        <div className='row'>
    <input type="submit" value="Submit"  />
  </div>
    </form>
    </div>
  );
}

export default App;
