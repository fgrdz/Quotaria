import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Quote from '../Quote';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [serieSelecionada, setSerieSelecionada] = useState([]);

  useEffect(() => {
    async function getSeries() {
      try {
        const response = await api.get('/series');
        setSeries(response.data);
      } catch (error) {
        console.error('Erro ao buscar séries:', error);
      }
    }
    getSeries();
  }, []);

  async function selecao(selecionadaId) {
    try {
      if (selecionadaId) {
        const response = await api.get(`/quote?series=${selecionadaId}&all=true`);
        setSerieSelecionada(response.data);
      } else {
        setSerieSelecionada([]); // Define a lista como vazia quando nenhuma série é selecionada
      }
    } catch (error) {
      console.error('Erro ao buscar citações:', error);
    }
  }
  function handleChange(e) {
    const selecionadaId = e.target.value;
    selecao(selecionadaId);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value=''>Selecione uma série</option>
        {Array.isArray(series) &&
          series.map((serie) => (
            <option key={serie.id} value={serie.id}>
              {serie}
            </option>
          ))}
      </select>
      <ul>
        {Array.isArray(serieSelecionada) &&
          serieSelecionada.map((serie) => (
            <li key={serie.id}>
              <Quote
                series={serie.series}
                quote={serie.quote}
                author={serie.author}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Series;
