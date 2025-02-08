import { useQuery} from "@tanstack/react-query";
import { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const Post = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then(res => {res.posts});
          console.log(res)

          return res
      } catch (error) {
        console.log(error)
      }

    },
  });
  return (
    <Fragment>
      <div className="fw-bold fs-1">post</div>
      
      {data?.map(({title, id, body})=>(

        <Container>
         <br />
         <Card key={id}>
         <Card.Header>{title}</Card.Header>
         <Card.Body>
           <blockquote className="blockquote mb-0">
             <p>
              {body}
             </p>
             <footer className="blockquote-footer">
               Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
           </blockquote>
         </Card.Body>
       </Card>
       <br />
       </Container>
     ))}
        

    </Fragment>
  );
};

export default Post;





