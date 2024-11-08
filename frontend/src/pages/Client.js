import React, { useEffect, useState } from 'react';
import { fetchClients } from '../services/api';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadClients = async () => {
      const data = await fetchClients();
      setClients(data);
    };
    loadClients();
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client._id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
