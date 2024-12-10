export default function StudentList(props) {
  const { title } = props;

  // js functions and computations live before the return statement

  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>
      {listData.map((item) => {
        return <div>{item.name}</div>;
      })}
    </>
  );
}

const props = {
  title: "Hello Props",
};
