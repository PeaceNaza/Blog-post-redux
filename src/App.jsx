
import { useEffect } from 'react'
import { fetchposts } from './actions/blogActions'
import { useDispatch, useSelector } from 'react-redux' 


function App() { 

  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);
   
  useEffect(() => {
    dispatch(fetchposts())
  }, [dispatch]) 

  if (loading) return <p className='font-bold text-xl'>Loading...</p>
  if (error) return <p className='font-bold text-xl text-red-600'>Error loading posts</p>

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Peace Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          <span>{post.author}</span>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
