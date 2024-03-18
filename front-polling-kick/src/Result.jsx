import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Result = () => {
  const [pollResults, setPollResults] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('pollResults', (data) => {
      setPollResults(data);
    });

    socket.on('quizResults', (data) => {
      setQuizResults(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {pollResults && (
        <div>
          <h2> Resultat du sondage </h2>
          {Object.entries(pollResults).map(([vote, percentage]) => (
            <p key={vote}>
              {vote}: {percentage.toFixed(2)}%
            </p>
          ))}
        </div>
      )}

      {quizResults && (
        <div>
          <h2>Gagnants: </h2>
          {quizResults.map((user) => (
            <p key={user}>{user}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;