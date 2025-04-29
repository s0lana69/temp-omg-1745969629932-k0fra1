import React, { useState, useEffect } from 'react';
import { ChevronRight, Search, Loader2 } from 'lucide-react';
import HeroGraphic from '@/components/HeroGraphic';
import Together from 'together-ai';

// Initialize Together AI client
const together = new Together({
  apiKey: "287832962195d6da86081aa68c8dd1a1cd9a3c1aa92a62da73647b617d99ad91"
});

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Function to call Together AI API
  const processWithLLM = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResults('');
    setErrorMessage('');
    
    try {
      const response = await together.chat.completions.create({
        model: "meta-llama/Meta-Llama-3-8B-Instruct-Lite",
        messages: [
          {
            role: "user",
            content: `Optimiere diesen Text für SEO: ${query}`
          }
        ],
        stream: true
      });

      let fullResponse = '';
      
      for await (const token of response) {
        const content = token.choices[0]?.delta?.content || "";
        fullResponse += content;
        setResults(prevResults => prevResults + content);
      }
      
      console.log('Full response:', fullResponse);
    } catch (error) {
      console.error('Error calling Together AI:', error);
      setErrorMessage('Error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-neonTeal-500/20 to-transparent opacity-30 blur-xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-neonBlue-500/20 to-transparent opacity-30 blur-xl -z-10"></div>
      
      {/* Cyberpunk Image Layer - positioned for center head placement */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-visible">
        <HeroGraphic />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto h-screen flex">
          <div className="grid grid-cols-1 lg:grid-cols-[45%,55%] gap-0 items-center w-full mt-24 px-6 md:px-8">
            <div className="max-w-md mx-auto lg:mx-0 self-start lg:self-auto lg:mt-0 pt-20 lg:ml-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                The <span className="text-white">AI</span> <span className="gradient-text gradient-teal-blue">platform</span> for enterprise use cases
              </h1>
              
              <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
                TrueViral's AI platform provides powerful models for natural language processing, image recognition, and predictive analytics. Over 200,000+ developers use TrueViral to build innovative AI applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#try-free" 
                  className="btn btn-primary relative overflow-hidden group text-xs px-4 py-2"
                >
                  Try It Free
                  <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="absolute inset-0 bg-gradient-to-r from-neonTeal-500/20 to-neonBlue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <div className="relative flex-1">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    processWithLLM(searchQuery);
                  }}>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter text to optimize for SEO..."
                        className="w-full bg-black/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-full px-6 py-2 pl-10 pr-4 border border-[#4dff4d] shadow-[0_0_10px_rgba(77,255,77,0.5)] focus:border-[#4dff4d] focus:outline-none focus:shadow-[0_0_15px_rgba(77,255,77,0.5)] transition-all duration-200 text-xs"
                        disabled={isLoading}
                      />
                      {isLoading ? (
                        <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4dff4d] animate-spin" />
                      ) : (
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4dff4d]" />
                      )}
                      <button 
                        type="submit" 
                        className="ml-2 bg-[#4dff4d] text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-[#3ae6ae] transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                        disabled={isLoading || !searchQuery.trim()}
                      >
                        {isLoading ? 'Processing...' : 'Optimize'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* LLM Results */}
              {(results || errorMessage) && (
                <div className="mt-5 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-[#4dff4d] shadow-[0_0_10px_rgba(77,255,77,0.3)]">
                  {errorMessage ? (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  ) : (
                    <div>
                      <h3 className="text-[#4dff4d] text-sm font-medium mb-2">SEO Optimized Text:</h3>
                      <p className="text-white text-sm">{results}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;