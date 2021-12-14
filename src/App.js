import './App.css';
import { useState } from "react";

function App() {

  const [entry, setEntry] = useState("");
  const [search, setSearch] = useState("");
  const [listEntry, setListEntry] = useState([
    { name: "finir Trendy Bags", done: true },
    { name: "faire ToDo list", done: false },
    { name: "false", done: false },
  ]);

  return (
    <div className="App">
      <span className="title">to do list</span>
      {/* Fonction Recherche */}
      <input value={search} type="text" onChange={(e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
      }}></input>
      <span className="title">résultat de la recherche</span>
      {/* ************* */}

      {listEntry.filter((a) => {
        return a.name.toLowerCase().includes(search);
      }).map((item, i) => {
        return <div className="item"> {item.name}
          <div className="icons">
            <svg onClick={(e) => {
              // console.log("i : " + i);
              const listCopy = [...listEntry];
              console.log(listCopy[i].done = true);
              setListEntry(listCopy);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#73c715" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <svg onClick={(e) => {
              // console.log("i : " + i);
              const listCopy3 = [...listEntry];
              listCopy3.splice(i, 1);
              setListEntry(listCopy3);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e90c0c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </div>
        </div>;
      })}

      <input value={entry} type="text" onChange={(e) => {
        console.log(e.target.value);
        setEntry(e.target.value);
      }}></input>
      <button onClick={() => {
        // faire une copie du tableau state
        const todolistCopy = [...listEntry];
        todolistCopy.push({ name: entry, done: false });
        setListEntry(todolistCopy);
        setEntry("");
      }}>Ajouter la tâche</button>

      {/********************************************************************************************************************* */}

      <span className="title">A faire</span>
      {listEntry.filter((i) => {
        return i.done === false;
      }).map((item, i) => {
        return <div className="item"> {item.name}
          <div className="icons">
            <svg onClick={() => {
              // console.log("i : " + i);
              const listCopy = [...listEntry];
              let position = 0;
              for (let q = 0; q < listCopy.length; q++) {
                if (listCopy[q].name === item.name) {
                  position = q;
                }
              }
              listCopy[position].done = true;
              setListEntry(listCopy);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#73c715" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <svg onClick={() => {
              console.log("i : " + i);
              const listCopy2 = [...listEntry];
              let position = 0;
              for (let q = 0; q < listCopy2.length; q++) {
                if (listCopy2[q].name === item.name) {
                  position = q;
                }
              }
              listCopy2.splice(position, 1);
              setListEntry(listCopy2);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e90c0c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </div>
        </div>;
      })}

      <span className="title">Fini</span>
      {listEntry.filter((i) => {
        return i.done === true;
      }).map((item, i) => {
        return <div className="item"> {item.name}
          <div className="icons">
            <svg onClick={() => {
              // console.log("i : " + i);
              const listCopy = [...listEntry];
              let position = 0;
              for (let q = 0; q < listCopy.length; q++) {
                if (listCopy[q].name === item.name) {
                  position = q;
                }
              }
              listCopy[position].done = false;
              setListEntry(listCopy);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3zM8 12h8" /></svg>
            <svg onClick={() => {
              console.log("i : " + i);
              const listCopy2 = [...listEntry];
              let position = 0;
              for (let q = 0; q < listCopy2.length; q++) {
                if (listCopy2[q].name === item.name) {
                  position = q;
                }
              }
              listCopy2.splice(position, 1);
              setListEntry(listCopy2);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e90c0c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </div>
        </div>;
      })}


    </div>
  );
}

export default App;
