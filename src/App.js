import logo from './logo.svg';
import './App.css';

function App() {
  const toggleSubMenu = (e) => {
    const button = e.currentTarget;
    const submenu = button.nextElementSibling;
    const arrow = button.querySelector('span:last-child');

    if (submenu) {
      submenu.classList.toggle('show'); // Toggles visibility
      arrow.classList.toggle('rotate'); // Toggles rotation of the arrow
    }
  };

  return (
    <div className="App">
      <nav id='sidebar'>
        <ul>
          <li className='first-child'>
            <span className='logo'>coding2go</span>
            <button id='toggle-btn'>
              <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
            </button>
          </li>
          <li className='active'>
            <a href='#'>
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <button onClick={toggleSubMenu} className='dropdown-btn'>
              <span class="material-symbols-outlined">create_new_folder</span>
              <span className='dropdown'>Create</span>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <ul className='sub-menu'>
                <div>
                <li>
                  <a href='#'>Folder</a>
                </li>
                <li>
                  <a href='#'>Document</a>
                </li>
                <li>
                  <a href='#'>Project</a>
                </li>
                </div>
              </ul>
          </li>
          <li>
            <button onClick={toggleSubMenu} className='dropdown-btn'>
              <span class="material-symbols-outlined">checklist</span>
              <span className='dropdown'>To-Do-List</span>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <ul className='sub-menu'>
                <div>
                  <li>
                    <a href='#'>Work</a>
                  </li>
                  <li>
                    <a href='#'>Private</a>
                  </li>
                  <li>
                    <a href='#'>Coding</a>
                  </li>
                  <li>
                    <a href='#'>Gardening</a>
                  </li>
                  <li>
                    <a href='#'>School</a>
                  </li>
                </div>
              </ul>
          </li>
          <li>
            <a href='#'>
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Calender</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class="material-symbols-outlined">person</span>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div className='container'>
          <h2>React App</h2>
          <p>Learning to code can open doors to endless possibilities, from creating innovative applications to solving real-world problems. With consistent practice, the once-complicated syntax becomes second nature. Start small, experiment, and embrace mistakes—they’re part of the journey. Every line of code brings you closer to mastering this powerful skillset.</p>
        </div>
        <div className='container'>
          <h2>React App</h2>
          <p>Traveling broadens the mind, exposing you to diverse cultures, cuisines, and perspectives. Each destination offers unique experiences, whether exploring ancient ruins, hiking breathtaking landscapes, or enjoying vibrant city life. Memories forged on these journeys often become cherished stories, enriching your life and fostering an appreciation for the world’s vast beauty.</p>
        </div>
        <div className='container'>
          <h2>React App</h2>
          <p>Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery. Reading is a gateway to countless adventures and a wealth of knowledge. Whether fiction or nonfiction, books transport us to different worlds, sparking creativity and expanding horizons. Through the written word, we connect with diverse viewpoints, deepen our understanding of humanity, and cultivate a lifelong love for learning and discovery.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
