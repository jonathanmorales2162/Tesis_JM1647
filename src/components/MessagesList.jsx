import React, { useState, useEffect } from 'react';

const MessagesList = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`http://localhost:3000/messages/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div className="container bg-dark text-white p-3">
      <h2>Messages</h2>
      {loading && <p>Loading...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group list-group-flush">
        {messages.map((message, index) => (
          <li key={index} className="list-group-item bg-secondary text-white">
            From: {message.sender_id} - {message.message_text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
