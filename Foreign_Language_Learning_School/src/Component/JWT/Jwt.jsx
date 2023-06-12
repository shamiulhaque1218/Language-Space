

const Jwt = () => {
   const handlejwt = () => {

    console.log("Clicked");
    fetch(`http://localhost:5000/jwt`, {
        method:"POST",
        headers: {
            "content-type":"application/json",
        }, body: JSON.stringify({username: "shamiulhaque"}),
    }).then((res)=> res.json()).then((data) => localStorage.setItem("access-token", data?.token))

    }
    return (
        <div className="p-5">
            <button onClick={handlejwt} className=" text-center bg-amber-400 px-5 py-2 rounded-lg text-white">jwt</button>
        </div>
    );
};

export default Jwt;