import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const  MySearchComponent = () => {
  const [address, setAddress] = useState('');

  const handleChange = (value) => { 
    setAddress(value);
  };

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      // Handle the selected place here
      console.log('Selected Place:', value);
      console.log('Selected Location:', latLng);
    } catch (error) {
      console.error('Error selecting place:', error);
    }
  };

  return (
    <div>
      <h1>Search Box</h1>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Type address' })} />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => (
                <div {...getSuggestionItemProps(suggestion)}>{suggestion.description}</div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default MySearchComponent;