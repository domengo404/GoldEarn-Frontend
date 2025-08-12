import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Banknote, AlertCircle, FileText, Clock, Phone } from 'lucide-react'

const WithdrawPage = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const navigate = useNavigate()

  // Mock user data
  const availableBalance = 100 // EGP
  const minWithdraw = 50 // EGP

  const handleWithdraw = (e) => {
    e.preventDefault()
    const amount = parseFloat(withdrawAmount)
    
    if (amount < minWithdraw) {
      alert(`الحد الأدنى للسحب هو ${minWithdraw} جنيه`)
      return
    }
    
    if (amount > availableBalance) {
      alert('المبلغ المطلوب أكبر من الرصيد المتاح')
      return
    }

    // Simulate withdrawal request
    alert('تم إرسال طلب السحب بنجاح! سيتم مراجعته خلال 24 ساعة.')
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center">
          <button 
            onClick={() => navigate('/home')}
            className="text-foreground ml-3"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-foreground">سحب الأرباح</h1>
        </div>
        <button 
          onClick={() => navigate('/withdraw-history')}
          className="text-primary text-sm font-medium"
        >
          <FileText className="w-4 h-4 inline ml-1" />
          سجل
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Available Balance */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <Banknote className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">الرصيد المتاح للسحب</h2>
            <div className="text-3xl font-bold text-primary mb-2">{availableBalance} EGP</div>
            <p className="text-sm text-muted-foreground">
              الحد الأدنى للسحب: {minWithdraw} جنيه
            </p>
          </CardContent>
        </Card>

        {/* Withdrawal Form */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">طلب سحب جديد</h3>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">المبلغ المطلوب سحبه</label>
                <Input
                  type="number"
                  placeholder="أدخل المبلغ"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="goldearn-input"
                  min={minWithdraw}
                  max={availableBalance}
                  step="0.01"
                />
                <p className="text-xs text-muted-foreground">
                  المبلغ يجب أن يكون بين {minWithdraw} و {availableBalance} جنيه
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full goldearn-button"
                disabled={!withdrawAmount || parseFloat(withdrawAmount) < minWithdraw}
              >
                إرسال طلب السحب
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Withdrawal Instructions */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">تعليمات الانسحاب</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">أوقات المعالجة</h4>
                  <p className="text-sm text-muted-foreground">
                    يتم معالجة طلبات السحب خلال 24-48 ساعة عمل
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Banknote className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">الرسوم</h4>
                  <p className="text-sm text-muted-foreground">
                    رسوم السحب: 2% من المبلغ المسحوب (الحد الأدنى 5 جنيه)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">مواعيد العمل</h4>
                  <p className="text-sm text-muted-foreground">
                    السبت - الخميس: 9:00 ص - 6:00 م (بتوقيت القاهرة)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">للمرة الأولى</h4>
                  <p className="text-sm text-muted-foreground">
                    إذا كانت هذه أول مرة تسحب فيها، يرجى التواصل معنا أولاً عبر الدعم الفني
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3 space-x-reverse">
              <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">ملاحظة مهمة</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• تأكد من صحة بيانات المحفظة قبل إرسال الطلب</li>
                  <li>• لا يمكن إلغاء طلب السحب بعد الإرسال</li>
                  <li>• سيتم خصم رسوم السحب من المبلغ المطلوب</li>
                  <li>• في حالة وجود مشكلة، تواصل مع الدعم الفني</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default WithdrawPage

