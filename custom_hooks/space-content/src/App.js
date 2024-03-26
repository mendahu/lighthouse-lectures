import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Hit from "./components/Hit";
import Loading from "./components/Loading";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const posts = useFetchData("/posts");
  const hits = useFetchData("/hits");

  return (
    <>
      <Header />
      <div className="main-container">
        <main>
          <h2>
            Posts <button onClick={posts.fetchData}>Load</button>
          </h2>
          {posts.loading && <Loading />}
          {posts.error && <p>Error! Code: {posts.error}</p>}
          {posts.data.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </main>
        <aside>
          <h2>
            Hits <button onClick={hits.fetchData}>Load</button>
          </h2>
          {hits.loading && <Loading />}
          {hits.error && <p>Error! Code: {hits.error}</p>}
          {hits.data.map((hit) => {
            return <Hit key={hit.id} {...hit} />;
          })}
        </aside>
      </div>
    </>
  );
}

export default App;
