import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* Other routes can be added here */}
    {/* <Route path="login" element={<LogInForm />} /> */}
  </Route>,
)

export default routes
