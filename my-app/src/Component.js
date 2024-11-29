'use client'

import React, { useState } from 'react';

const genres = {
  joy: 'joy',
  anger: 'anger',
  sadness: 'sadness',
  fear: 'fear',
  anticipation: 'anticipation',
  disgust: 'disgust',
  surprise: 'surprise'
}

export default function GenreSelection() {
  const [selectedGenres, setSelectedGenres] = useState([])

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    )
  }

  const handleSubmit = () => {
    console.log('選択されたジャンル:', selectedGenres)
  }

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
      }}>
        Select Your favorite genre
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {Object.keys(genres).map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenre(genre)}
            style={{
              padding: '10px',
              border: selectedGenres.includes(genre) ? '2px solid #007BFF' : '2px solid #ccc',
              backgroundColor: selectedGenres.includes(genre) ? '#007BFF' : '#fff',
              color: selectedGenres.includes(genre) ? '#fff' : '#000',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            aria-pressed={selectedGenres.includes(genre)}
          >
            {genres[genre]}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: selectedGenres.length > 0 ? '#007BFF' : '#ccc',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '4px',
          cursor: selectedGenres.length > 0 ? 'pointer' : 'not-allowed',
          transition: 'background-color 0.3s ease'
        }}
        disabled={selectedGenres.length === 0}
      >
        次へ進む
      </button>
    </div>
  )
}
