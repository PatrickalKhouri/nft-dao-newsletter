import logo from './logo.svg';
import './App.css';
import Investments from './Investments'
import moment from 'moment'
import { useEffect, useState } from 'react';
import news from './data'

function App() {
  const [todaysNews, settodaysNews] = useState([])
  const [loading, setLoading] = useState(true)

  const today = moment().format("DD/MM/YYYY");

  const filterDataByDate = (news) => {
    if (news.date === today) {
      return news
    }
  }

  const fetchTodaysNews = async () => {    
    setLoading(true)
    const todaysData = news.filter(filterDataByDate)
    settodaysNews(todaysData)
    setLoading(false)
  }

  useEffect(() => {
    fetchTodaysNews();
  }, [])
  
  if (loading) {
    return <main>
      <h3>Loading...</h3>
    </main>
  }

  return <main>
    <h1>NFT Dao News Letter</h1>
    <Investments/>
  </main>;
}

export default App;
