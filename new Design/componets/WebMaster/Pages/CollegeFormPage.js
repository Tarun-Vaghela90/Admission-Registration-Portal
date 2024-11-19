import React, { useState } from 'react';

function CollegeFormPage() {
  const [college, setCollege] = useState({
    title: '',
    text: '',
    updated: '',
    location: '',
    description: '',
    courses: '',
    fees: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setCollege({ ...college, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/webmasterRoute/college', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('authToken') // Protected route needs a token
      },
      body: JSON.stringify(college)
    });

    const data = await response.json();
    if (response.ok) {
      alert('College created successfully!');
    } else {
      alert('Failed to create college');
    }
  };

  return (
    <div className="college-form-container">
      <h2>Create New College</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="College Title"
          value={college.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          placeholder="Tagline or Text"
          value={college.text}
          onChange={handleChange}
        />
        <input
          type="date"
          name="updated"
          value={college.updated}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={college.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={college.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="courses"
          placeholder="Courses (comma separated)"
          value={college.courses}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={college.fees}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={college.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Create College</button>
      </form>
    </div>
  );
}

export default CollegeFormPage;
