import { useState } from "react";

function FileUpload({ onPdfFileChange }) {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);

  //   setPdfFile(files);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Check if the selected file is a PDF
      if (selectedFile.type === "application/pdf") {
        // Check if the file size is less than or equal to 3MB (3 * 1024 * 1024 bytes)
        if (selectedFile.size <= 3 * 1024 * 1024) {
          setFiles([selectedFile]);
          onPdfFileChange(selectedFile);
          setError(null);
        } else {
          setError("File size should be less than or equal to 3MB.");
          setFiles(null);
        }
      } else {
        setError("Only PDF files are allowed.");
        setFiles(null);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("active");
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("active");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("active");

    // Check if any files were dropped
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      const droppedFile = event.dataTransfer.items[0].getAsFile();

      if (droppedFile) {
        // Check if the dropped file is a PDF
        if (droppedFile.type === "application/pdf") {
          // Check if the file size is less than or equal to 3MB (3 * 1024 * 1024 bytes)
          if (droppedFile.size <= 3 * 1024 * 1024) {
              setFiles([droppedFile]);
               onPdfFileChange(droppedFile);
            setError(null);
          } else {
            setError("File size should be less than or equal to 3MB.");
            setFiles(null);
          }
        } else {
          setError("Only PDF files are allowed.");
          setFiles(null);
        }
      }
    }
  };

  //   const filesize = (size) => {
  // Implement your filesize function logic here
  //   };

  return (
    <div className="flex flex-col flex-grow mb-3">
      <div
        id="FileUpload"
        className={`block w-full py-2 px-3 relative bg-white appearance-none border-2 border-gray-300 border-solid rounded-md hover:shadow-outline-gray ${
          error ? "border-red-500" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf" // Accept only PDF files
          className="absolute inset-0 z-50 m-0 p-0 w-full h-full outline-none opacity-0"
          onChange={handleFileChange}
        />
        {files !== null ? (
          <div className="flex flex-col space-y-1">
            {/* Display selected file information */}
            <div className="flex flex-row items-center space-x-2">
              <i className="far fa-file-pdf fa-fw"></i>
              <span className="font-medium text-gray-900">{files[0].name}</span>
              {/* <span className="text-xs self-end text-gray-500">
                {filesize(files[0].size)}
              </span> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 items-center justify-center">
            <i className="fas fa-cloud-upload-alt fa-3x text-currentColor"></i>
            <p className="text-gray-700">
              {error || "Drag your PDF file here or click in this area."}
            </p>
            <label className="flex items-center mx-auto py-2 px-4 text-white text-center font-medium border border-transparent rounded-md outline-none bg-red-700">
              Select a PDF file
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
