import "./Page.css";
import img from "./marraige.png"
const Page = () => {
  return (
    <div class="flex-container">
      <div class="flex-childfirst">
        <img
          src={img}
          alt="logo"
          className="imgcon"
        />
      </div>
      <div class="flex-childsecond">
        <div className="content">
          <h4>
            "Grow Your Bussinesss with 7Vachan"
            <span> singup to access your Dashboard</span>
          </h4>
        </div>
        <form className="form">
          <div className="control">
            <label>Brand name*</label>
            <input type="text" placeholder="8008372144" />
          </div>
          <div className="control">
            <label>city (choose your base city here)*</label>
            <select>
              <option>8008372144</option>
              <option>8008372144</option>
              <option>8008372144</option>
            </select>
          </div>
          <div className="control">
            <label>select vendor Type*</label>
            <select>
              <option>8008372144</option>
              <option>8008372144</option>
              <option>8008372144</option>
            </select>
          </div>
          <div className="control">
            <label>Email*</label>
            <input type="text" placeholder="8008372144" />
          </div>
          <div className="control">
            <label>Mobile Number*</label>
            <input type="text" placeholder="8008372144" />
          </div>
          <div className="control">
            <label>password*</label>
            <input type="text" placeholder="8008372144" />
          </div>
          <div className="controlbutton">
            <button>
              continue <span> &#8640; </span>
            </button>
          </div>
          <div className="controllog">
            <p>
              customer login? 
              <a href="vdfg">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Page;
