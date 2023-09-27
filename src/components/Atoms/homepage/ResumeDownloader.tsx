"use client"
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeDownloader = () => {
  async function handleDownload() {
    const url = '/krishna-tiwari-resume.pdf';
    const filename = 'Krishna Tiwari Resume.pdf';

    // Create a new Blob object from the URL.
    const blob = await fetch(url).then(response => response.blob());

    // Create a new File object from the Blob object.
    const file = new File([blob], filename, { type: 'application/pdf' });

    // Create a new URL object from the File object.
    const blobUrl = window.URL.createObjectURL(file);

    // Create a new Blob object from the URL object.
    const downloadBlob = await fetch(blobUrl).then(response => response.blob());

    // Create a new File object from the Blob object.
    const downloadFile = new File([downloadBlob], filename, { type: 'application/pdf' });

    // Create a new URL object from the File object.
    const downloadUrl = window.URL.createObjectURL(downloadFile);

    // Create a new anchor element.
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', filename);

    // Click the anchor element to trigger the download.
    link.click();
  }

  return (
    <Button variant={'outline'} onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" /> Download Resume
    </Button>
  );
};

export default ResumeDownloader;
