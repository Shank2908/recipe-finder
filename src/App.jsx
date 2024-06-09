import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RecipeSearchBox from './components/RecipeSearchBox';


function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RecipeSearchBox />

      </div>
    </div>
  );
}

export default App;
