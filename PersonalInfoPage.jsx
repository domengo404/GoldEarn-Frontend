import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Camera, User, Phone, CreditCard, Key, Wallet, AlertCircle, LogOut } from 'lucide-react'

const PersonalInfoPage = () => {
  const [nickname, setNickname] = useState('')
  const navigate = useNavigate()

  // Mock user data
  const userData = {
    userId: '757456',
    phone: '01203756200',
    creditScore: 60,
    walletNumber: '01203756200'
  }

  const handleSaveNickname = () => {
    // Handle save nickname logic
    alert('تم حفظ اللقب بنجاح!')
  }

  const handleChangePaymentPassword = () => {
    // Handle change payment password logic
    alert('سيتم توجيهك لتغيير كلمة مرور الدفع')
  }

  const handleChangeLoginPassword = () => {
    // Handle change login password logic
    alert('سيتم توجيهك لتغيير كلمة مرور تسجيل الدخول')
  }

  const handleLogout = () => {
    // Handle logout logic
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/profile')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">المعلومات الشخصية</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Picture */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full goldearn-gradient flex items-center justify-center">
                <span className="text-3xl font-bold text-black">G</span>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-foreground">الصورة الرمزية</h3>
            <p className="text-sm text-muted-foreground">اضغط على الكاميرا لتغيير الصورة</p>
          </CardContent>
        </Card>

        {/* User Information */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">معلومات الحساب</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">معرف المستخدم</div>
                  <div className="font-bold text-primary">{userData.userId}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">رقم الهاتف</div>
                  <div className="font-bold text-foreground">{userData.phone}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">درجة الائتمان</div>
                  <div className="font-bold text-green-400">{userData.creditScore}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nickname */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">اللقب</h3>
            </div>
            
            <div className="space-y-3">
              <Input
                placeholder="أدخل اللقب الخاص بك"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="goldearn-input"
              />
              <Button 
                className="w-full goldearn-button"
                onClick={handleSaveNickname}
                disabled={!nickname.trim()}
              >
                حفظ اللقب
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <div className="space-y-3">
          <Card className="goldearn-card">
            <CardContent className="p-4">
              <button 
                onClick={handleChangePaymentPassword}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Key className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">تغيير كلمة مرور الدفع</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </CardContent>
          </Card>

          <Card className="goldearn-card">
            <CardContent className="p-4">
              <button 
                onClick={handleChangeLoginPassword}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Key className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">تغيير كلمة مرور تسجيل الدخول</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Information */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <Wallet className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">المحفظة</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">رقم المحفظة:</span>
                  <span className="font-bold text-foreground">{userData.walletNumber}</span>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-400 font-medium">ملاحظة مهمة</p>
                    <p className="text-sm text-yellow-300 mt-1">
                      لا يمكن تغيير رقم المحفظة إلا من خلال التواصل مع فريق الدعم الفني
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 space-x-reverse text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">تسجيل الخروج</span>
            </button>
          </CardContent>
        </Card>

        {/* Help */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">تحتاج مساعدة؟</h4>
            <p className="text-sm text-muted-foreground">
              للحصول على المساعدة في تغيير معلومات حسابك أو إعدادات الأمان، تواصل مع فريق الدعم:
              <br />
              <span className="text-primary font-medium">support@goldearn.com</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PersonalInfoPage

