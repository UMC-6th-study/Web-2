import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-wrap'>
                <div className='header-left-wrap'>
                    <Link style={{ display: 'flex', alignItems: 'center' }} to='/'>
                        <img 
                            style={{ width: "154px", height: "20px" }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="로고" />
                    </Link>
                </div>
                <div className='header-right-wrap'> {/* 여기에 클래스 추가 */}
                    <ul>
                        <li>
                            <Link className='header-nav-item' to='/Popular'>
                                Popular
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/NowPlay'>
                                Now Playing
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/toprated'>
                                Top Rated
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/upcoming'>
                                Upcoming
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
