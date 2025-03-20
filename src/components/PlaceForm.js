import React, {useState,useContext} from 'react'
import { PlaceContext } from '../context/PlaceContext';
import { Navigate,useNavigate } from "react-router-dom";

export const PlaceForm = () => {
      const [name, setName] = useState("");
      const [address, setAddress] = useState("");
      const [type, setType] = useState("");
      const {addplace} = useContext(PlaceContext);
      const navigate = useNavigate()
      const handleSubmit = async (e) => {
        e.preventDefault(); // ✅ Prevents page reload
    
        console.log("Submit button clicked");
    
        if (!name || !address || !type) {   
          alert("All fields are required");
          return;
        }
        try {
          await addplace({ name,address,type}); // ✅ Wait for async function
          navigate("/");
        } catch (error) {
          console.error("Registration error:", error);
        }
      };

  return (
    <form>
    <div className="form-group">
      <label htmlFor="name">Place Name:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    
    <div className="form-group mt-2">
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        className="form-control"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
    
    <div className="form-group mt-2">
      <label htmlFor="type">Type:</label>
      <select
        className="form-control"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Park">Park</option>
        <option value="Museum">Museum</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>

    </form>
  )
}


