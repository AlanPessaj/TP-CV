export default function AlanPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#f5f5f5',
        color: '#333',
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Página de Alan
        </h1>
        <p style={{ margin: 0, fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}>
          Próximamente trabajaremos en esta sección.
        </p>
      </div>
    </main>
  )
}
