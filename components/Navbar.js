'use client';

export default function Navbar() {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo" style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '-1px' }}>
            BOOK<span className="accent">TRADE</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Global Market</a></li>
            <li><a href="/my-books">My Library</a></li>
            <li><a href="/trades">Trades</a></li>
            <li><a href="/profile">Settings</a></li>
          </ul>
      </div>
    </nav>
  );
}
