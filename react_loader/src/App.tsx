import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setProgress(0);
      try {
        setProgress(50);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setProgress(70);
        const data = await response.json();
        console.log(data);
        setProgress(100);
      } catch (e) {
        setProgress(50);
        console.log(e);
        setProgress(70);
      }

    }
    fetchData();
  }, []);

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br />
    </div>
  )
}

export default App