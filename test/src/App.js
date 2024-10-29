import './App.css';

function App() {

      let posts = "React 공부 방법 1"

      function 함수() {
            return 100;
      }

      return (
            <div className="App">
                  <div className='black-nav'>
                        <div>React 개발 Blog</div>
                  </div>
                  <h4> {posts} </h4>
                  <h4> {함수()} </h4>
            </div>
      );
}

export default App;
