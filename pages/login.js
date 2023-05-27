export default function Login() {
  return (
    <div className="h-full flex justify-center items-center">
      {" "}
      <div className=" text-purple-500 padding p-4  w-1/2 border-2 border-purple-500">
        <div>
          <div>username</div>
          <div>
            <input className="bg-black border-purple-500 border-2 w-full p-2 rounded-lg mb-4 mt-2" />
          </div>
        </div>
        <div>
          <div>password</div>
          <div>
            <input className="bg-black border-purple-500 border-2 w-full p-2 rounded-lg mt-2" />
          </div>
        </div>
        <div>
          <button className="border-purple-500 border-2 rounded-lg w-full py-1 mt-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
