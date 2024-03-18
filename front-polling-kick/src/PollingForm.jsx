import React, { useState } from 'react';
import axios from 'axios';
import.meta.env.VITE_BACK_END_URL;

function PollingForm() {
  const [duration, setDuration] = useState(60);
  const [options, setOptions] = useState(['']);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const pollingData = {
      duration: duration * 1000, // convert duration from seconds to milliseconds
      options: options,
    };

    try {
      console.log(VITE_BACK_END_URL + `/polling/${pollingData.duration}`)
      const response = await axios.post(+ `/polling/${pollingData.duration}`, pollingData.options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const deleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className='text-xl'>
        Duration (s) :
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <div className='text-xl'> Les choix du sondages :</div>
      <button className="m-2 p-2 "type="button" onClick={addOption}> Voulez-vous ajouter une option ?</button>
      {options.map((option, index) => (
        <div key={index} className="flex flex-col m-6  gap-6">
          <label>
            Option {index + 1}:
            <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
          </label>
          <button className="color-red-500"type="button" onClick={() => deleteOption(index)}> X </button>
        </div>
      ))}
      <button type="submit" className="m-2 p-2 text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Lancer
      </button>    
</form>
  );
}

export default PollingForm;