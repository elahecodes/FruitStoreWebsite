import React, { useEffect, useState, createContext } from "react";
import { GetBlogs } from "../api/api";
export const blogsProvider = createContext();
const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setBlogs(await GetBlogs());
    };
    fetchApi();
  }, []);
  return (
    <blogsProvider.Provider value={blogs}>
        {children}
    </blogsProvider.Provider>
  );
};

export default BlogsProvider;
