import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (formData.phone && formData.password && formData.confirmPassword && formData.referralCode) {
      if (formData.password === formData.confirmPassword) {
        // Simulate registration success
        alert('تم إنشاء الحساب بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول')
        navigate("/login")
      } else {
        alert('كلمات المرور غير متطابقة')
      }
    }
  }

  const isFormValid = formData.phone && formData.password && formData.confirmPassword && formData.referralCode && formData.password === formData.confirmPassword

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
          <p className="text-muted-foreground">إنشاء حساب جديد</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
              <Input
                type="tel"
                placeholder="01xxxxxxxxx"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
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
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">تأكيد كلمة المرور</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="تأكيد كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="goldearn-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">رمز الإحالة *</label>
              <Input
                type="text"
                placeholder="أدخل رمز الإحالة"
                value={formData.referralCode}
                onChange={(e) => handleInputChange('referralCode', e.target.value)}
                className="goldearn-input"
                required
              />
              <p className="text-xs text-muted-foreground">رمز الإحالة مطلوب للتسجيل</p>
            </div>

            <Button 
              type="submit" 
              className="w-full goldearn-button"
              disabled={!isFormValid}
            >
              إنشاء الحساب
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-muted-foreground">
              لديك حساب بالفعل؟{' '}
              <button 
                onClick={() => navigate('/')}
                className="text-primary hover:underline font-medium"
              >
                تسجيل الدخول
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage

