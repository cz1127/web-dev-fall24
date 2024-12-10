import StudentList from "./components/StudentList";

const students = [
  { name: "katie", grade: "A+++" },
  { name: "Mark", grade: "F" },
  { name: "Tony", grade: "B+" },
];

// Default function
export default function App() {
  return (
    <div>
      <StudentList title="Hello Props" listData={students} />
      <StudentList title="Anoter title prop" />
    </div>
  );
}
