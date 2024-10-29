import React, { useState } from 'react';
import './App.css';

function App() {

      // ES6 destructuring 문법
      let [title,changeTitle] = useState(['개발 언어 추천', '개발 툴 추천']); // [state 데이터,state 데이터 변경 함수]

      return (
            <div className="App">
                  <div className='black-nav'>
                        <div>
                              개발 블로그
                        </div>
                  </div>
                  <div className='list'>
                        <h3>
                              { title }
                        </h3>
                        <p>
                              10월 29일 화요일 발행
                        </p>
                        <hr />
                  </div>
                  <div className='list'>
                        <h3>
                              { title[0] }
                        </h3>
                        <p>
                              11월 3일 화요일 발행
                        </p>
                        <hr />
                  </div>
                  <div className='list'>
                        <h3>
                              { title[1] }
                        </h3>
                        <p>
                              11월 12일 화요일 발행
                        </p>
                        <hr />
                  </div>
            </div>
      )
}

export default App;
