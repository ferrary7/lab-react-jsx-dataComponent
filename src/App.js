import './App.css';

function App(props) {
  return(
    <div className='App'>
      <h1>Kalvium Gallery</h1>
      <div className='Gallery'>
        {props.imageData.map((e) => {
          return <img src= {e.img} alt='img(i)' />;
        })}
      </div>
    </div>
  );
}

export default App;
