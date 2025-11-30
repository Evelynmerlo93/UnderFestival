// src/pages/TicketPage.jsx
import React, { useState } from "react";

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  const handleAddTicket = () => {
    if (!newTicket.trim()) return;
    setTickets([...tickets, { id: Date.now(), title: newTicket }]);
    setNewTicket("");
  };

  const handleDeleteTicket = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket
