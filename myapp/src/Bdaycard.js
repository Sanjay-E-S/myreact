import { useState } from "react";

const Bdaycard = () => {
    const [tile, setTile] = useState([
        { title: 'Bertie Astes', age: 29, img: 'images/img-1.jpg', id: 1 },
        { title: 'Bertie Astes', age: 29, img: 'images/img-1.jpg', id: 2 },
        { title: 'Bertie Astes', age: 29, img: 'images/img-1.jpg', id: 3 },
        { title: 'Bertie Astes', age: 29, img: 'images/img-1.jpg', id: 4 },
        { title: 'Bertie Astes', age: 29, img: 'images/img-1.jpg', id: 5 },
    ])

    const handledelete = () => {
        setTile([]);
    }

    return (
        <div className="bdaycard">
            <div className="bdaycard-outer">
                <h2>5 Birthdays Today</h2>
                <div className="bdaytile-outer">
                    {tile.map((item) => {
                        return (
                            <div className="bdaycard-tile" key={item.id}>
                                <img src={item.img} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.age} Years</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={handledelete}>Clear All</button>
            </div>
        </div>
    );
}

export default Bdaycard;