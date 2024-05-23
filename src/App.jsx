
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
    <>
      <h1 className='text-3xl font-bold text-center'>Peace Blog Posts</h1>
      <div className='grid grid-cols-2 mt-5'>
      {posts.map(post => (
        <div key={post.id} className='border m-3 p-3'>
          <h1 className='font-bold text-lg'>{post.title}</h1>
          <p className='text-xs'>{post.date}</p>
          <span className='text-xs'>{post.author}</span>
          <p className='text-sm'>{post.content}</p>
        </div>
      ))}
      </div>
      
    </>
  )
}

export default App
