import { useEffect, useState } from 'react';
import './App.css';
import { PDFFile } from './PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    {
      Id: 1,
      Title: 'asdf',
      Context:
        'aasfasdfasdfasdf aasfasdfasdfasdf  aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf  aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf aasfasdfasdfasdf',
      Language: 'english',
    },
  ];
  const display = [
    { name: 'Title', width: 25 },
    { name: 'Context', width: 50 },
    { name: 'Language', width: 25 },
  ];
  return (
    isClient && (
      <PDFDownloadLink
        document={<PDFFile items={items} display={display} />}
        fileName="report"
      >
        {({ loading }) => (
          <button className="hover:bg-primaryBlue">
            {loading ? 'Generowanie PDF...' : 'PDF'}
          </button>
        )}
      </PDFDownloadLink>
    )
  );
}

export default App;
