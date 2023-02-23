const getHashnodePosts = async (query, variables = {}) => {
  const response = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const res = await response.json();
  return res.data.user.publication.posts;
};

export default getHashnodePosts;