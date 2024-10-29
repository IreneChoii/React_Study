import React, { useState } from 'react';
import './App.css';

function App() {

      let [title, changeTitle] = useState(['개발 언어 추천', '개발 툴 추천', '개발1', '개발2']);
      let [thumb, changeThumb] = useState(0);

      return (
            <div className="App">
                  <div className='black-nav'>
                        <div>
                              개발 블로그
                        </div>
                  </div>
                  <div className='list'>
                        <h3>
                              { title[0] } <span onClick={ () => { return changeThumb+1; } }> 👍🏻 </span> {thumb}
                        </h3>
                        <p>
                              10월 29일 화요일 발행
                        </p>
                        <hr />
                  </div>
                  <div className='list'>
                        <h3>
                              { title[1] }
                        </h3>
                        <p>
                              11월 3일 화요일 발행
                        </p>
                        <hr />
                  </div>
                  <div className='list'>
                        <h3>
                              { title[2] }
                        </h3>
                        <p>
                              11월 12일 화요일 발행
                        </p>
                        <hr />
                  </div>
                  <div className='list'>
                        <h3>
                              { title[3] }
                        </h3>
                        <p>
                              11월 28일 화요일 발행
                        </p>
                        <hr />
                  </div>
            </div>
      )
}

export default App;