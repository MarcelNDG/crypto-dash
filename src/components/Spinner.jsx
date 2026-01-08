import { ClipLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: "2rem auto",
}


const Spinner = ({color = 'blue', size = 150 }) => {


        return ( 
        
        <div className="spinner-container">
            <ClipLoader 
            size={size} 
            color={color}
            
            cssOverride={override}
            />
        </div>
        
     );

    }

    

 
export default Spinner;