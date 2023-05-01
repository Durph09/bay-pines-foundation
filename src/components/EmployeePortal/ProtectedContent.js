import axios from "axios";
import { useState, useEffect } from "react";
import "./EmployeePortalSignIn.css"

const ProtectedContent= () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            'http://localhost:8888/wordpress/wp-json/wp/v2/posts'
          );
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className="protected-content-container">
        <h1>Welcome to the protected content!</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProtectedContent;