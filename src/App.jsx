import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUploadActions, getFileActions } from "../actions/fileUpload";

function App() {
  const dispatch = useDispatch();

  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  const { image: uploadImage } = useSelector((state) => state.fileUpload);

  useEffect(() => {
    dispatch(getFileActions());
  }, [dispatch]);

  const imageHandler = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const setImageHandler = async (e, image) => {
    e.preventDefault();
    const form = new FormData();

    form.append("file", image);

    await dispatch(fileUploadActions(form));
    setImagePrev("");
    setImage("");
    dispatch(getFileActions());
  };

  return (
    <>
      <form
        onSubmit={(e) => setImageHandler(e, image)}
        encType="multipart/form-data"
      >
        <input type="file" onChange={(e) => imageHandler(e)} />
        <button type="submit">Submit</button>
      </form>

      {imagePrev && (
        <div>
          <>
            <p>Image Preview</p>
            <img src={imagePrev} />
          </>
        </div>
      )}

      <div>
        {uploadImage?.file?.map((item) => (
          <img key={item._id} src={item?.file} alt="photo" />
        ))}
      </div>
    </>
  );
}

export default App;
