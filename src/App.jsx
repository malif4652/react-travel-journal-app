import Content from "./components/Content";
import Header from "./components/Header";

import data from "./db/database.js";

const blog = data.map((blogData) => {
  return <Content key={blogData.id} content={blogData} />;
});

function App() {
  return (
    <>
      <Header />
      {blog}
    </>
  );
}

export default App;
