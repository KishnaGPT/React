import { ContactCard } from "./ContactCard";
import { contacts } from "./Contacts";
export function App(){



  const liststyle={
    textAlign:"Center",
    padding:"20px",
  } 

  return <>
    <div style={liststyle}>
      <h1>Contact List</h1>
      {contacts.map((contact, index)=>(
        <ContactCard 
          key={index}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          address={contact.address}
        />
      ))}
    </div>
  </>
}
