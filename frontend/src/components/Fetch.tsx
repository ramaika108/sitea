
const Fetch = async (uri:string, setterFunction:Function) => {
    let res = await fetch(uri);
    let data = await res.json();
    setterFunction(data);
}

export default Fetch;
