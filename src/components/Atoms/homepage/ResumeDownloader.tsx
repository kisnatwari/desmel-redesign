"use client"

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

  const ResumeDownloader = () => {
    function handleDownload() {
        const url = '/krishna-tiwari-resume.pdf';
        const filename = 'Krishna Tiwari Resume.pdf';
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
          });
      }
      
    return (
        <a onClick={handleDownload}>
        <Button>
            <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
    </a>
    )
  }
  
  export default ResumeDownloader