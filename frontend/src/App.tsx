import React from 'react'
import { Toaster } from 'react-hot-toast'
import WorkflowStudio from './components/WorkflowStudio'
import { GPUStatusMonitor } from './components/monitoring/GPUStatusMonitor'
import 'reactflow/dist/style.css'
import './styles/index.css'

function App() {
  return (
    <>
      {/* Toast Configuration */}
      <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '14px',
            borderRadius: '8px',
            padding: '12px 16px',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
          loading: {
            duration: Infinity,
          },
        }}
      />
      
      {/* Main Application */}
      <div className="w-full h-screen bg-gray-50" style={{ width: '100vw', height: '100vh' }}>
        <WorkflowStudio />
      </div>
      
      {/* Floating GPU Monitor */}
      <div className="fixed bottom-4 left-4 z-40 w-80">
        <GPUStatusMonitor />
      </div>
    </>
  )
}

export default App