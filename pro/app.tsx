import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Analytics from './pages/Analytics'
import Goals from './pages/Goals'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'

type Page = 'dashboard' | 'accounts' | 'analytics' | 'goals' | 'transactions' | 'settings'

const nav: { id: Page; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'accounts', label: 'Accounts', icon: '◫' },
  { id: 'analytics', label: 'Analytics', icon: '▱' },
  { id: 'goals', label: 'Goals', icon: '◎' },
  { id: 'transactions', label: 'Transactions', icon: '≡' },
  { id: 'settings', label: 'Settings', icon: '⊙' },
]

export default function App() {
  const [page, setPage] = useState<Page>('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  const pages: Record<Page, React.ReactNode> = {
    dashboard: <Dashboard onNavigate={setPage} />,
    accounts: <Accounts />,
    analytics: <Analytics />,
    goals: <Goals />,
    transactions: <Transactions />,
    settings: <Settings />,
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: 'var(--color-sidebar)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        zIndex: 10,
      }}>
        {/* Logo */}
        <div style={{ padding: '28px 24px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--color-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 700, color: '#fff',
              fontFamily: 'var(--font-display)',
            }}>S</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: 17,
              color: '#ffffff', letterSpacing: '-0.3px',
            }}>SpendWise</span>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map(item => {
            const active = page === item.id
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 8,
                  border: 'none', cursor: 'pointer',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: active ? '#ffffff' : 'var(--color-sidebar-text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: active ? 500 : 400,
                  transition: 'all 0.15s ease',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = '#e5e7eb'
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-sidebar-text)'
                }}
              >
                <span style={{ fontSize: 15, lineHeight: 1 }}>{item.icon}</span>
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* User */}
        <div style={{
          padding: '16px', borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 600, color: '#fff',
            flexShrink: 0,
          }}>JD</div>
          <div>
            <div style={{ color: '#e5e7eb', fontSize: 13, fontWeight: 500 }}>Jamie Doe</div>
            <div style={{ color: 'var(--color-sidebar-text)', fontSize: 11 }}>Premium Plan</div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{
        flex: 1,
        overflow: 'auto',
        background: 'var(--color-bg)',
      }}>
        {pages[page]}
      </main>
    </div>
  )
}
