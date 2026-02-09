const GetProducts = async () => {
  const response = await fetch("/src/data/products.json")
    .then((res) => res.json())
  return response;
};

const GetBlogs = async ()=>{
  const response = await fetch('/src/data/blogs.json').then(res => res.json())
  return response;
}

export { GetProducts , GetBlogs };
