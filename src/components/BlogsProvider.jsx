import React, { useEffect, useState, createContext } from "react";
import { GetBlogs } from "../api/api";
export const blogsContext = createContext();

const BlogsProvider = ({children}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setBlogs(await GetBlogs());
    };
    fetchApi();
  }, []);

  return (
    <blogsContext.Provider value={blogs}>
        {children}
    </blogsContext.Provider>
  );
};

export default BlogsProvider;
