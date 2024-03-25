import { useState, useEffect } from 'react'
import search from './assets/icons/search.svg'
import './App.css'
import { useStateContext } from './context'
import { BackgroundLayout, WeatherCard, MiniCard } from './components'


function App() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  useEffect(() => {
    document.title = "Weather App";
 }, []);

  return (
    <>
      <div className='w-full h-screen text-white px-8'>
          <nav className='w-full p-3 flex lg:flex-row flex-col justify-between lg:items-center lg:space-y-0 space-y-4'>
            <h1 className='font-bold tracking-wide text-3xl'>WeatherVue</h1>
            <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
                <img src={search} alt="Search" className='w-[1.5rem] h-[1.5rem]'/>
                <input onKeyUp={(e) => { if (e.key === 'Enter') { submitCity() } }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
            </div>
          </nav>
          <BackgroundLayout>

          </BackgroundLayout>

        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
            {
              values?.slice(1, 7).map(curr => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                )
              })
            }
          </div>
      </main>
      </div>
      </>
  )
}

export default App
