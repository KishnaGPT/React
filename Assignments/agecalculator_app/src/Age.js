import React, { useState } from 'react';

const personsData = [
  { name: "John Doe", dateOfBirth: "1990-01-15" },
  { name: "Jane Smith", dateOfBirth: "1985-05-20" },
  { name: "Alice Johnson", dateOfBirth: "1995-09-10" },
];

function calculateAge(dob) {
  const [year, month, day] = dob.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day); // month - 1 because JS months are 0-based
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function PersonDetails() {
  const [persons] = useState(personsData);

  return (
    <div>
      <h2>Person Details</h2>
      {persons.map((person, index) => (
        <div key={index}>
          <p>Name: {person.name}</p>
          <p>Date of Birth: {person.dateOfBirth}</p>
          <p>Age: {calculateAge(person.dateOfBirth)} years</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

