import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Crown, CheckCircle, AlertCircle, CreditCard } from 'lucide-react'

const VIPDetailsPage = () => {
  const navigate = useNavigate()
  const { level } = useParams()

  // Mock user balance - in real app this would come from state/API
  const userBalance = 100 // EGP

  const vipDetails = {
    'V1': {
      level: 'V1',
      price: 1500,
      dailyTasks: 1,
      dailyReward: 50,
      totalReturn: 1500,
      duration: 30,
      color: 'from-blue-500 to-blue-600'
    },
    'V2': {
      level: 'V2',
      price: 4800,
      dailyTasks: 2,
      dailyReward: 160,
      totalReturn: 4800,
      duration: 30,
      color: 'from-purple-500 to-purple-600'
    },
    'V3': {
      level: 'V3',
      price: 15000,
      dailyTasks: 4,
      dailyReward: 520,
      totalReturn: 15600,
      duration: 30,
      color: 'from-yellow-500 to-yellow-600'
    }
    // Add other levels as needed
  }

  const currentVIP = vipDetails[level] || vipDetails['V1']
  const canAfford = userBalance >= currentVIP.price

  const handleSubscribe = () => {
    if (canAfford) {
      // Simulate successful subscription
      alert(`تم الاشتراك في باقة ${currentVIP.level} بنجاح!`)
      navigate('/home')
    } else {
      // Redirect to top-up page
      navigate('/topup')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/vip')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">تفاصيل باقة {currentVIP.level}</h1>
      </div>

      <div className="p-4">
        {/* VIP Package Card */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentVIP.color} flex items-center justify-center mx-auto mb-4`}>
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">باقة {currentVIP.level}</h2>
              <div className="text-3xl font-bold text-primary mb-2">{currentVIP.price} EGP</div>
              <p className="text-muted-foreground">استثمار لمدة {currentVIP.duration} يوم</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-foreground">المهام اليومية</span>
                <span className="font-bold text-primary">{currentVIP.dailyTasks} مهمة</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-foreground">الربح اليومي</span>
                <span className="font-bold text-primary">{currentVIP.dailyReward} EGP</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-foreground">إجمالي العائد</span>
                <span className="font-bold text-green-400">{currentVIP.totalReturn} EGP</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-foreground">صافي الربح</span>
                <span className="font-bold text-green-400">+{currentVIP.totalReturn - currentVIP.price} EGP</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Balance Check */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground">رصيدك الحالي:</span>
              <span className="font-bold text-primary">{userBalance} EGP</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground">سعر الباقة:</span>
              <span className="font-bold text-foreground">{currentVIP.price} EGP</span>
            </div>
            <hr className="border-border my-3" />
            <div className="flex items-center justify-between">
              <span className="text-foreground">الحالة:</span>
              <div className="flex items-center space-x-2 space-x-reverse">
                {canAfford ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">يمكن الاشتراك</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-semibold">رصيد غير كافي</span>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">مميزات الباقة</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">أرباح يومية مضمونة</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">استرداد كامل للمبلغ المستثمر</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">مهام بسيطة وسريعة</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">دعم فني متاح 24/7</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">إمكانية السحب في أي وقت</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          {canAfford ? (
            <Button 
              className="w-full goldearn-button"
              onClick={handleSubscribe}
            >
              اشتراك الآن - {currentVIP.price} EGP
            </Button>
          ) : (
            <Button 
              className="w-full goldearn-button"
              onClick={() => navigate('/topup')}
            >
              <CreditCard className="w-5 h-5 ml-2" />
              شحن الرصيد أولاً
            </Button>
          )}
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/vip')}
          >
            مقارنة الباقات الأخرى
          </Button>
        </div>

        {/* Warning */}
        <Card className="goldearn-card mt-6">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3 space-x-reverse">
              <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-2">تنويه مهم</h5>
                <p className="text-sm text-muted-foreground">
                  يمكن الاشتراك في باقة واحدة فقط في كل مرة. تأكد من اختيار الباقة المناسبة لك قبل الاشتراك.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VIPDetailsPage

