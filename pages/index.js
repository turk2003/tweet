import { useEffect, useState } from "react";

export default function Indexpage() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    loadlist();
  }, []);
  const tweet = () => {
    if (inputValue !== "" && name !== "") {
      setInputValue("");
      setName("");
      fetch("https://api.zenon.si/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, content: inputValue }),
      }).then(() => loadlist());
    }
  };

  const loadlist = () => {
    fetch("https://api.zenon.si/post")
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  return (
    <div className="min-h-full bg-blue-100 flex flex-col items-center">
      <div className="w-1/2  flex flex-col items-end ">
        <div className="bg-white p-2 text-black mt-5 rounded-lg shadow w-full">
          <textarea
            placeholder="name....."
            rows={1}
            className=" outline-none w-full resize-none mt-5"
            onChange={(e) => setName(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="bg-white p-4 text-black mt-5 rounded-lg shadow w-full  ">
          <textarea
            placeholder="type................"
            rows={5}
            className=" outline-none w-full resize-none mt-5"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          onClick={tweet}
          className="text-white bg-blue-300 p-2 rounded-lg mt-2"
        >
          Tweet
        </button>
        <button className="text-black" onClick={loadlist}>
          refesh
        </button>
        <div className=" mt-8 w-full">
          {list.map((data) => {
            return (
              <div
                key={data.id}
                className="mt-2 bg-white  text-black rounded-lg shadow  p-4 "
              >
                <h1 className="text-xl font-cold">{data.name}</h1>
                <div className="text-gray-600">{data.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
