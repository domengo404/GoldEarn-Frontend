import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Eye, EyeOff } from 'lucide-react'

const LoginPage = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulate login - in real app, this would validate credentials
    if (phone && password) {
      navigate('/home')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: '#1A1A1A'}}>
      <Card className="w-full max-w-md goldearn-card">
        <CardHeader className="text-center pb-2">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full goldearn-gradient flex items-center justify-center">
              <span className="text-2xl font-bold text-black">G</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">GoldEarn</h1>
          <p className="text-muted-foreground">تسجيل الدخول إلى حسابك</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
              <Input
                type="tel"
                placeholder="01xxxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="goldearn-input"
                dir="ltr"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">كلمة المرور</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="goldearn-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full goldearn-button"
              disabled={!phone || !password}
            >
              تسجيل الدخول
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-muted-foreground">
              ليس لديك حساب؟{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-primary hover:underline font-medium"
              >
                إنشاء حساب جديد
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage

