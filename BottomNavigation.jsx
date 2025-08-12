import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Plus, Send, Smile } from 'lucide-react'

const BottomNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      id: 'home',
      label: 'الرئيسية',
      icon: Home,
      path: '/home'
    },
    {
      id: 'earnings',
      label: 'الإيرادات',
      icon: Plus,
      path: '/earnings'
    },
    {
      id: 'referral',
      label: 'مشاركة',
      icon: Send,
      path: '/referral'
    },
    {
      id: 'profile',
      label: 'خاص بي',
      icon: Smile,
      path: '/profile'
    }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive(item.path)
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default BottomNavigation

