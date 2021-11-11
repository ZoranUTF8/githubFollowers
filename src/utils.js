const paginate = (followers) => {
  //! separate the main array to smaller arrays to be able to paginate
  const itemsPerPage = 12;
  const numOfPages = Math.ceil(followers.length / itemsPerPage);

  //?  creates a new, shallow-copied Array instance from an array-like or iterable object.
  const newFollowers = Array.from(
    {
      length: numOfPages,
    },//? lenght of our new array
    (_, index) => {
      const start = index * itemsPerPage;

      return followers.slice(start, start + itemsPerPage); //? grabs items from the followrs arrays
    }
  );
  return newFollowers;
};

export default paginate;
