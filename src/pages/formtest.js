import React, { useState } from 'react';

function MyComponent() {
  const [textareaValues, setTextareaValues] = useState({});
  const [response, setResponse] = useState(null);

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setTextareaValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the JSON data that would be sent to the console
    console.log(JSON.stringify(textareaValues, null, 2));

    // Send the API request once you have the endpoint
    // try {
    //   const response = await fetch('your_api_endpoint_here', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(textareaValues),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     setResponse(data);
    //   } else {
    //     console.error('Error:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="textarea1"
          value={textareaValues.textarea1 || ''}
          onChange={handleTextareaChange}
          placeholder="Enter text for Textarea 1..."
        />
        <textarea
          name="textarea2"
          value={textareaValues.textarea2 || ''}
          onChange={handleTextareaChange}
          placeholder="Enter text for Textarea 2..."
        />
        

        <button type="submit">SEND</button>
      </form>

      {response && (
        <div>
          <h2>Response from API:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
