import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Hit from "./Hit";
import Loading from "./Loading";

import { useFetch } from "./hooks/useFetch";
import { useTogglesById } from "./hooks/useTogglesById";

function App() {
  const [posts, postsLoading, postsError] = useFetch("/posts?delay=2000", []);
  const [hits, hitsLoading, hitsError] = useFetch("/hits?delay=3000", []);
  const [likes, toggleLikeById] = useTogglesById();

  return (
    <>
      <Header />
      <div className="main-container">
        <main>
          {postsLoading && <Loading />}
          {postsError && <p>{postsError}</p>}
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </main>
        <aside>
          {hitsLoading && <Loading />}
          {hitsError && <p>{hitsError}</p>}
          {hits.map((hit) => (
            <Hit
              {...hit}
              key={hit.id}
              liked={likes[hit.id]}
              toggleLike={() => toggleLikeById(hit.id)}
            />
          ))}
        </aside>
      </div>
    </>
  );
}

export default App;
