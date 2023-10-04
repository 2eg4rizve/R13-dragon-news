import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])




    return (
        <div className="space-y-4">
            <h2 className="text-3xl ">All Catagories</h2>

            {
                catagories.map(catagory =>
                    <Link
                        className="block ml-4 text-xl font-semibold"
                        key={catagory.id}
                        to={`/category/${catagory.id}`}
                    >
                        {catagory.name}
                    </Link>)
            }


        </div>
    );
};

export default LeftSideNav;