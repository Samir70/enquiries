import { useState, useEffect } from 'react'

export default function Enquiries() {
  const [enqs, setEnqs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4005/api/enquiries')
      const json = await res.json()
      setEnqs(json)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Enquiries</h1>
      <ul id='enqsContainer'>
        {enqs.map((enq, i) => (
          <li key={i} className='enqCard'>
            <div>
              <p>{enq.name} email: {enq.email}</p>
              <p>{enq.enq_text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}