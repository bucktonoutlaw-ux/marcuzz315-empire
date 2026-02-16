import React, { useState } from 'react';
import Header from './components/Header';
import AdPlaceholder from './components/AdPlaceholder';
import ToolGrid from './components/ToolGrid';
import ToolModal from './components/ToolModal';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    const tools = [
        { id: 'rewrite', name: 'Article Rewriter', desc: 'Rewrite sentences to make them unique.' },
        { id: 'fix_email', name: 'Email Fixer', desc: 'Fix grammar and spelling in an email.' },
        { id: 'tweet_ideas', name: 'Tweet Idea Generator', desc: 'Generate ideas for viral tweets.' },
        { id: 'tone_changer', name: 'Tone Changer', desc: 'Change the tone of your text (e.g., formal, casual).' },
        { id: 'summarizer', name: 'Text Summarizer', desc: 'Summarize long articles into key points.' },
        { id: 'keywords', name: 'Keyword Extractor', desc: 'Extract the main keywords from a block of text.' },
        { id: 'product_names', name: 'Product Name Generator', desc: 'Generate catchy names for your product.' },
        { id: 'blog_ideas', name: 'Blog Post Ideas', desc: 'Get ideas for your next blog post.' },
        { id: 'linkedin_post', name: 'LinkedIn Post Generator', desc: 'Create a professional post for LinkedIn.' },
        { id: 'video_ideas', name: 'YouTube Video Ideas', desc: 'Generate ideas for YouTube videos.' },
        { id: 'analogy', name: 'Analogy Generator', desc: 'Create an analogy for a complex topic.' },
        { id: 'dating_bio', name: 'Dating Profile Bio', desc: 'Write a fun and engaging dating profile bio.' },
    ];

    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
    };

    const handleCloseModal = () => {
        setSelectedTool(null);
    };

    return (
        <>
            <Header />
            <AdPlaceholder />
            <ToolGrid tools={tools} onToolSelect={handleToolSelect} />
            <Footer />
            {selectedTool && (
                <ToolModal tool={selectedTool} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default App;
