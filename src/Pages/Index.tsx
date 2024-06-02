
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
const Index = () => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error fetching data:'+ error));

  return (
    <>
        <Header width='full' active="Home" isLoggedIn={false} />
        <Welcome />
    </>
  )
}

export default Index
