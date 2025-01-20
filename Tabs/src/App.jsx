import { useState } from 'react'
import TabsView from './components/TabsView';

function App() {
  const [tabs, setTabs] = useState([{label: "Tab 1", content: "Tab 1 content"}, { label: "Tab 2", content: "Tab 2 content"}, {label: "Tab 3", content: "Tab 3 content"}]);

  return (
    <>
      <TabsView tabs={ tabs } />
    </>
  )
}

export default App
