import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PullDogInfo() {
    //storage + functions for 
  const [dogImage, setDogImage] = useState('');
  const [dogFact, setDogFact] = useState(''); 

  const fetchDogImage = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);
    } catch (error) {
      console.error("Error fetching from Dog servers :(", error);
    }
  };

  const fetchDogFact = async () => {
    try {
      const response = await axios.get("https://dog-api.kinduff.com/api/facts");
      setDogFact(response.data.facts[0]);
    } catch (error) {
      console.error("Error fetching from Dog servers :(", error);
    }
  };

  useEffect(() => { //NEEDS THIS TO UPLOAD INTIAL IMAGE
    fetchDogImage(); //Thanks google :)
    fetchDogFact();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Random Dog API</h2>
      {dogImage && <img src={dogImage} alt="Random Dog Image" style={{ width: "300px", borderRadius: "10px" }} />}
      <p>{dogFact}</p>
      <button onClick={() => { fetchDogImage(); fetchDogFact(); }}>
        Fetch Dog Info
      </button>
    </div>
  );
}

export default PullDogInfo;