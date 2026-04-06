import { supabase } from '@/lib/supabase';

export default async function Home() {
  // In a real app, this would fetch from Supabase. 
  // For the initial "wow" demo, I'll mock the data if keys aren't set.
  const { data: books, error } = await supabase
    .from('books')
    .select('*, profiles(full_name, city, state)');

  const mockBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', owner: 'Jay Gatsby', city: 'West Egg' },
    { id: 2, title: '1984', author: 'George Orwell', owner: 'Winston Smith', city: 'London' },
    { id: 3, title: 'Brave New World', author: 'Aldous Huxley', owner: 'Bernard Marx', city: 'London' },
  ];

  const displayBooks = (books && books.length > 0) ? books : mockBooks;

  return (
    <div className="hero">
      <h1>The Global <span className="accent">Library</span></h1>
      <p>Discover and trade books with readers worldwide.</p>
      
      <div className="book-grid">
        {displayBooks.map((book) => (
          <div key={book.id} className="book-card glass">
            <h3>{book.title}</h3>
            <p><strong>{book.author}</strong></p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
              Owner: {book.profiles?.full_name || book.owner}<br />
              Location: {book.profiles?.city || book.city}, {book.profiles?.state || book.state}
            </p>
            <button className="btn btn-primary" style={{ width: '100%' }}>Propose Trade</button>
          </div>
        ))}
      </div>
    </div>
  );
}
