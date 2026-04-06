import { supabase } from '@/lib/supabase';

export default async function Trades() {
  const { data: incomingTrades } = await supabase
    .from('trades')
    .select('*, sender:profiles!proposer_id(*), book:books!book_receiver_id(*)')
    .eq('receiver_id', 1); // Mocked user_id 1

  const mockIncoming = [
    { id: 201, sender: { full_name: 'Jay Gatsby' }, book: { title: 'The Hobbit' }, status: 'PENDING' }
  ];

  const mockOutgoing = [
    { id: 202, receiver: { full_name: 'Winston Smith' }, book: { title: '1984' }, status: 'PENDING' }
  ];

  const displayIncoming = (incomingTrades && incomingTrades.length > 0) ? incomingTrades : mockIncoming;

  return (
    <div className="hero">
      <h1>Trade <span className="accent">Hub</span></h1>
      <p>Manage incoming requests and your active proposals.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px', textAlign: 'left' }}>
        
        <div>
          <h2 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>Incoming Requests</h2>
          {displayIncoming.map((trade) => (
            <div key={trade.id} className="glass" style={{ padding: '24px', marginBottom: '20px' }}>
              <p><strong>{trade.sender?.full_name || trade.sender}</strong> wants your book:</p>
              <h3 style={{ margin: '8px 0' }}>{trade.book?.title || trade.book}</h3>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button className="btn btn-primary" style={{ flex: 1 }}>Accept</button>
                <button className="btn" style={{ flex: 1, background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>Decline</button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>Outgoing Proposals</h2>
          {mockOutgoing.map((trade) => (
            <div key={trade.id} className="glass" style={{ padding: '24px', marginBottom: '20px', opacity: 0.7 }}>
              <p>Requested book from <strong>{trade.receiver?.full_name || trade.receiver}</strong>:</p>
              <h3 style={{ margin: '8px 0' }}>{trade.book?.title || trade.book}</h3>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', letterSpacing: '1px', color: var(--accent) }}>
                STATUS: {trade.status}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
