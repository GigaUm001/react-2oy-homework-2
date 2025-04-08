import React from 'react'
import Counter from './Components/Counter/Counter'
import HiddenDiv from './Components/Hidden/Hidden'
import Input from './Components/Input/Input'

const App = () => {
  return (
    <div className='bg-gray-50 h-screen'>
      <div>
        <Counter />
      </div>
      <div>
        <HiddenDiv />
      </div>
      <div>
        <Input />
      </div>
    </div>
  )
}

export default App