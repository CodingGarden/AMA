const [serverData, setServerData] = useState([]);

// STUFF HAPPENS

console.log('Fetching data...');
Promise.all(serverData.map(async (server) => {
  try {
    await fetchWithTimeout(server.url, {
      method: 'GET',
      mode: 'no-cors',
    });
    return {
      ...server,
      isUp: true,
    };
  } catch (error) {
    return {
      ...server,
      isUp: false,
    };
  }
})).then(setServerData);
