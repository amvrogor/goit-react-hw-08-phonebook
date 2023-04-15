const styles = {
  container: {
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
    color: '#ee8905',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Another phonebook on the shelf</h1>
    </div>
  );
}
