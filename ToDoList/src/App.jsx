import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { TbPencilCheck } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";

const tododate = 'reactToDo';
function App() {
  const [inputValue, setInputValue] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });


  const [task, setTask] = useState(() => {
    const getdata = localStorage.getItem(tododate);
    try {
      const parsed = JSON.parse(getdata);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [timeDate, setTimeDate] = useState('');

  const handleChange = (value) => {
    setInputValue({ id: value, content: value, checked: false })
  }


  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };


  const handleSubmit = (event) => {

    event.preventDefault();

    const { id, content, checked } = inputValue;

    if (!content) return;

    const checkarray = task.find((CurTask) => CurTask.content === content)

    if (checkarray) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    setInputValue({});
    console.log("Input Task:", inputValue)

  }

  //date and time
  useEffect(() => {
    const datetime = setInterval(() => {
      try {
        const date = new Date().toLocaleDateString('en-GB', {
          weekday: 'short',
          year: '2-digit',
          month: 'numeric',
          day: '2-digit'
        });
        const time = new Date().toLocaleTimeString();
        setTimeDate(`${date} - ${time}`)

      } catch (error) {
        console.error("Date-time error:", error);

      }
    }, 1000);
    return () => clearInterval(datetime);
  }, []);

  const handledelete = () => {
    setTask([]);
  }

  const handleonedelete = (val) => {
    const updatetask = task.filter((CurTask) => CurTask.content !== val.content);
    setTask(updatetask);
    console.log("Deleted : ", val)
  }

  const handlechecked = (val) => {
    const updatecheck = task.map((CurTask) => {
      if (CurTask.content === val.content) {
        return { ...CurTask, checked: !CurTask.checked }
      }
      else {
        return CurTask;
      }
    }
    );  
    setTask(updatecheck);

  }

  //set to local storage

  useEffect(() => {
    localStorage.setItem("tododate", JSON.stringify(task));
  }, [task]);


  return (
    <>
      <div className={darkMode ? "dark" : ""}>

        <section className='todo-container'>
          <button
            id='togglebutton'
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 rounded flex items-center gap-2 "
          >
            {darkMode ? (<><MdOutlineLightMode /> Light Mode</>) : (<><MdModeNight />Dark Mode</>)}
          </button>
          <h1 className='flex justify-center font-serif text-2xl mt-15 mb-5'>To do List of Ms.Chachapara</h1>
          <h3 className='date-time ' style={{ display: 'flex', alignItems: 'center' }}><IoCalendarNumberSharp style={{ marginRight: '8px', color: 'lightcoral' }} /> {timeDate}</h3>


          <section className='form'>
            <form onSubmit={handleSubmit}>
              <div><input type="text"
                onChange={(event) => handleChange(event.target.value)}
                value={inputValue.content || ''} /></div>
              <button id='inputbutton'>Add Task </button>
            </form>
          </section>
          <section className='myUnOrdList'>
            <ul>
              {
                task.map((CurTask) => {
                  return (
                    <li key={CurTask.id} className='todo-item'>
                      <span className={CurTask.checked ? 'checkList' : 'notCheckList'}>{CurTask.content}</span>
                      <button className='check-btn'><TbPencilCheck onClick={(e) => handlechecked(CurTask)} /></button>
                      <button className='delete-btn'><AiOutlineDelete onClick={(e) => handleonedelete(CurTask)} /></button>
                    </li>
                  );
                })
              }
            </ul>
          </section>
          <button className='clear-btn ' style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }} onClick={handledelete}> Clear All <FcDeleteDatabase className='ml-2 text-3xl' /></button>
        </section>
      </div>
    </>
  )
}

export default App
