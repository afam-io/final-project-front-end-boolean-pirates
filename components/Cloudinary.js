
import { useState } from "react"
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET
//  THIS FILE IS NOW REDUNDANT, THE FUNCTION HAS BEEN BUILT INTO THE FORM COMPONENET

function Cloudinary () {
    const [imageSelected, setImageSelected] = useState("");

   

    const uploadImage = async () => {
        const formData = new FormData ()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "redeemdefault")
        

        const data = await fetch('https://api.cloudinary.com/v1_1/doolpp3ll/image/upload', {
        method: 'POST',
        body: formData
        });
        const response = await data.json()
       

        // Axios.post(
        //     "https://api.cloudinary.com/v1_1/doolpp3ll/image/upload", formData
        //     ).then((response) => {
        //         console.log(response);
        // })
    };

    return (
        <div>
            <input 
            // // onChange={() => {
            // //     console.log("thisisuploading")
            // } } 
            type="file"
             onChange={(event) => {
                setImageSelected(event.target.files[0]);
                }}

            />
            <button onClick={uploadImage}> Upload Image </button>
        </div>
    );
}

export default Cloudinary;