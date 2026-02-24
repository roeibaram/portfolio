import React, { useRef, useState } from "react";
import "./ResumeDock.css";

function ResumeDock() {
  const [isOpen, setIsOpen] = useState(false);
  const viewerRef = useRef(null);

  function handleFullscreen() {
    if (!viewerRef.current) return;

    if (viewerRef.current.requestFullscreen) {
      viewerRef.current.requestFullscreen();
    }
  }

  return (
    <>
      <aside className="resume-dock">
        <p className="resume-dock__title">Resume</p>
        <div className="resume-dock__actions">
          <button onClick={() => setIsOpen(true)} type="button">
            Preview
          </button>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Open
          </a>
          <a href="/resume.pdf" download>
            Download
          </a>
        </div>
      </aside>

      {isOpen ? (
        <div className="resume-modal" role="dialog" aria-modal="true">
          <div className="resume-modal__panel" ref={viewerRef}>
            <div className="resume-modal__bar">
              <p>Resume Viewer</p>
              <div>
                <button type="button" onClick={handleFullscreen}>
                  Fullscreen
                </button>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Open
                </a>
                <a href="/resume.pdf" download>
                  Download
                </a>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
            </div>
            <iframe title="Roei Baram Resume" src="/resume.pdf" className="resume-modal__frame" />
          </div>
          <button className="resume-modal__backdrop" onClick={() => setIsOpen(false)} aria-label="Close resume modal" />
        </div>
      ) : null}
    </>
  );
}

export default ResumeDock;
