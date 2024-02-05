import { useCallback, useEffect } from 'react';

const Centrifuge = require('centrifuge');

const unitId = '122a751b-2c25-4412-a945-87959a5dd450';

export default function Home() {
  const connectWebSocketTracking = useCallback(() => {
    console.log('render');

    const centrifuge = new Centrifuge(process.env.WEBSOCKET);

    centrifuge.on('connect', function (ctx: {}) {
      console.log('websocket tracking connnect: ', ctx);
    });

    centrifuge.on('disconnect', function (ctx: {}) {
      console.log('websocket tracking disconnect: ', ctx);
    });

    centrifuge.subscribe(
      `${process.env.CHANNEL_TRACKING}/${unitId}`,
      (ctx: { data: {} }) => {
        console.log('unit: ', ctx.data);
      }
    );

    centrifuge.connect();

    return () => centrifuge.disconnect();
  }, []);

  useEffect(() => {
    connectWebSocketTracking();
  }, []);

  return <>Home</>;
}
