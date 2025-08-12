import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import BottomNavigation from './components/BottomNavigation'

// Import pages
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import TaskLevelPage from './pages/TaskLevelPage'
import SurveyPage from './pages/SurveyPage'
import VIPPage from './pages/VIPPage'
import VIPDetailsPage from './pages/VIPDetailsPage'
import CompanyProfilePage from './pages/CompanyProfilePage'
import WithdrawPage from './pages/WithdrawPage'
import WithdrawHistoryPage from './pages/WithdrawHistoryPage'
import TopUpPage from './pages/TopUpPage'
import TopUpPaymentPage from './pages/TopUpPaymentPage'
import TopUpConfirmationPage from './pages/TopUpConfirmationPage'
import ReferralPage from './pages/ReferralPage'
import EarningsPage from './pages/EarningsPage'
import ProfilePage from './pages/ProfilePage'
import PersonalInfoPage from './pages/PersonalInfoPage'
import FinancialRecordsPage from './pages/FinancialRecordsPage'
import DownloadAppPage from './pages/DownloadAppPage'

function AppContent() {
  const location = useLocation()
  
  // Mock authentication state - in real app this would come from context/state management
  const isAuthenticated = true

  const showBottomNav = (pathname) => {
    const bottomNavPaths = ['/home', '/earnings', '/referral', '/profile']
    return bottomNavPaths.includes(pathname)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/task-level" element={<TaskLevelPage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/vip" element={<VIPPage />} />
            <Route path="/vip-details/:level" element={<VIPDetailsPage />} />
            <Route path="/company-profile" element={<CompanyProfilePage />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
            <Route path="/withdraw-history" element={<WithdrawHistoryPage />} />
            <Route path="/topup" element={<TopUpPage />} />
            <Route path="/topup-payment" element={<TopUpPaymentPage />} />
            <Route path="/topup-confirmation" element={<TopUpConfirmationPage />} />
            <Route path="/referral" element={<ReferralPage />} />
            <Route path="/earnings" element={<EarningsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/personal-info" element={<PersonalInfoPage />} />
            <Route path="/financial-records" element={<FinancialRecordsPage />} />
            <Route path="/download-app" element={<DownloadAppPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>

      {/* Bottom Navigation */}
      {isAuthenticated && showBottomNav(location.pathname) && <BottomNavigation />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

