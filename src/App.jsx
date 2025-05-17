import './App.css'

// src/App.jsx
import PostItem from './PostItem';
import { posts } from './posts';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;