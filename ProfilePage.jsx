import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, User, Wallet, TrendingUp, BarChart3, FileText, Download, CreditCard, LogOut } from 'lucide-react'

const ProfilePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('اليوم')
  const navigate = useNavigate()

  // Mock user data
  const userData = {
    phone: '01203756200',
    joinDate: '17 04 2025 - 20 04 2025',
    balance: 100.0,
    totalEarnings: 100.0,
    referralEarnings: 0,
    taskEarnings: 100.0
  }

  const periods = ['اليوم', 'أمس', 'هذا الأسبوع', 'هذا الشهر']

  const profileSections = [
    {
      title: 'المعلومات الشخصية',
      icon: User,
      onClick: () => navigate('/personal-info')
    },
    {
      title: 'السجلات المالية',
      icon: FileText,
      onClick: () => navigate('/financial-records')
    },
    {
      title: 'تنزيل التطبيق',
      icon: Download,
      onClick: () => navigate('/download-app')
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with User Info */}
      <div className="bg-card p-6 border-b border-border">
        <div className="flex items-center space-x-4 space-x-reverse mb-4">
          <div className="w-16 h-16 rounded-full goldearn-gradient flex items-center justify-center">
            <span className="text-2xl font-bold text-black">G</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">{userData.phone}</h1>
            <p className="text-sm text-muted-foreground">{userData.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Balance Card */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">رصيد الحساب</h2>
            <div className="text-4xl font-bold text-primary mb-4">EGP {userData.balance}</div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                className="goldearn-button"
                onClick={() => navigate('/topup')}
              >
                <CreditCard className="w-4 h-4 ml-2" />
                إعادة الشحن
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/withdraw')}
              >
                <Wallet className="w-4 h-4 ml-2" />
                انسحب
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Period Filter */}
        <div className="flex space-x-2 space-x-reverse overflow-x-auto">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedPeriod === period
                  ? 'bg-primary text-black'
                  : 'bg-secondary text-foreground hover:bg-primary/20'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Earnings Summary */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">أرباحك</h3>
            </div>
            
            <div className="text-3xl font-bold text-primary mb-6">EGP 0</div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-primary">{userData.totalEarnings}</div>
                <div className="text-xs text-muted-foreground">إجمالي الإيرادات</div>
              </div>
              
              <div className="text-center p-4 bg-secondary rounded-lg">
                <User className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-400">{userData.referralEarnings}</div>
                <div className="text-xs text-muted-foreground">دخل الدعوة</div>
              </div>
              
              <div className="text-center p-4 bg-secondary rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-400">{userData.taskEarnings}</div>
                <div className="text-xs text-muted-foreground">دخل المهام</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Sections */}
        <div className="space-y-3">
          {profileSections.map((section, index) => (
            <Card key={index} className="goldearn-card cursor-pointer hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <button 
                  onClick={section.onClick}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="p-2 rounded-full bg-primary/10">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{section.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logout Button */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <button 
              onClick={() => {
                // Handle logout logic here
                navigate('/login')
              }}
              className="w-full flex items-center justify-center space-x-3 space-x-reverse text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">تسجيل الخروج</span>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProfilePage

