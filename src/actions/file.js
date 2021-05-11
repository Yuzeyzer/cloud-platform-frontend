import axios from 'axios';
import { showLoader, hideLoader } from '../reducers/appReducer';
import { setFiles, addFile, deleteFileAction } from '../reducers/fileReducer';
import { addUploadFile, showUploadFile, changeUploadFile } from '../reducers/uploadReducer';

export const getFiles = (dirId, sort) => {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      let url = `http://localhost:8080/api/files`;

      if (dirId) {
        url = `http://localhost:8080/api/files?parent=${dirId}`;
      }

      if (sort) {
        url = `http://localhost:8080/api/files?sort=${sort}`;
      }

      if (dirId && sort) {
        url = `http://localhost:8080/api/files?parent=${dirId}&sort=${sort}`;
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setFiles(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const createDir = (dirId, name) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/files`,
        {
          name,
          parent: dirId,
          type: 'directory',
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      dispatch(addFile(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadFile = (file, dirId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      if (dirId) {
        formData.append('parent', dirId);
      }

      const uploadFile = { name: file.name, progress: 0, id: Date.now() };
      dispatch(showUploadFile());
      dispatch(addUploadFile(uploadFile));

      const response = await axios.post(`http://localhost:8080/api/files/upload`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader('x-decompressed-content-length');

          if (totalLength) {
            uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength);
            // Пофиксить баг
            dispatch(changeUploadFile(uploadFile));
          }
        },
      });

      dispatch(addFile(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    finally {
      dispatch(hideLoader());
    }
  };
};

export async function downloadFile(file) {
  const response = await fetch(`http://localhost:8080/api/files/download?id=${file._id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  console.log(response, 'Это response');
  if (response.status === 200) {
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

export function deleteFile(file) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/files?id=${file._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response);
      dispatch(deleteFileAction(file._id));
      console.log(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };
}


export function searchFiles(searchName) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/files/search?search=${searchName}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response);
      dispatch(setFiles(response.data))
    } catch (err) {
      console.log(err);
    }
  };
}
