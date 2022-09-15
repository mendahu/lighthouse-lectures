import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Hit from "./Hit";
import useFetch from "./useFetch";
import Loading from "./Loading";

function App() {
  const [posts, isPostsLoading, postsError] = useFetch("/posts?delay=2000", []);
  const [hits, isHitsLoading, hitsError] = useFetch("/hits?delay=1000", []);

  return (
    <>
      <Header />
      <div class="main-container">
        <main>
          {isPostsLoading && <Loading />}
          {postsError && <p>{postsError}</p>}
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </main>
        <aside>
          {isHitsLoading && <Loading />}
          {hitsError && <p>{hitsError}</p>}
          {hits.map((hit) => (
            <Hit {...hit} key={hit.id} />
          ))}
        </aside>
      </div>
    </>
  );
}

export default App;
