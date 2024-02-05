import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Home() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [timeStamp, setTimeStamp] = useState<{} | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition((prev) => [
          position.coords.latitude,
          position.coords.longitude,
        ]);
        setTimeStamp((prev) => position.timestamp);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <p>{JSON.stringify(position)}</p>
      <p>{JSON.stringify(dayjs(timeStamp as Date).format('HH:mm:ss'))}</p>
    </>
  );
}
