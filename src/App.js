import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          {" "}
          Coded by{" "}
          <a href="https://ashleyrebeccaxr.com/" targer="_blank">
            Ashley Goldstein
          </a>{" "}
          and is{" "}
          <a href="https://github.com/aivxx/Dictionary-App" target="_blank">
            open-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
