// src/components/App.jsx
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles['news-section']}>
        <h1 className={styles.title}>Notícias</h1>
        <div className={styles.news}>
          <div className={styles['news-item']}>
            <div className={styles.date}>
              <span>28</span> <small>Mar</small>
            </div>
            <div className={styles.content}>
              <h2>Notícia</h2>
              <p>No dia 28 a fiesc irá organizar uma campanha de menor aprendiz</p>
            </div>
          </div>

          <div className={styles['news-item']}>
            <div className={styles.date}>
              <span>31</span> <small>Mar</small>
            </div>
            <div className={styles.content}>
              <h2>Notícia</h2>
              <p>Dia 31 irá ter o dia D do terceirão com tema esportes</p>
            </div>
          </div>

          <div className={styles['news-item']}>
            <div className={styles.date}>
              <span>08</span> <small>Abril</small>
            </div>
            <div className={styles.content}>
              <h2>Notícia</h2>
              <p>No dia 08 os estudantes terão uma saída para um museu</p>
            </div>
          </div>

          <div className={styles['news-item']}>
            <div className={styles.date}>
              <span>14</span> <small>Abril</small>
            </div>
            <div className={styles.content}>
              <h2>Notícia</h2>
              <p>No dia 14 os estudantes terão a prova do canguru de matemática</p>
            </div>
          </div>
        </div>
        <div className={styles['ver-mais']}>Ver Mais</div>
        <div className={styles['event-promo']}>
          <h2>Propaganda de evento</h2>
          <p>Dia da Família</p>
          <p>29/05/24</p>
        </div>
      </div>
    </div>
  );
}

export default App;
