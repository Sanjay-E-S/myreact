import { useState, useEffect } from "react";
import Tilelist from "./Tilelist";

const Bodysec = () => {
    const [blogs, setblogs] = useState([
        { title: 'My Profile', body: 'lorem ipsum...', owner: 'Sanjay', id: 1 },
        { title: 'My Story', body: 'lorem ipsum...', owner: 'Sooraj', id: 2 },
        { title: 'My Fat', body: 'lorem ipsum...', owner: 'Rajesh', id: 3, delete: true }
    ])

    // const [name, setname] = useState('Sanjay');
    const [IsPending, setPending] = useState(true);

    const handledelete = (id) => {
        const newblog = blogs.filter(blog => blog.id !== id);
        setblogs(newblog);
    }

    useEffect(() => {
        console.log('Running Succesfully');
        // console.log(name);
    }, []);

    setTimeout(() => {
        setPending(false);
    }, 1000)

    // { IsPending && <div>Running</div> }
    if (IsPending) return <div>............</div>

    return (
        <div className="bodysec">
            <Tilelist blogs={blogs} title={'Hi All'} handledelete={handledelete} />
            {/* <Tilelist blogs={blogs.filter((blog) => blog.id === 3)} title={'Hi Sir'} handledelete={handledelete} /> */}
            {/* <button onClick={() => setname('Sooraj')}>Change</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Bodysec;