import { addBook } from '../actions';
import { supabase } from '@/lib/supabase';

export default async function MyBooks() {
  const { data: myBooks } = await supabase
    .from('books')
    .select('*')
    .eq('user_id', 1); // Mocked user_id 1

  const mockMyBooks = [
    { id: 101, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 102, title: 'Foundation', author: 'Isaac Asimov' }
  ];

  const displayBooks = (myBooks && myBooks.length > 0) ? myBooks : mockMyBooks;

  return (
    <div className="hero">
      <h1>My <span className="accent">Library</span></h1>
      <p>Add books you want to trade or manage your current listings.</p>

      <div className="glass" style={{ maxWidth: '600px', margin: '40px auto', padding: '40px', textAlign: 'left' }}>
        <h2 style={{ marginBottom: '24px' }}>Add New Book</h2>
        <form action={addBook}>
            <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>Book Title</label>
                <input type="text" name="title" placeholder="Catch-22" required />
            </div>
            <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>Author</label>
                <input type="text" name="author" placeholder="Joseph Heller" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Add to My Library
            </button>
        </form>
      </div>

      <div className="book-grid">
        {displayBooks.map((book) => (
          <div key={book.id} className="book-card glass">
            <h3>{book.title}</h3>
            <p><strong>{book.author}</strong></p>
            <button className="btn" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', width: '100%' }}>Delete Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}
