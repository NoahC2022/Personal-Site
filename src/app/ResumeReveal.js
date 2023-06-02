import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function ResumeReveal() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const pdfUrl = "./public/resume.pdf";

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      };

      const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
      };

    return (
        <div className="flex justify-center items-center h-screen">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            options={{ workerSrc: '/pdf.worker.js' }}
          >
              <Page
              pageNumber={1}
                // key={`page_${index + 1}`}
                // pageNumber={index + 1}
                // width={800}
              />
          </Document>
        </div>
      );
    }

    export default ResumeReveal