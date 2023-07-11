import Articles from './components/articles'
import Users from './components/users'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Skeletons</h1>

      </header>
      <div className="content">
          <Articles/>
          <Users/>
      </div>
    </div>
  );
}

export default App;
