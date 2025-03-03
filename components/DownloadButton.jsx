// DownloadButton.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  const handleDownload = () => {
    // Path to your CV file
    const cvPath = './Resume.pdf'; // Replace this with the actual path to your CV file

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Resume.pdf';

    // Append the link to the document body and click it
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;