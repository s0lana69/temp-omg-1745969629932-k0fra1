import React, { useRef, useState } from 'react';

const BuilderPage: React.FC = () => {
  const [selectedHtml, setSelectedHtml] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleElementClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (previewRef.current && previewRef.current.contains(target)) {
      setSelectedHtml(target.outerHTML);
    }
  };

  return (
    <section className="relative min-h-screen bg-dark pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Seiten-Vorschau & Element-Inspektor</h1>
          <p className="text-gray-300 mb-8">Klicke auf ein Element, um den HTML-Code zu sehen.</p>
        </div>
        <div
          ref={previewRef}
          className="bg-darkAccent rounded-xl p-8 shadow-lg border border-gray-800 cursor-pointer"
          onClick={handleElementClick}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Preview Content</h2>
            <p className="text-gray-300">This is a simple preview page that replaced the Builder.io component.</p>
          </div>
        </div>
        {selectedHtml && (
          <div className="mt-8 p-4 bg-gray-900 text-green-300 rounded shadow-lg overflow-auto max-h-96">
            <h2 className="font-bold mb-2">HTML-Code des Elements:</h2>
            <pre className="whitespace-pre-wrap break-all text-xs">{selectedHtml}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default BuilderPage;