import "./App.css";

const App = () => {
  return (
    <div className="main d-flex justify-content-center align-items-center ">
      <div className="card-contact py-2 px-3">
        <h1>Contact Form</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-between ">
          <div>
            <h5>Enter your name</h5>
            <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <div>
            <h5>Enter your Phone number</h5>
            <input type="text" placeholder="Enter your phone number" name="number" />
          </div>
          <div>
            <h5>Address</h5>
            <textarea placeholder="Enter your address" name="address" />
          </div>
          <div className="imp-data d-flex justify-content-between ">
            <div>
              <h5>Enter your state</h5>
              <input id="imp" type="text" placeholder="Enter your state" name="state" />
            </div>
            <div>
              <h5>Enter your city</h5>
              <input id="imp" type="text" placeholder="Enter your city" name="city" />
            </div>
          </div>
          <div>
            <h5>Message</h5>
            <input type="text" placeholder="Enter your message" name="message" />
          </div>
          <div>
            <button className="btn btn-primary ">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
