
import { useMutation, } from "@tanstack/react-query";
import { useQuery, QueryClient } from '@tanstack/react-query'
import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
{/* const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const json = await res.json();
      console.log("Fetched data:", json); // Debugging log
      return json.posts || []; // Ensure it returns an array
    } catch (error) {
      console.error("Error fetching posts:", error);
      return []; // Avoid undefined errors
    }
  },
});
 */}
const Post2 = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const json = await res.json();
{/*        console.log(json)
*/}        return json.posts; // Ensure we return the posts array

      } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Return an empty array to prevent map errors
      }
    },
  });
  const queryClient = useQuery 

  // Delete Post
  const deletePost = useMutation({
    mutationFn : async (postId) => {
        const res = await fetch (`https://dummyjson.com/${postId}`, {
            method : "DELETE"
        })
        return res.json()
    }, 
    onSuccess : (data, postId) => {
        console.log(data, postId)
        queryClient.setQueryData(["posts"], (curEle)=>{
          return curEle.filter((post)=>post.id !== postId)
        })
    },
  });

  // Update Post
  const updatePost = useMutation({
    mutationFn: async ({postId, title, body}) => {
      const res = await fetch(`https://dummyjson.com/${postId}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body})
      });
      return res.json();
    },
    onSuccess:(updatePost)=>{//updated post object returned by the API
      queryClient.setQueryData(["posts"], (curEle) => {
        return curEle.map((post)=>{post.id === updatePost.id ? updatePost : post})
      });
      

    }
  })
  return (
    <Fragment>
      <div className="fw-bold fs-1">Posts</div>

      {data && data.length > 0 ? (
        data.map(({ title, id, body }) => (
          <Container key={id}>
            <br />
            <Card>
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{body}</p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                  <button onClick={()=>{deletePost.mutate(id)}}>Delete</button>
                </blockquote>
              </Card.Body>
            </Card>
            <br />
          </Container>
        ))
      ) : (
        <p>Loading...</p> // Show loading message until data is available
      )}
     
      
      {/*function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
} */}
    </Fragment>
  );
};

export default Post2;
