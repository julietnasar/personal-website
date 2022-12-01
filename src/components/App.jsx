import "../styles.css";
import ProjectTile from "./Project-Tile";

function App() {
  return (
    <div className="App">
      <h4>
        Hi <span role="img">👋</span> I'm Juliet
      </h4>
      <h2>
        Creative Developer Looking for Opportunities in Sofware Engineering
      </h2>
      <h2>Check out my projects below!</h2>
      <ProjectTile
        name="Memory Allocator"
        path="../images/memory_allocator.png"
        summary="a memory allocator summary"
      />
    </div>
  );
}

export default App;
