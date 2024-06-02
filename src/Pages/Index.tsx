
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import { useEffect } from 'react';
const Index = () => {
  useEffect(() => {
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
        <Header width='full' active="Home" isLoggedIn={false} />
        <Welcome />
    </>
  )
}

export default Index
