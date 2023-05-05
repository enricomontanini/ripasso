import './App.css';
import { useState } from 'react';

function App() {
  const [conteggio, setConteggio] = useState(0)

  const dati = [
    'pippo',
    'pluto', 
    'caio'
  ];

  const galleria = [
    {
      foto: 'https://m.media-amazon.com/images/I/613zlGytb9L._AC_SY355_.jpg',
      titolo: 'Titolo della foto 1'
    },
    {
      foto: 'https://m.media-amazon.com/images/I/71i2W4C2eYL._AC_SY355_.jpg',
      titolo: 'Titolo della foto 2'
    },
    {
      foto: 'https://i.pinimg.com/736x/0e/9d/e7/0e9de75237b194fcdf5ea0336b338a19--ice-age-funny-sid-the-sloth.jpg',
      titolo: 'Titolo della foto 3'
    }
  ]

  return (
    <div className="App">
      <p>Il valore è {conteggio}</p>
      <p>{conteggio === 0 ? 'Il valore è zero' : null}</p>
      <button onClick={() => setConteggio(conteggio + 1)}>Incrementa</button>
      <button onClick={() => setConteggio(conteggio - 1)}>Decrementa</button>

      <ul>
        {dati.map(persona => <li>Ciao {persona}</li>)}
      </ul>

      <div style={{display:'flex', flexDirection: 'row'}}>
        {galleria.map(img => <div>
          <img style={{maxWidth: '150px'}} src={img.foto} />
          <p>{img.titolo}</p>
          </div>
          )}
      </div>
      

      <table>
        <tr>
        {galleria.map(img => <td>
            <img style={{maxWidth: '150px'}} src={img.foto} />
            <p>{img.titolo}</p>
          </td>
          )}
        </tr>
      </table>
    </div>
  );
}

export default App;
