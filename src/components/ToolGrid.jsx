import React from 'react';
import './ToolGrid.css';

const ToolGrid = ({ tools, onToolSelect }) => {
    return (
        <main className="tool-grid">
            {tools.map(tool => (
                <div 
                    key={tool.id} 
                    className="tool-card" 
                    onClick={() => onToolSelect(tool)}
                >
                    <h3>{tool.name}</h3>
                </div>
            ))}
        </main>
    );
};

export default ToolGrid;
