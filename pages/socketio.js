import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default ({data}) => {
  const [clientamt, setClients] = useState("");
  console.log(clientamt)

  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const socket = io()

      socket.on('connect', () => {
        console.log('connect')
        socket.emit('hello')
      })

      socket.on('hello', data => {
        console.log('hello', data)
      })

      socket.on('a user connected', data => {
        console.log('a user connected', data)
        setClients(data)
      })

      socket.on('disconnect', data => {
        console.log('disconnect')
        setClients(data)
      })
    })
  }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted

  return (<><h1>Socket.io</h1><div>Total clients: {clientamt}</div></>)
}