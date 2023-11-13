import axios from "axios";

export const fileUploadActions = (formdata) => async (dispatch) => {
  try {
    dispatch({
      type: "fileUploadRequest",
    });

    await axios.post("/api/v1/upload/file", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: "fileUploadSuccess",
      payload: "Post submitted",
    });
  } catch (error) {
    dispatch({
      type: "fileUploadFail",
      payload: error.reponse.data.message,
    });
  }
};


export const getFileActions = () => async (dispatch) => {
  try {
    dispatch({
      type: "getFileRequest",
    });

    const {data}=await axios.get("/api/v1/get/file");

    dispatch({
      type: "getFileSuccess",
      payload:data
    });
  } catch (error) {
    dispatch({
      type: "getFileFail",
      payload: error.reponse.data.message,
    });
  }
};

