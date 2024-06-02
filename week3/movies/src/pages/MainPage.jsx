import React from 'react'

export default function MainPage() {
    return (
        <div className='welcomepage'>
            <div className='welcome'>
                WELCOME
            </div>
            <div className='welcome-search'>
                Find your Movies!
                <div className='search-container'>
                    <input type='text' />
                    <button>search</button>
                </div>
            </div>
        </div>
    )
}
