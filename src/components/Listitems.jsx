function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Mehul Coding",
  ];

  return (
    <div className="flex overflow-x-scroll hide-scrollbar px-4">
      <div className="ml-14 md:ml-0 flex space-x-4 flex-nowrap">
        {categories.map((category) => (
          <div
            key={category}
            className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
