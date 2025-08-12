import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  CreditCard, 
  Building, 
  Banknote, 
  CheckSquare, 
  Crown,
  Home,
  Plus,
  Send,
  Smile
} from 'lucide-react'

const HomePage = () => {
  const navigate = useNavigate()

  const menuItems = [
    {
      title: 'دعوة صديق',
      icon: Users,
      color: 'text-blue-400',
      onClick: () => navigate('/invite-friend')
    },
    {
      title: 'شحن الرصيد',
      icon: CreditCard,
      color: 'text-green-400',
      onClick: () => navigate('/topup')
    },
    {
      title: 'ملف الشركة',
      icon: Building,
      color: 'text-purple-400',
      onClick: () => navigate('/company-profile')
    },
    {
      title: 'سحب الأرباح',
      icon: Banknote,
      color: 'text-red-400',
      onClick: () => navigate('/withdraw')
    },
    {
      title: 'المهام',
      icon: CheckSquare,
      color: 'text-orange-400',
      onClick: () => navigate('/tasks')
    },
    {
      title: 'اشتراك VIP',
      icon: Crown,
      color: 'text-yellow-400',
      onClick: () => navigate('/vip')
    }
  ]

  const bottomNavItems = [
    {
      title: 'الرئيسية',
      icon: Home,
      active: true,
      onClick: () => navigate('/home')
    },
    {
      title: 'الإيرادات',
      icon: Plus,
      onClick: () => navigate('/revenue')
    },
    {
      title: 'مشاركة',
      icon: Send,
      onClick: () => navigate('/invite-friend')
    },
    {
      title: 'خاص بي',
      icon: Smile,
      onClick: () => navigate('/profile')
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 text-center border-b border-border">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 rounded-full goldearn-gradient flex items-center justify-center">
            <span className="text-xl font-bold text-black">G</span>
          </div>
        </div>
        <h1 className="text-xl font-bold text-primary">GoldEarn</h1>
        <p className="text-sm text-muted-foreground">منصة الاستثمار والأرباح</p>
      </div>

      {/* Balance Card */}
      <div className="p-4">
        <Card className="goldearn-card mb-6">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">رصيد الحساب</h2>
            <div className="text-3xl font-bold text-primary mb-2">100.0 EGP</div>
            <p className="text-sm text-muted-foreground">متاح للسحب</p>
          </CardContent>
        </Card>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="goldearn-card cursor-pointer hover:scale-105 transition-transform"
              onClick={item.onClick}
            >
              <CardContent className="p-6 text-center">
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around py-2">
          {bottomNavItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`flex flex-col items-center py-2 px-4 ${
                item.active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

