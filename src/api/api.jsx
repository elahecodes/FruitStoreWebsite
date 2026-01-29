const GetProducts = async () => {
  const response = await fetch("/src/data/products.json")
    .then((res) => res.json())
  return response;
};

export { GetProducts };
