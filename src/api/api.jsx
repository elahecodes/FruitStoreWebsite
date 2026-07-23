const GetProducts = async () => {
  const response = await fetch("/data/products.json").then((res) => res.json());
  return response;
};

const GetNotification = async () => {
  const response = await fetch("/data/notification.json").then((res) =>
    res.json(),
  );
  return response;
};

const GetBlogs = async () => {
  const response = await fetch("/data/blogs.json").then((res) => res.json());
  return response;
};

export { GetProducts, GetBlogs, GetNotification };
