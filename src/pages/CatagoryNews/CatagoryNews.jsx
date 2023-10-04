import { useParams } from "react-router-dom";


const CatagoryNews = () => {
    const {id} =useParams();
    return (
        <div>

            <p>id : {id}</p>
            
        </div>
    );
};

export default CatagoryNews;