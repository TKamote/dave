import React, { useState, useRef, useEffect } from "react";
import "./InspectionForm.css";
import { useNavigate } from "react-router-dom";

interface InspectionItem {
  id: string;
  image: string | null;
  serialNo: string;
  location: string;
  observation: string;
}

const InspectionForm: React.FC = () => {
  const [inspectionItems, setInspectionItems] = useState<InspectionItem[]>([
    {
      id: "1",
      image: null,
      serialNo: "",
      location: "",
      observation: "",
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Add a state to track if the device is mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Add useEffect to check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInspectionItems((items) =>
          items.map((item) =>
            item.id === itemId
              ? { ...item, image: reader.result as string }
              : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      // Here you would implement the camera capture UI
      // For now, just opening file dialog as placeholder
      fileInputRef.current?.click();
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const handleDelete = (itemId: string) => {
    setInspectionItems((items) => items.filter((item) => item.id !== itemId));
  };

  const handleAdd = () => {
    setInspectionItems((items) => [
      ...items,
      {
        id: Date.now().toString(),
        image: null,
        serialNo: "",
        location: "",
        observation: "",
      },
    ]);
  };

  const handleReset = () => {
    setInspectionItems([
      {
        id: Date.now().toString(),
        image: null,
        serialNo: "",
        location: "",
        observation: "",
      },
    ]);
  };

  const handleExport = () => {
    // TODO: Implement Word document export
    console.log("Exporting to Word...", inspectionItems);
  };

  return (
    <div className="inspection-form-container">
      <div className="top-buttons">
        <button onClick={() => navigate("/")} className="back-btn">
          ← Back to Home
        </button>
        <div>
          <button onClick={handleExport} className="export-btn">
            Export
          </button>
          <button onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </div>

      {inspectionItems.map((item) => (
        <div key={item.id} className="inspection-card">
          <div className="image-upload-section">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, item.id)}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <div className="image-preview">
              {item.image ? (
                <div className="image-container">
                  <img src={item.image} alt="Preview" />
                  <div className="image-overlay">
                    <button
                      className="remove-image"
                      onClick={() =>
                        setInspectionItems((items) =>
                          items.map((i) =>
                            i.id === item.id ? { ...i, image: null } : i
                          )
                        )
                      }
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <i className="fas fa-camera"></i>
                    <span>No Image Selected</span>
                    <span className="subtitle">Click to upload or capture</span>
                  </div>
                </div>
              )}
            </div>
            <div className="image-buttons">
              <button
                className="upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <i className="fas fa-upload"></i>
                Upload Image
              </button>
              {isMobile && (
                <button
                  className="camera-btn"
                  onClick={() => handleCameraCapture()}
                >
                  <i className="fas fa-camera"></i>
                  Take Photo
                </button>
              )}
            </div>
          </div>

          <div className="input-fields">
            <div className="input-group">
              <label>Serial No.</label>
              <input
                type="text"
                value={item.serialNo}
                onChange={(e) =>
                  setInspectionItems((items) =>
                    items.map((i) =>
                      i.id === item.id ? { ...i, serialNo: e.target.value } : i
                    )
                  )
                }
              />
            </div>
            <div className="input-group">
              <label>Location</label>
              <input
                type="text"
                value={item.location}
                onChange={(e) =>
                  setInspectionItems((items) =>
                    items.map((i) =>
                      i.id === item.id ? { ...i, location: e.target.value } : i
                    )
                  )
                }
              />
            </div>
            <div className="input-group">
              <label>Observation</label>
              <input
                type="text"
                value={item.observation}
                onChange={(e) =>
                  setInspectionItems((items) =>
                    items.map((i) =>
                      i.id === item.id
                        ? { ...i, observation: e.target.value }
                        : i
                    )
                  )
                }
              />
            </div>
          </div>

          <button onClick={() => handleDelete(item.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}

      <button onClick={handleAdd} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default InspectionForm;
